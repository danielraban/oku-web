export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border bg-background-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-on-primary font-bold text-xs">O</span>
            </div>
            <span className="text-lg font-semibold text-foreground">Oku</span>
          </div>

          <div className="flex gap-8 text-sm text-foreground-secondary">
            <a href="/privacy/" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="/terms/" className="hover:text-foreground transition-colors">
              Terms
            </a>
            <a
              href="mailto:hello@okuapp.co.uk"
              className="hover:text-foreground transition-colors"
            >
              Contact
            </a>
            <a href="/wellbeing/" className="hover:text-foreground transition-colors">
              NHS Mind Plan
            </a>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-foreground-muted">
          Built with care for your mental wellbeing.
        </div>
      </div>
    </footer>
  );
}
