# Assumes GitHub OIDC for token.actions.githubusercontent.com already exists in the account
# (e.g. created by oku-api Terraform). If not, create it once or add the same
# aws_iam_openid_connect_provider resource here with count.

data "aws_iam_openid_connect_provider" "github" {
  url = "https://token.actions.githubusercontent.com"
}

data "aws_caller_identity" "current" {}

resource "aws_iam_role" "github_actions_web" {
  count = var.github_repository != "" ? 1 : 0
  name  = "${var.project_name}-github-actions"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Effect = "Allow"
      Action = "sts:AssumeRoleWithWebIdentity"
      Principal = {
        Federated = data.aws_iam_openid_connect_provider.github.arn
      }
      Condition = {
        StringEquals = {
          "token.actions.githubusercontent.com:aud" = "sts.amazonaws.com"
        }
        StringLike = {
          "token.actions.githubusercontent.com:sub" = "repo:${var.github_repository}:ref:refs/heads/main"
        }
      }
    }]
  })
}

resource "aws_iam_role_policy" "github_actions_web_sync" {
  count = var.github_repository != "" ? 1 : 0
  name  = "s3-cloudfront"
  role  = aws_iam_role.github_actions_web[0].id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = "S3Sync"
        Effect = "Allow"
        Action = [
          "s3:PutObject",
          "s3:GetObject",
          "s3:DeleteObject",
          "s3:ListBucket",
        ]
        Resource = [
          aws_s3_bucket.site.arn,
          "${aws_s3_bucket.site.arn}/*",
        ]
      },
      {
        Sid    = "InvalidateCache"
        Effect = "Allow"
        Action = "cloudfront:CreateInvalidation"
        # Wildcard so GitHub var CLOUDFRONT_DISTRIBUTION_ID always matches IAM (same account).
        # Scoped to this account only; OIDC already limits who can assume the role.
        Resource = "arn:aws:cloudfront::${data.aws_caller_identity.current.account_id}:distribution/*"
      },
    ]
  })
}
