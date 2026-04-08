export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary-subtle opacity-60 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-secondary-subtle opacity-50 blur-3xl" />
        <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-accent-subtle opacity-40 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
          Your mind deserves
          <br />
          <span className="text-primary">a gentle space</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-foreground-secondary max-w-2xl mx-auto leading-relaxed">
          Oku is a mental health companion that helps you track your mood, stay
          focused, manage medications, and connect with a supportive community
          — all in one calm, beautiful app.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#early-access"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-primary text-on-primary font-medium text-lg hover:bg-primary-dark transition-colors"
          >
            Join Early Access
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-border-strong text-foreground font-medium text-lg hover:bg-surface transition-colors"
          >
            See Features
          </a>
        </div>
      </div>
    </section>
  );
}
