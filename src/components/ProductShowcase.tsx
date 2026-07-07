export default function ProductShowcase() {
  return (
    <section id="preview" className="py-24 px-6 overflow-hidden scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-subtle text-primary text-sm font-medium mb-6">
            A peek inside
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Calm by design
          </h2>
          <p className="mt-4 text-lg text-foreground-secondary max-w-2xl mx-auto">
            Every screen is built to lower the noise — soft colour, gentle
            motion, and only what matters today.
          </p>
        </div>

        <div className="flex flex-wrap items-end justify-center gap-6 md:gap-10">
          <Phone className="md:mb-10">
            <MoodScreen />
          </Phone>
          <Phone className="scale-105 z-10">
            <FocusScreen />
          </Phone>
          <Phone className="md:mb-10">
            <JournalScreen />
          </Phone>
        </div>
      </div>
    </section>
  );
}

function Phone({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative w-[248px] shrink-0 rounded-[2.5rem] border-[6px] border-foreground/85 bg-background shadow-xl ${className}`}
    >
      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-5 rounded-full bg-foreground/85 z-20" />
      <div className="h-[500px] rounded-[2rem] overflow-hidden bg-background-subtle">
        {children}
      </div>
    </div>
  );
}

function ScreenHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="px-5 pt-9 pb-4">
      <p className="text-xs text-foreground-muted">{subtitle}</p>
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
    </div>
  );
}

function MoodScreen() {
  const bars = [40, 55, 35, 70, 60, 85, 75];
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  return (
    <div className="h-full flex flex-col">
      <ScreenHeader title="Your week" subtitle="Mood trends" />
      <div className="px-5">
        <div className="rounded-2xl bg-surface border border-border p-4">
          <div className="flex items-end justify-between h-28 gap-2">
            {bars.map((h, i) => (
              <div key={i} className="flex-1 flex flex-col justify-end">
                <div
                  className="w-full rounded-md bg-primary"
                  style={{ height: `${h}%`, opacity: 0.55 + i * 0.06 }}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2">
            {days.map((d, i) => (
              <span key={i} className="flex-1 text-center text-[10px] text-foreground-muted">
                {d}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="px-5 mt-4 space-y-2">
        <StatRow label="Average mood" value="Good" tone="text-primary" />
        <StatRow label="Focus" value="+12%" tone="text-secondary" />
        <StatRow label="Stress" value="Lower" tone="text-success" />
      </div>
    </div>
  );
}

function FocusScreen() {
  return (
    <div className="h-full flex flex-col items-center">
      <ScreenHeader title="Focus session" subtitle="Deep work" />
      <div className="relative mt-6 w-40 h-40">
        <div className="absolute inset-0 rounded-full border-8 border-border" />
        <div
          className="absolute inset-0 rounded-full border-8 border-secondary"
          style={{ clipPath: "polygon(50% 50%, 50% 0, 100% 0, 100% 100%, 50% 100%)" }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-foreground">18:24</span>
          <span className="text-xs text-foreground-muted">remaining</span>
        </div>
      </div>
      <div className="mt-6 px-5 w-full space-y-2">
        <div className="flex items-center justify-between rounded-xl bg-surface border border-border px-4 py-3">
          <span className="text-sm text-foreground">Brown noise</span>
          <span className="text-xs text-secondary font-medium">Playing</span>
        </div>
        <div className="flex items-center justify-center gap-3 pt-2">
          <div className="w-11 h-11 rounded-full bg-surface border border-border" />
          <div className="w-14 h-14 rounded-full bg-secondary" />
          <div className="w-11 h-11 rounded-full bg-surface border border-border" />
        </div>
      </div>
    </div>
  );
}

function JournalScreen() {
  return (
    <div className="h-full flex flex-col">
      <ScreenHeader title="Today" subtitle="Journal" />
      <div className="px-5 space-y-3">
        <div className="rounded-2xl bg-surface border border-border p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-7 h-7 rounded-full bg-accent-subtle flex items-center justify-center text-sm">
              🙂
            </span>
            <span className="text-sm font-medium text-foreground">Feeling steady</span>
          </div>
          <div className="space-y-1.5">
            <div className="h-2 rounded bg-border w-full" />
            <div className="h-2 rounded bg-border w-4/5" />
            <div className="h-2 rounded bg-border w-2/3" />
          </div>
        </div>
        <div className="rounded-2xl bg-surface border border-border p-4">
          <span className="text-xs text-foreground-muted">Prompt</span>
          <p className="text-sm text-foreground mt-1">
            What&apos;s one small thing that went well today?
          </p>
        </div>
        <div className="flex gap-2">
          <span className="px-3 py-1 rounded-full bg-primary-subtle text-primary text-xs">
            #grateful
          </span>
          <span className="px-3 py-1 rounded-full bg-secondary-subtle text-secondary text-xs">
            #calm
          </span>
        </div>
      </div>
    </div>
  );
}

function StatRow({ label, value, tone }: { label: string; value: string; tone: string }) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-surface border border-border px-4 py-3">
      <span className="text-sm text-foreground-secondary">{label}</span>
      <span className={`text-sm font-semibold ${tone}`}>{value}</span>
    </div>
  );
}
