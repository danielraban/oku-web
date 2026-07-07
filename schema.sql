-- Run once in the Neon SQL Editor (Vercel dashboard → Storage → your database → Query)
-- or via psql against DATABASE_URL.

CREATE TABLE IF NOT EXISTS waitlist (
  id         SERIAL PRIMARY KEY,
  email      VARCHAR(255) UNIQUE NOT NULL,
  platform   VARCHAR(16),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- If the table already exists from an earlier version, add the column:
ALTER TABLE waitlist ADD COLUMN IF NOT EXISTS platform VARCHAR(16);
