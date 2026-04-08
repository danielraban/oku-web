variable "aws_region" {
  description = "Region for S3 bucket (must match ACM cert region for custom domain; CloudFront is global)."
  type        = string
  default     = "eu-west-2"
}

variable "project_name" {
  description = "Short name for resource naming (e.g. oku-web)"
  type        = string
  default     = "oku-web"
}

variable "bucket_name" {
  description = "Globally unique S3 bucket name for static files"
  type        = string
}

variable "domain_name" {
  description = "Optional custom domain for CloudFront (e.g. www.okuapp.com). Requires ACM cert in us-east-1."
  type        = string
  default     = ""
}

variable "acm_certificate_arn" {
  description = "Optional ACM certificate ARN in us-east-1 for HTTPS + custom domain. Leave empty to use *.cloudfront.net."
  type        = string
  default     = ""
}

variable "cloudfront_price_class" {
  description = "PriceClass_All, PriceClass_200, or PriceClass_100"
  type        = string
  default     = "PriceClass_100"
}

variable "github_repository" {
  description = "GitHub repo in org/name form (e.g. danielraban/oku-web). When set, creates an IAM role for Actions OIDC deploy. Requires the account to already have the GitHub OIDC provider (see oku-api infra)."
  type        = string
  default     = ""
}
