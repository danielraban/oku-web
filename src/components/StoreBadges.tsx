export default function StoreBadges({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <Badge
        store="App Store"
        icon={
          <path d="M16.365 1.43c0 1.14-.417 2.2-1.25 3.03-.99.99-2.09 1.56-3.28 1.47-.14-1.13.43-2.29 1.2-3.03.85-.82 2.28-1.42 3.33-1.47zM20.5 17.02c-.55 1.27-.82 1.84-1.53 2.97-.99 1.57-2.39 3.52-4.12 3.53-1.54.02-1.93-1-4.02-.99-2.09.01-2.52 1.01-4.06.99-1.73-.01-3.05-1.77-4.04-3.34C-.05 15.9-.36 10.36 1.7 7.42c1.06-1.53 2.73-2.42 4.3-2.42 1.6 0 2.6 1 3.92 1 1.28 0 2.06-1 3.91-1 1.4 0 2.88.76 3.93 2.08-3.45 1.89-2.89 6.82.74 8.94z" />
        }
      />
      <Badge
        store="Google Play"
        icon={
          <path d="M3.6 1.8a1.5 1.5 0 00-.6 1.2v18a1.5 1.5 0 00.6 1.2l.1.06 10.08-10.08v-.24L3.7 1.74l-.1.06zM17.7 15.06l-3.36-3.36 3.36-3.36 3.98 2.27c1.14.65 1.14 1.83 0 2.48l-3.98 1.97zM14.34 11.7L4.42 21.62l9.92-5.68 3.36-3.36-3.36-.88zM4.42 2.38l9.92 9.92 3.36-.88-13.28-9.04z" />
        }
      />
    </div>
  );
}

function Badge({ store, icon }: { store: string; icon: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 rounded-xl border border-border-strong bg-surface px-4 py-2.5">
      <svg
        className="w-6 h-6 text-foreground"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        {icon}
      </svg>
      <span className="text-left leading-tight">
        <span className="block text-[10px] uppercase tracking-wide text-foreground-muted">
          Coming soon to
        </span>
        <span className="block text-sm font-semibold text-foreground">
          {store}
        </span>
      </span>
    </div>
  );
}
