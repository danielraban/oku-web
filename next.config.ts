import type { NextConfig } from "next";

/** Static export for S3 + CloudFront (see infra/). */
const nextConfig: NextConfig = {
  output: "export",
  // S3 + CloudFront need folder/index.html so /privacy/ maps to an object; flat .html at root breaks /privacy URLs.
  trailingSlash: true,
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
