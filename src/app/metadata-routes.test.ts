import { describe, expect, it } from "vitest";

import { metadataByPath, site } from "@/content/site";

import robots from "./robots";
import sitemap from "./sitemap";

describe("metadata routes", () => {
  it("allows crawling and exposes the sitemap URL", () => {
    expect(robots()).toEqual({
      rules: {
        userAgent: "*",
        allow: "/",
      },
      sitemap: `${site.url}/sitemap.xml`,
    });
  });

  it("contains all published metadata paths in the sitemap", () => {
    const urls = sitemap().map((entry) => entry.url);
    const expectedUrls = Object.keys(metadataByPath).map(
      (path) => `${site.url}${path === "/" ? "" : path}`,
    );

    expect(urls).toEqual(expectedUrls);
    expect(urls).toContain(`${site.url}/contact`);
    expect(urls).toContain(`${site.url}/confidentialite`);
  });
});
