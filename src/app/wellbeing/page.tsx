import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wellbeing — NHS Mind Plan | Oku",
  description:
    "Every Mind Matters — Your Mind Plan quiz from the NHS. Tailored tips for sleep, stress, and mood.",
};

export default function WellbeingPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-semibold text-foreground mb-2">
          NHS Every Mind Matters
        </h1>
        <p className="text-foreground-secondary mb-8 max-w-xl">
          Take the Mind Plan quiz for personalised actions to support your mental wellbeing.
          This content is provided by the NHS; Oku embeds it for your convenience.
        </p>
        <div className="w-full min-h-[720px] rounded-2xl overflow-hidden border border-border bg-surface shadow-sm">
          <iframe
            title="NHS Your Mind Plan"
            src="https://www.nhs.uk/every-mind-matters/mental-wellbeing-tips/your-mind-plan-quiz/"
            className="w-full min-h-[720px] border-0"
            loading="lazy"
          />
        </div>
        <p className="text-xs text-foreground-muted mt-6">
          Contains public sector information licensed under the Open Government Licence v3.0.
        </p>
      </div>
    </div>
  );
}
