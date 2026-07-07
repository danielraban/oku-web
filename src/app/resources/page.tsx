import type { Metadata } from "next";
import Link from "next/link";
import LegalPageShell from "@/components/LegalPageShell";
import { RESOURCES } from "@/lib/resources";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mental health resources & guides",
  description:
    "Practical, evidence-informed guides on AI mental health support, managing anxiety and stress, mood tracking, and building calmer habits.",
  alternates: { canonical: "/resources" },
  openGraph: {
    title: `Mental health resources & guides | ${SITE.name}`,
    description:
      "Practical, evidence-informed guides on AI mental health support, managing anxiety and stress, mood tracking, and building calmer habits.",
    url: `${SITE.url}/resources`,
    type: "website",
  },
};

export default function ResourcesPage() {
  const posts = [...RESOURCES].sort((a, b) =>
    b.datePublished.localeCompare(a.datePublished),
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Mental health resources & guides",
    url: `${SITE.url}/resources`,
    description:
      "Practical, evidence-informed guides on AI mental health support, managing anxiety and stress, mood tracking, and building calmer habits.",
    hasPart: posts.map((p) => ({
      "@type": "Article",
      headline: p.title,
      url: `${SITE.url}/resources/${p.slug}`,
      datePublished: p.datePublished,
    })),
  };

  return (
    <LegalPageShell>
      <div className="max-w-3xl mx-auto">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary-subtle text-primary text-sm font-medium mb-6">
          Resources
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
          Guides for a gentler mind
        </h1>
        <p className="mt-4 text-lg text-foreground-secondary leading-relaxed">
          Practical, evidence-informed reads on AI mental health support, coping
          with anxiety and stress, and small habits that add up. Supportive and
          educational — never a substitute for professional care.
        </p>

        <div className="mt-10 space-y-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/resources/${post.slug}`}
              className="block rounded-3xl border border-border bg-surface p-6 md:p-7 hover:border-border-strong hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-3 text-xs text-foreground-muted">
                <span className="text-primary font-medium">{post.category}</span>
                <span aria-hidden="true">•</span>
                <span>{post.readingTimeMinutes} min read</span>
              </div>
              <h2 className="mt-3 text-xl font-semibold text-foreground">
                {post.title}
              </h2>
              <p className="mt-2 text-foreground-secondary leading-relaxed">
                {post.excerpt}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                Read guide
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
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </LegalPageShell>
  );
}
