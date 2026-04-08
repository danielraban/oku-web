-- Run this in the Vercel Postgres console (Storage > your database > Query)
-- or via psql against your POSTGRES_URL

CREATE TABLE IF NOT EXISTS waitlist (
  id         SERIAL PRIMARY KEY,
  email      VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
