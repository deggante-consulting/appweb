import type { Metadata } from "next";

import { metadataByPath, site } from "@/content/site";

type MetadataPath = keyof typeof metadataByPath;

export function pageMetadata(path: MetadataPath): Metadata {
  const data = metadataByPath[path];

  return {
    title: data.title,
    description: data.description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${data.title} | DÉGGANTE Consulting`,
      description: data.description,
      url: `${site.url}${path === "/" ? "" : path}`,
      siteName: site.name,
      locale: "fr_GP",
      type: "website",
    },
  };
}
