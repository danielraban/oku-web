"use client";

import { useState, FormEvent } from "react";
import { getPublicApiBaseUrl } from "@/lib/api";

export default function EarlyAccessForm() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const email = (new FormData(form).get("email") as string)?.trim();
    if (!email) {
      setError("Please enter your email.");
      return;
    }

    const base = getPublicApiBaseUrl();
    if (!base) {
      setError("Waitlist is not configured. Set NEXT_PUBLIC_OKU_API_URL.");
      return;
    }

    setIsPending(true);
    try {
      const res = await fetch(`${base}/marketing/waitlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json().catch(() => ({}))) as { message?: string };

      if (!res.ok) {
        setError(data.message ?? "Something went wrong. Please try again.");
        return;
      }
      setSuccess(true);
      form.reset();
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsPending(false);
    }
  }

  return (
    <section id="early-access" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Get early access
        </h2>
        <p className="mt-4 text-lg text-foreground-secondary">
          We&apos;re launching soon. Drop your email and be the first to know.
        </p>

        {success ? (
          <div className="mt-10 p-6 rounded-2xl bg-primary-subtle border border-primary-light">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-foreground">
              You&apos;re on the list!
            </h3>
            <p className="mt-2 text-foreground-secondary">
              We&apos;ll let you know as soon as Oku is ready.
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-10">
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="flex-1 px-5 py-3.5 rounded-full border border-border bg-surface text-foreground placeholder:text-foreground-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
              />
              <button
                type="submit"
                disabled={isPending}
                className="px-8 py-3.5 rounded-full bg-primary text-on-primary font-medium hover:bg-primary-dark disabled:opacity-60 transition-colors whitespace-nowrap"
              >
                {isPending ? "Joining..." : "Join Waitlist"}
              </button>
            </div>
            {error && (
              <p className="mt-3 text-sm text-error">{error}</p>
            )}
            <p className="mt-4 text-sm text-foreground-muted">
              No spam, ever. Unsubscribe anytime.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
