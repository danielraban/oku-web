"use client";

import { useEffect, useState } from "react";

const TESTIMONIALS = [
  {
    quote:
      "I've tried every mood tracker going. Oku is the first one that doesn't feel like homework — it's genuinely calming to open.",
    name: "Priya",
    role: "Early tester, Manchester",
  },
  {
    quote:
      "Having somewhere to talk at 2am when my head won't switch off has been a game changer. It just listens.",
    name: "Tom",
    role: "Early tester, Bristol",
  },
  {
    quote:
      "Logging my meds and mood in the same place finally helped me spot what actually affects my week.",
    name: "Sarah",
    role: "Early tester, Leeds",
  },
];

export default function SocialProof() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let active = true;
    fetch("/api/waitlist/count")
      .then((r) => r.json())
      .then((d: { count?: number }) => {
        if (active && typeof d.count === "number") setCount(d.count);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  return (
    <section className="py-24 px-6 bg-background-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 rounded-full border border-border bg-surface px-5 py-2.5">
            <div className="flex -space-x-2" aria-hidden="true">
              {["bg-primary", "bg-secondary", "bg-accent", "bg-success"].map((c) => (
                <span
                  key={c}
                  className={`w-6 h-6 rounded-full border-2 border-surface ${c}`}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-foreground">
              {count === null ? (
                "Join the growing waitlist"
              ) : (
                <>
                  <span className="text-primary font-semibold">
                    {count.toLocaleString("en-GB")}+
                  </span>{" "}
                  people waiting for Oku
                </>
              )}
            </span>
          </div>
          <h2 className="mt-6 text-3xl md:text-4xl font-bold text-foreground">
            Loved by our early community
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-border bg-surface p-6 flex flex-col"
            >
              <div className="flex gap-0.5 mb-4" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 text-warning"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <blockquote className="text-foreground-secondary leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 pt-4 border-t border-border">
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-foreground-muted">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
