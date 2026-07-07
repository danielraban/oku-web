import { NextResponse } from "next/server";
import { getSql } from "@/lib/db";
import { SITE } from "@/lib/site";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const sql = getSql();
    const rows = (await sql`SELECT COUNT(*)::int AS count FROM waitlist`) as {
      count: number;
    }[];
    const real = rows[0]?.count ?? 0;
    return NextResponse.json({ count: real + SITE.waitlistBaseCount });
  } catch {
    // DB not provisioned yet (e.g. first deploy) — fall back to base count.
    return NextResponse.json({ count: SITE.waitlistBaseCount });
  }
}
