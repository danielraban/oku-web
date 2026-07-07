const FAQS = [
  {
    q: "When is Oku launching?",
    a: "We're launching in the UK first, on iOS and Android. Join the waitlist and you'll be among the first to get access — we'll email you the moment it's ready.",
  },
  {
    q: "Is Oku free?",
    a: "The core wellbeing tools — mood tracking, journaling, and focus sessions — will be free. Some advanced features, like the AI companion, will be part of an optional low-cost subscription. We'll always be upfront about pricing before you pay anything.",
  },
  {
    q: "Is the AI a real therapist?",
    a: "No. Oku's AI companion offers a supportive, judgment-free space to talk things through and learn coping strategies, but it is not a licensed therapist and isn't a substitute for professional care. If you're in crisis, please use the crisis support resources above.",
  },
  {
    q: "How is my data protected?",
    a: "Your data is encrypted in transit and at rest, stored in line with UK GDPR and the Data Protection Act 2018, and never sold. AI conversations are private — no human reads them. You can export or delete your data at any time.",
  },
  {
    q: "Which countries is Oku available in?",
    a: "Oku is launching in the United Kingdom first. We plan to expand to other regions after launch — join the waitlist to hear when we reach yours.",
  },
  {
    q: "Can Oku help me manage my medication?",
    a: "Yes. You can track medications, set reminder schedules, and log doses and side effects. It's a convenience tool to support you — always follow your prescriber's instructions.",
  },
];

export default function FAQ() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="faq" className="py-24 px-6 scroll-mt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-foreground-secondary">
            Everything you might want to know before you join.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-border bg-surface px-6 py-5 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
                <span className="font-semibold text-foreground">{f.q}</span>
                <svg
                  className="w-5 h-5 text-foreground-muted shrink-0 transition-transform group-open:rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.75}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </summary>
              <p className="mt-4 text-foreground-secondary leading-relaxed">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
