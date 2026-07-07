import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";

export const alt = `${SITE.name} — ${SITE.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #F7F5F2 0%, #D6EDED 55%, #EAE5F5 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 20,
              background: "#5B8A8B",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 44,
              fontWeight: 700,
            }}
          >
            O
          </div>
          <div style={{ fontSize: 40, fontWeight: 600, color: "#2D3142" }}>
            {SITE.name}
          </div>
        </div>

        <div
          style={{
            marginTop: 48,
            fontSize: 78,
            fontWeight: 700,
            lineHeight: 1.05,
            color: "#2D3142",
            maxWidth: 900,
          }}
        >
          Your mind deserves a gentle space
        </div>

        <div
          style={{
            marginTop: 32,
            fontSize: 32,
            color: "#6B7280",
            maxWidth: 820,
          }}
        >
          Mood tracking, focus, journaling, and a 24/7 AI companion — in one calm app.
        </div>
      </div>
    ),
    { ...size },
  );
}
