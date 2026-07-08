import { describe, expect, it } from "vitest";

import { site } from "@/content/site";

import { pageMetadata } from "./metadata";

describe("pageMetadata", () => {
  it("builds canonical and Open Graph URLs for the home page", () => {
    const metadata = pageMetadata("/");

    expect(metadata.alternates?.canonical).toBe("/");
    expect(metadata.openGraph?.url).toBe(site.url);
    expect(metadata.openGraph?.locale).toBe("fr_GP");
  });

  it("builds canonical and Open Graph URLs for inner pages", () => {
    const metadata = pageMetadata("/services");

    expect(metadata.title).toBe("Services");
    expect(metadata.alternates?.canonical).toBe("/services");
    expect(metadata.openGraph?.url).toBe(`${site.url}/services`);
  });
});
