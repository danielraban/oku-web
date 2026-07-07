import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import LegalPageShell from "@/components/LegalPageShell";
import { RESOURCES, getResource, type ContentBlock } from "@/lib/resources";
import { SITE } from "@/lib/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return RESOURCES.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getResource(slug);
  if (!post) return {};

  const url = `${SITE.url}/resources/${post.slug}`;
  return {
    title: post.metaTitle,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `/resources/${post.slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.description,
      url,
      type: "article",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.description,
    },
  };
}

function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 className="mt-10 text-2xl font-semibold text-foreground">
          {block.text}
        </h2>
      );
    case "ul":
      return (
        <ul className="mt-4 space-y-2.5">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-foreground-secondary leading-relaxed">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    default:
      return (
        <p className="mt-5 text-lg text-foreground-secondary leading-relaxed">
          {block.text}
        </p>
      );
  }
}

export default async function ResourceArticlePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = getResource(slug);
  if (!post) notFound();

  const url = `${SITE.url}/resources/${post.slug}`;

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    url,
    mainEntityOfPage: url,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    inLanguage: "en-GB",
    author: { "@type": "Organization", name: SITE.name, url: SITE.url },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      logo: { "@type": "ImageObject", url: `${SITE.url}/icon.svg` },
    },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Resources",
        item: `${SITE.url}/resources`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: url,
      },
    ],
  };

  return (
    <LegalPageShell>
      <article className="max-w-3xl mx-auto">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
        />

        <nav className="text-sm text-foreground-muted" aria-label="Breadcrumb">
          <Link href="/resources" className="hover:text-foreground transition-colors">
            Resources
          </Link>
          <span className="mx-2" aria-hidden="true">/</span>
          <span className="text-primary">{post.category}</span>
        </nav>

        <h1 className="mt-4 text-3xl md:text-4xl font-bold text-foreground leading-tight">
          {post.title}
        </h1>
        <div className="mt-4 flex items-center gap-3 text-sm text-foreground-muted">
          <time dateTime={post.datePublished}>
            {new Date(post.datePublished).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
          <span aria-hidden="true">•</span>
          <span>{post.readingTimeMinutes} min read</span>
        </div>

        <div className="mt-8">
          {post.content.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-border bg-background-subtle p-6 md:p-8">
          <h2 className="text-xl font-semibold text-foreground">
            Meet Oku, your gentle companion
          </h2>
          <p className="mt-2 text-foreground-secondary leading-relaxed">
            Oku brings mood tracking, journaling, focus sessions, and a 24/7 AI
            companion together in one calm app. Join the UK early access waitlist.
          </p>
          <Link
            href="/#early-access"
            className="mt-5 inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-on-primary font-medium hover:bg-primary-dark transition-colors"
          >
            Join the waitlist
          </Link>
        </div>

        <p className="mt-8 text-xs text-foreground-muted leading-relaxed">
          This article is for general information and support only and is not
          medical advice or a substitute for professional care. If you are in
          crisis in the UK, call 999, call Samaritans free on 116 123, or text
          SHOUT to 85258.
        </p>
      </article>
    </LegalPageShell>
  );
}
