import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { RESOURCES } from "@/lib/resources";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticRoutes = ["", "/resources", "/privacy", "/terms", "/wellbeing"];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/resources" ? 0.8 : 0.6,
  }));

  const resourceEntries: MetadataRoute.Sitemap = RESOURCES.map((post) => ({
    url: `${SITE.url}/resources/${post.slug}`,
    lastModified: new Date(post.dateModified),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...resourceEntries];
}
