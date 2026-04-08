/**
 * Public Oku API base URL (no trailing slash), e.g. https://api.okuapp.com
 * Used for marketing waitlist POST from the static site.
 *
 * When the marketing page is served over HTTPS (e.g. CloudFront), the API URL
 * must also be HTTPS — browsers block http: requests (mixed content). If the
 * env var is still http:, we upgrade to https: in the browser when the page
 * is secure (same host must have TLS; otherwise configure NEXT_PUBLIC_OKU_API_URL
 * to an https: URL with ACM / API Gateway).
 */
export function getPublicApiBaseUrl(): string {
  let url = process.env.NEXT_PUBLIC_OKU_API_URL?.trim() ?? "";
  if (!url) {
    return "";
  }
  url = url.replace(/\/$/, "");
  if (
    typeof window !== "undefined" &&
    window.location.protocol === "https:" &&
    url.startsWith("http://")
  ) {
    url = `https://${url.slice("http://".length)}`;
  }
  return url;
}
