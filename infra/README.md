# Oku marketing site — AWS (S3 + CloudFront)

This stack hosts the static Next.js export (`output: 'export'`) from the parent directory.

## One-time setup

1. **ACM certificate (optional, for a custom domain)**  
   CloudFront requires the certificate in **us-east-1**. Request or import a cert for `www.yourdomain.com` (or apex + SAN).

2. **Terraform**

   ```bash
   cd infra
   cp terraform.tfvars.example terraform.tfvars
   # edit bucket_name (globally unique), optional domain + acm_certificate_arn
   terraform init
   terraform apply
   ```

3. **DNS**  
   Create a **CNAME** from your hostname to the `cloudfront_domain` output (or use Route53 alias to the distribution if you use Route53).

## Deploy a new build

### GitHub Actions (merge to `main`)

1. In **Terraform**, set `github_repository` to `your-org/oku-web` and `terraform apply` (requires the [GitHub OIDC provider](https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services) to exist in the account — usually already created by **oku-api** `infra/`).
2. Add repository **secrets**: `AWS_ROLE_ARN` (output `github_actions_deploy_role_arn`), `AWS_REGION`.
3. Add repository **variables**: `S3_BUCKET` (output `s3_bucket_name`), `CLOUDFRONT_DISTRIBUTION_ID` (output `cloudfront_distribution_id`), `NEXT_PUBLIC_OKU_API_URL` (your public API base URL, no trailing slash).

Pushing (or merging) to **`main`** runs `.github/workflows/deploy-production.yml`: `npm ci`, `npm run build`, `aws s3 sync`, CloudFront invalidation.

### Manual deploy

From the **oku-web** repo root, with API URL baked into the client:

```bash
export NEXT_PUBLIC_OKU_API_URL=https://your-api.example.com
npm run build
export S3_BUCKET="$(terraform -chdir=infra output -raw s3_bucket_name)"
export CLOUDFRONT_ID="$(terraform -chdir=infra output -raw cloudfront_distribution_id)"
bash scripts/deploy-aws.sh
```

Or set `S3_BUCKET` and `CLOUDFRONT_ID` manually from `terraform output`.

## API dependency

The waitlist posts to `POST {NEXT_PUBLIC_OKU_API_URL}/marketing/waitlist` on the **oku-api** service. Ensure CORS allows your marketing origin (oku-api uses permissive CORS in development; tighten for production if needed).

## NHS wellbeing page (CSP)

`next.config.ts` **headers** are not applied when using `output: 'export'`. If the Mind Plan iframe needs a strict CSP, add a **CloudFront response headers policy** or edge rules for path `/wellbeing` / `/wellbeing/index.html`.
