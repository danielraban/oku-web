# Oku — Marketing Site

Landing page for the Oku mental health app. Built with Next.js, Tailwind CSS, and the Serenity colour system.

## Local development

```bash
npm install
cp .env.example .env.local
# Set NEXT_PUBLIC_OKU_API_URL to your local or staging API (waitlist form)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

- `/` — Marketing landing page
- `/wellbeing` — NHS Every Mind Matters **Mind Plan** quiz embedded via iframe (if NHS blocks framing in your browser, open the quiz directly on [nhs.uk](https://www.nhs.uk/every-mind-matters/mental-wellbeing-tips/your-mind-plan-quiz/))

## Deploy to AWS (S3 + CloudFront)

The app is built as a **static export** (`output: 'export'`) and synced to S3 in front of CloudFront. See **[infra/README.md](infra/README.md)** for Terraform and **[scripts/deploy-aws.sh](scripts/deploy-aws.sh)** for uploads.

1. Apply Terraform in `infra/` (bucket + distribution).
2. Build with `NEXT_PUBLIC_OKU_API_URL` pointing at your **oku-api** (includes `POST /marketing/waitlist`).
3. Run `scripts/deploy-aws.sh` with `S3_BUCKET` and `CLOUDFRONT_ID` from Terraform outputs.

Custom domains need an **ACM certificate in `us-east-1`** (CloudFront requirement).

## Theme

The site uses the **Serenity** colour palette (shared with the mobile app). Light and dark modes are toggled via the navbar switch, powered by `next-themes`.

## Tech stack

- **Next.js** (App Router, static export for AWS)
- **Tailwind CSS v4** with custom theme tokens
- **next-themes** for light/dark/system toggle
- Waitlist: `fetch` to **oku-api** `POST /marketing/waitlist` (stored in Postgres)
