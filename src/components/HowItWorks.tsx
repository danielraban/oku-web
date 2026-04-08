const STEPS = [
  {
    number: "01",
    title: "Download",
    description:
      "Get Oku on iOS or Android. Set up your profile in under a minute — no lengthy onboarding.",
    accent: "text-primary",
    bg: "bg-primary-subtle",
  },
  {
    number: "02",
    title: "Track",
    description:
      "Check in with your mood, log medication, start a focus session, or write in your journal. Whatever you need that day.",
    accent: "text-secondary",
    bg: "bg-secondary-subtle",
  },
  {
    number: "03",
    title: "Thrive",
    description:
      "See trends over time, earn streaks, unlock achievements, and build sustainable habits that support your wellbeing.",
    accent: "text-accent",
    bg: "bg-accent-subtle",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 bg-background-subtle">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            How it works
          </h2>
          <p className="mt-4 text-lg text-foreground-secondary">
            Three simple steps to a calmer, more intentional day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((step) => (
            <div key={step.number} className="text-center">
              <div
                className={`w-16 h-16 rounded-2xl ${step.bg} flex items-center justify-center mx-auto mb-5`}
              >
                <span className={`text-2xl font-bold ${step.accent}`}>
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-foreground-secondary leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
