/**
 * Public Oku API base URL (no trailing slash), e.g. https://api.okuapp.com
 * Used for marketing waitlist POST from the static site.
 */
export function getPublicApiBaseUrl(): string {
  const url = process.env.NEXT_PUBLIC_OKU_API_URL?.trim();
  if (!url) {
    return "";
  }
  return url.replace(/\/$/, "");
}
