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

export function getSql(): NeonQueryFunction<false, false> {
  if (!cached) {
    const url = process.env.DATABASE_URL;
    if (!url) {
      throw new Error("DATABASE_URL is not set");
    }
    cached = neon(url);
  }
  return cached;
}
