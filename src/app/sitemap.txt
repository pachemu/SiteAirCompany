import type { MetadataRoute } from "next";

import { getProducts } from "@/entities/product/api";
import { SITE_URL } from "@/shared/config/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL.toString(),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: new URL("/catalog", SITE_URL).toString(),
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  try {
    const products = await getProducts();

    return [
      ...staticPages,
      ...products.map((product) => ({
        url: new URL(`/catalog/${product.id}`, SITE_URL).toString(),
        lastModified:
          product.createdAt instanceof Date
            ? product.createdAt
            : new Date(product.createdAt),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      })),
    ];
  } catch {
    return staticPages;
  }
}
