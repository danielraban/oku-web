#!/usr/bin/env bash
# Sync Next.js static export (out/) to S3 and invalidate CloudFront.
# Requires: aws CLI; Terraform applied in infra/ so outputs exist (or set S3_BUCKET + CLOUDFRONT_ID yourself).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
INFRA_DIR="$ROOT/infra"
cd "$ROOT"

# Valid S3 bucket label (strict enough to reject Terraform error text accidentally pasted as the name)
is_valid_bucket_name() {
  local b="$1"
  [[ -n "$b" ]] || return 1
  [[ ${#b} -le 63 ]] || return 1
  [[ "$b" =~ ^[a-z0-9][a-z0-9.-]*[a-z0-9]$ ]] || [[ "$b" =~ ^[a-z0-9]{1,63}$ ]] || return 1
  return 0
}

# CloudFront distribution IDs look like E1A2B3C4D5E6F7
is_valid_cloudfront_id() {
  local id="$1"
  [[ -n "$id" ]] || return 1
  [[ ${#id} -le 32 ]] || return 1
  [[ "$id" =~ ^E[A-Z0-9]+$ ]] || return 1
  return 0
}

# Drop bad env from a failed `export S3_BUCKET=$(terraform output ...)` that captured stderr
sanitize_deploy_env() {
  if [[ -n "${S3_BUCKET:-}" ]] && ! is_valid_bucket_name "$S3_BUCKET"; then
    echo "warning: ignoring invalid S3_BUCKET (unset with: unset S3_BUCKET)" >&2
    unset S3_BUCKET
  fi
  if [[ -n "${CLOUDFRONT_ID:-}" ]] && ! is_valid_cloudfront_id "$CLOUDFRONT_ID"; then
    echo "warning: ignoring invalid CLOUDFRONT_ID (unset with: unset CLOUDFRONT_ID)" >&2
    unset CLOUDFRONT_ID
  fi
}

load_outputs_from_terraform() {
  if [[ ! -d "$INFRA_DIR/.terraform" ]]; then
    echo "error: $INFRA_DIR/.terraform missing. Run: cd infra && terraform init && terraform apply" >&2
    return 1
  fi
  local raw_bucket raw_cf
  if ! raw_bucket="$(terraform -chdir="$INFRA_DIR" output -raw s3_bucket_name 2>/dev/null)"; then
    echo "error: terraform output s3_bucket_name failed. From repo root: cd infra && terraform apply" >&2
    return 1
  fi
  if ! raw_cf="$(terraform -chdir="$INFRA_DIR" output -raw cloudfront_distribution_id 2>/dev/null)"; then
    echo "error: terraform output cloudfront_distribution_id failed. From repo root: cd infra && terraform apply" >&2
    return 1
  fi
  if [[ -z "$raw_bucket" || -z "$raw_cf" ]]; then
    echo "error: Terraform outputs are empty. Run: cd infra && terraform apply (creates S3 + CloudFront)" >&2
    return 1
  fi
  S3_BUCKET="$raw_bucket"
  CLOUDFRONT_ID="$raw_cf"
  return 0
}

sanitize_deploy_env

# Use explicit env only if both are valid; otherwise load from Terraform (must have applied infra once).
if [[ -n "${S3_BUCKET:-}" && -n "${CLOUDFRONT_ID:-}" ]]; then
  :
else
  load_outputs_from_terraform || exit 1
fi

if ! is_valid_bucket_name "$S3_BUCKET" || ! is_valid_cloudfront_id "$CLOUDFRONT_ID"; then
  echo "error: invalid S3_BUCKET or CLOUDFRONT_ID after loading Terraform." >&2
  echo "Run: cd infra && terraform init && terraform apply" >&2
  exit 1
fi

if [[ -z "${NEXT_PUBLIC_OKU_API_URL:-}" ]]; then
  echo "warning: NEXT_PUBLIC_OKU_API_URL is unset; the waitlist form will not call your API in this build." >&2
fi

npm run build

aws s3 sync out/ "s3://${S3_BUCKET}/" --delete

aws cloudfront create-invalidation --distribution-id "$CLOUDFRONT_ID" --paths "/*" >/dev/null
echo "Deployed to s3://${S3_BUCKET} and invalidated CloudFront ${CLOUDFRONT_ID}"
