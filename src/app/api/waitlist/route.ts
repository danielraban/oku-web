import { NextResponse } from "next/server";
import { getSql } from "@/lib/db";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const VALID_PLATFORMS = new Set(["ios", "android", "both"]);

async function ensureWaitlistTable() {
  const sql = getSql();
  await sql`
    CREATE TABLE IF NOT EXISTS waitlist (
      id         SERIAL PRIMARY KEY,
      email      VARCHAR(255) UNIQUE NOT NULL,
      platform   VARCHAR(16),
      created_at TIMESTAMPTZ DEFAULT NOW()
    )
  `;
  await sql`ALTER TABLE waitlist ADD COLUMN IF NOT EXISTS platform VARCHAR(16)`;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid JSON body." }, { status: 400 });
  }

  const record =
    typeof body === "object" && body !== null
      ? (body as { email?: unknown; platform?: unknown })
      : {};

  const email =
    typeof record.email === "string"
      ? record.email.trim().toLowerCase()
      : "";

  const rawPlatform =
    typeof record.platform === "string" ? record.platform.trim().toLowerCase() : "";
  const platform = VALID_PLATFORMS.has(rawPlatform) ? rawPlatform : null;

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { message: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  try {
    await ensureWaitlistTable();
    const sql = getSql();
    await sql`
      INSERT INTO waitlist (email, platform)
      VALUES (${email}, ${platform})
      ON CONFLICT (email) DO UPDATE SET platform = COALESCE(EXCLUDED.platform, waitlist.platform)
    `;
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("waitlist insert failed:", err);
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
