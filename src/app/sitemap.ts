import type { MetadataRoute } from "next";

import { getProducts } from "@/entities/product/api";
import { SITE_URL } from "@/shared/config/site";

export const dynamic = "force-dynamic";

export async function getSitemapUrls(): Promise<string[]> {
  const staticUrls = [
    SITE_URL.toString(),
    new URL("/catalog", SITE_URL).toString(),
  ];

  try {
    const products = await getProducts();

    return [
      ...staticUrls,
      ...products.map((product) =>
        new URL(`/catalog/${product.id}`, SITE_URL).toString(),
      ),
    ];
  } catch {
    return staticUrls;
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const urls = await getSitemapUrls();

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
