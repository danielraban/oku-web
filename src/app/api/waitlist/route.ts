import { NextResponse } from "next/server";
import { getSql } from "@/lib/db";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid JSON body." }, { status: 400 });
  }

  const email =
    typeof body === "object" &&
    body !== null &&
    "email" in body &&
    typeof (body as { email: unknown }).email === "string"
      ? (body as { email: string }).email.trim().toLowerCase()
      : "";

  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json(
      { message: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  try {
    const sql = getSql();
    await sql`
      INSERT INTO waitlist (email)
      VALUES (${email})
      ON CONFLICT (email) DO NOTHING
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
