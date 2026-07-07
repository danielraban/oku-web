import { ImageResponse } from "next/og";
import { RESOURCES, getResource } from "@/lib/resources";
import { SITE } from "@/lib/site";

export const alt = `${SITE.name} resource`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return RESOURCES.map((r) => ({ slug: r.slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getResource(slug);
  const title = post?.title ?? `${SITE.name} — ${SITE.tagline}`;
  const category = post?.category ?? "Resources";
  const readingTime = post ? `${post.readingTimeMinutes} min read` : "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #F7F5F2 0%, #D6EDED 55%, #EAE5F5 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              background: "#5B8A8B",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 38,
              fontWeight: 700,
            }}
          >
            O
          </div>
          <div style={{ fontSize: 34, fontWeight: 600, color: "#2D3142" }}>
            {SITE.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              fontSize: 26,
              color: "#5B8A8B",
              fontWeight: 600,
            }}
          >
            <span>{category}</span>
            {readingTime ? (
              <>
                <span style={{ color: "#9CA3AF" }}>•</span>
                <span style={{ color: "#6B7280", fontWeight: 500 }}>
                  {readingTime}
                </span>
              </>
            ) : null}
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.1,
              color: "#2D3142",
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
        </div>

        <div style={{ fontSize: 26, color: "#6B7280" }}>okuwellness.com</div>
      </div>
    ),
    { ...size },
  );
}
