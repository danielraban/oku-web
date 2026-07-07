import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/wellbeing",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "frame-src https://www.nhs.uk https://*.nhs.uk https://*.nationalarchives.gov.uk; script-src 'self' 'unsafe-inline' https://www.nhs.uk https://*.nhs.uk; img-src 'self' data: https: blob:; style-src 'self' 'unsafe-inline' https:",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
