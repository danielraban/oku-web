import { SITE } from "@/lib/site";

/**
 * Site-wide JSON-LD structured data. Helps search engines and AI answer
 * engines understand what Oku is (an AI mental-health app), surfaces rich
 * results, and enables sitelinks. Rendered once in the root layout so it
 * applies to every route.
 */
export default function StructuredData() {
  const sameAs = Object.values(SITE.social).filter(Boolean) as string[];

  const organization = {
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/icon.svg`,
    email: SITE.email.hello,
    description: SITE.description,
    ...(sameAs.length > 0 ? { sameAs } : {}),
  };

  const website = {
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    inLanguage: "en-GB",
    publisher: { "@id": `${SITE.url}/#organization` },
  };

  const application = {
    "@type": "MobileApplication",
    "@id": `${SITE.url}/#app`,
    name: SITE.name,
    url: SITE.url,
    applicationCategory: "HealthApplication",
    applicationSubCategory: "Mental Health",
    operatingSystem: "iOS, Android",
    description: SITE.description,
    inLanguage: "en-GB",
    featureList: [
      "AI mental health companion for 24/7 supportive conversations",
      "Mood tracking",
      "Focus sessions",
      "Medication reminders",
      "Journaling",
      "Community support",
    ],
    audience: {
      "@type": "Audience",
      audienceType: "People seeking mental health and wellbeing support",
      geographicArea: {
        "@type": "Country",
        name: "United Kingdom",
      },
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
      description: "Core wellbeing tools are free. Optional low-cost subscription for advanced AI features.",
    },
    publisher: { "@id": `${SITE.url}/#organization` },
  };

  const graph = {
    "@context": "https://schema.org",
    "@graph": [organization, website, application],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
