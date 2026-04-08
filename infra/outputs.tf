output "s3_bucket_name" {
  value       = aws_s3_bucket.site.id
  description = "Upload static export here (see ../scripts/deploy-aws.sh)"
}

output "cloudfront_domain" {
  value       = aws_cloudfront_distribution.site.domain_name
  description = "Default CloudFront hostname (*.cloudfront.net) until you attach a custom domain"
}

output "cloudfront_distribution_id" {
  value       = aws_cloudfront_distribution.site.id
  description = "Use for cache invalidation after deploy"
}

output "cloudfront_url" {
  value       = "https://${aws_cloudfront_distribution.site.domain_name}"
  description = "Temporary URL until DNS points at the distribution"
}

output "github_actions_deploy_role_arn" {
  value       = one(aws_iam_role.github_actions_web[*].arn)
  description = "Set as GitHub secret AWS_ROLE_ARN for deploy-production workflow"
}
