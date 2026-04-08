# Copy to terraform.tfvars and set bucket_name (globally unique).

aws_region   = "eu-west-2"
project_name = "oku-web"
bucket_name  = "daniel-oku-web-prod"

# Optional: custom domain (ACM certificate must be in us-east-1 for CloudFront)
# domain_name         = "www.okuapp.com"
# acm_certificate_arn = "arn:aws:acm:us-east-1:123456789012:certificate/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"

# GitHub Actions OIDC deploy (same account must already have the GitHub OIDC provider, e.g. from oku-api)
# github_repository = "your-org/oku-web"
