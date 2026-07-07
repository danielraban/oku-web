-- Run once in the Neon SQL Editor (Vercel dashboard → Storage → your database → Query)
-- or via psql against DATABASE_URL.

CREATE TABLE IF NOT EXISTS waitlist (
  id         SERIAL PRIMARY KEY,
  email      VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
