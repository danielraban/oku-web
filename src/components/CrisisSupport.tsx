import { CRISIS_RESOURCES } from "@/lib/site";

export default function CrisisSupport() {
  return (
    <section id="crisis-support" className="py-16 px-6 scroll-mt-16">
      <div className="max-w-4xl mx-auto rounded-3xl border border-accent-light bg-accent-subtle p-8 md:p-10">
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 rounded-xl bg-accent/15 text-accent flex items-center justify-center shrink-0">
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-foreground">
              In crisis right now? You deserve real support.
            </h2>
            <p className="mt-2 text-foreground-secondary leading-relaxed">
              Oku is a wellbeing companion, not an emergency service. If you or
              someone else is in danger, please reach out to a trained human right
              away — these UK services are free and available around the clock.
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {CRISIS_RESOURCES.map((r) => (
            <a
              key={r.name}
              href={r.href}
              className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-surface px-5 py-4 hover:border-border-strong hover:shadow-sm transition-all"
            >
              <div>
                <p className="font-semibold text-foreground">{r.name}</p>
                <p className="text-sm text-foreground-secondary">{r.detail}</p>
              </div>
              <span className="text-sm font-semibold text-accent whitespace-nowrap">
                {r.action}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
