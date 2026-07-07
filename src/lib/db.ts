import { neon, type NeonQueryFunction } from "@neondatabase/serverless";

/**
 * Lazy Neon client. We do NOT call neon() at module load: next build evaluates
 * top-level code, and neon() throws when DATABASE_URL is unset (e.g. the first
 * deploy before the Marketplace integration provisions env vars).
 *
 * DATABASE_URL is injected automatically by the Vercel Neon integration
 * (`vercel integration add neon`). Locally, pull it with `vercel env pull`.
 */
let cached: NeonQueryFunction<false, false> | null = null;

function getDatabaseUrl(): string {
  const url =
    process.env.DATABASE_URL ??
    process.env.POSTGRES_URL ??
    process.env.POSTGRES_PRISMA_URL;

  if (!url) {
    throw new Error("DATABASE_URL is not set");
  }

  // Neon + Vercel often set DATABASE_URL to the `postgres` database while app
  // tables (e.g. waitlist) live in the project database (`neondb`).
  const database =
    process.env.POSTGRES_DATABASE?.trim() ||
    process.env.PGDATABASE?.trim();

  if (!database || database === "postgres") {
    return url;
  }

  try {
    const parsed = new URL(url.replace(/^postgresql:/, "postgres:"));
    const pathDb = parsed.pathname.replace(/^\//, "");
    if (!pathDb || pathDb === "postgres") {
      parsed.pathname = `/${database}`;
      return parsed.toString().replace(/^postgres:/, "postgresql:");
    }
  } catch {
    // Fall back to the raw URL if parsing fails.
  }

  return url;
}

export function getSql(): NeonQueryFunction<false, false> {
  if (!cached) {
    cached = neon(getDatabaseUrl());
  }
  return cached;
}
