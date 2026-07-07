import type { Metadata } from "next";
import LegalPageShell from "@/components/LegalPageShell";

export const metadata: Metadata = {
  title: "Wellbeing — NHS Mind Plan",
  description:
    "Take the NHS Every Mind Matters 'Your Mind Plan' quiz for personalised, expert-backed tips on sleep, stress, and mood.",
};

const NHS_QUIZ_URL =
  "https://www.nhs.uk/every-mind-matters/mental-wellbeing-tips/your-mind-plan-quiz/";
const NHS_EMM_URL = "https://www.nhs.uk/every-mind-matters/";

const RESOURCES = [
  {
    title: "Dealing with stress",
    href: "https://www.nhs.uk/every-mind-matters/mental-health-issues/stress/",
  },
  {
    title: "Sleep better tonight",
    href: "https://www.nhs.uk/every-mind-matters/mental-health-issues/sleep/",
  },
  {
    title: "Coping with anxiety",
    href: "https://www.nhs.uk/every-mind-matters/mental-health-issues/anxiety/",
  },
  {
    title: "Lifting low mood",
    href: "https://www.nhs.uk/every-mind-matters/mental-health-issues/low-mood-and-depression/",
  },
];

export default function WellbeingPage() {
  return (
    <LegalPageShell>
      <div className="max-w-3xl mx-auto">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-subtle text-primary text-sm font-medium mb-6">
          NHS Every Mind Matters
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
          Your Mind Plan
        </h1>
        <p className="mt-4 text-lg text-foreground-secondary leading-relaxed">
          Answer five quick questions and the NHS will build you a free,
          personalised Mind Plan — practical tips to help you deal with stress,
          sleep better, boost your mood, and feel more in control.
        </p>

        <div className="mt-8 rounded-3xl border border-border bg-surface p-6 md:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-primary-subtle text-primary flex items-center justify-center shrink-0">
              <svg
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-foreground">
                Take the quiz on the NHS website
              </h2>
              <p className="mt-1 text-foreground-secondary text-sm leading-relaxed">
                The quiz runs securely on nhs.uk and opens in a new tab. It&apos;s
                completely free and takes about 3 minutes.
              </p>
            </div>
            <a
              href={NHS_QUIZ_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-on-primary font-medium hover:bg-primary-dark transition-colors whitespace-nowrap"
            >
              Start the quiz
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-semibold text-foreground">
            More free NHS wellbeing guides
          </h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {RESOURCES.map((r) => (
              <a
                key={r.title}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-surface px-5 py-4 hover:border-border-strong hover:shadow-sm transition-all"
              >
                <span className="font-medium text-foreground">{r.title}</span>
                <svg
                  className="w-4 h-4 text-foreground-muted shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.75}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <p className="text-xs text-foreground-muted mt-10">
          The Mind Plan and linked guides are provided by the NHS via{" "}
          <a
            href={NHS_EMM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-foreground-secondary"
          >
            Every Mind Matters
          </a>
          . Oku links to these resources for your convenience and is not affiliated
          with or endorsed by the NHS. Contains public sector information licensed
          under the Open Government Licence v3.0.
        </p>
      </div>
    </LegalPageShell>
  );
}
