"use client";

import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { OkuBadge } from "./Logo";

const NAV_LINKS = [
  { href: "/#features", label: "Features" },
  { href: "/#ai-support", label: "AI Support" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/resources", label: "Resources" },
  { href: "/#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2" aria-label="Oku home">
          <OkuBadge sizeClassName="w-8 h-8" markClassName="w-5 h-5" />
          <span className="text-xl font-semibold text-foreground">Oku</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-foreground-secondary hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="/#early-access"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2 rounded-full bg-primary text-on-primary font-medium text-sm hover:bg-primary-dark transition-colors"
          >
            Join waitlist
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg text-foreground-secondary hover:text-foreground hover:bg-surface transition-colors"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.75}
              stroke="currentColor"
              aria-hidden="true"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg">
          <div className="px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-foreground-secondary hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#early-access"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center px-5 py-3 rounded-full bg-primary text-on-primary font-medium hover:bg-primary-dark transition-colors"
            >
              Join waitlist
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
