# Oku — Marketing Site

Landing page for the Oku mental health app. Built with Next.js, Tailwind CSS, and the Serenity colour system.

## Local development

```bash
npm install
cp .env.example .env.local
# Pull DATABASE_URL from Vercel after adding the Neon integration:
# vercel env pull .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

- `/` — Marketing landing page
- `/wellbeing` — NHS Every Mind Matters **Mind Plan** quiz embedded via iframe (if NHS blocks framing in your browser, open the quiz directly on [nhs.uk](https://www.nhs.uk/every-mind-matters/mental-wellbeing-tips/your-mind-plan-quiz/))

## Deploy to Vercel

The app is a standard Next.js app deployed on **[Vercel](https://vercel.com)**. The project is already linked (see `.vercel/`), so pushing to `main` triggers a production deployment automatically via Vercel's Git integration; other branches get preview deployments.

### Waitlist (early access signups)

Signups are stored in **Neon Postgres** via a Next.js API route (`POST /api/waitlist`).

1. In the Vercel dashboard, open your project → **Storage** → **Create Database** → **Neon** (or run `vercel integration add neon`).
2. Run the SQL in [`schema.sql`](schema.sql) in the Neon SQL editor to create the `waitlist` table.
3. `DATABASE_URL` is injected automatically — no manual env var needed.
4. Push to `main` (or run `vercel --prod`).

To view signups: Vercel dashboard → Storage → your Neon database → **Data** tab, or query `SELECT * FROM waitlist ORDER BY created_at DESC` in the SQL editor.

### Deploy

To deploy manually from your machine, install the CLI (`npm i -g vercel`) and run `vercel` (preview) or `vercel --prod` (production).

Custom domains are configured in the Vercel dashboard (Settings → Domains) — TLS certificates are provisioned automatically.

## Theme

The site uses the **Serenity** colour palette (shared with the mobile app). Light and dark modes are toggled via the navbar switch, powered by `next-themes`.

## Tech stack

- **Next.js** (App Router, deployed on Vercel)
- **Tailwind CSS v4** with custom theme tokens
- **next-themes** for light/dark/system toggle
- Waitlist: `POST /api/waitlist` → Neon Postgres (`waitlist` table)
