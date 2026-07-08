import type { MetadataRoute } from "next";

import { metadataByPath, site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.keys(metadataByPath).map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    lastModified: new Date("2026-07-08"),
    changeFrequency: path === "/" ? "monthly" : "yearly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
