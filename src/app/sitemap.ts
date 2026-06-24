import type { MetadataRoute } from "next";

import products from "@/entities/product/model/products.data.json";
import { SITE_URL } from "@/shared/config/site";

export const dynamic = "force-static";

export function getSitemapUrls(): string[] {
  const staticUrls = [
    SITE_URL.toString(),
    new URL("/catalog", SITE_URL).toString(),
  ];

  try {
    return [
      ...staticUrls,
      ...(products as Array<{ id: string }>).map((product) =>
        new URL(`/catalog/${product.id}`, SITE_URL).toString(),
      ),
    ];
  } catch {
    return staticUrls;
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const urls = getSitemapUrls();

  return urls.map((url) => ({
    url,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority:
      url === SITE_URL.toString()
        ? 1
        : url === new URL("/catalog", SITE_URL).toString()
          ? 0.9
          : 0.7,
  }));
}
