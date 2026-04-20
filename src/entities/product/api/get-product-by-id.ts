import { PRODUCTS_MOCK } from "../model/products.mock";
import type { Product } from "../model/types";
import { db } from "@/lib/db";
import { productsTable } from "@/api/db/schema";
import { eq } from "drizzle-orm";
import { getCacheValue, setCacheValue } from "@/lib/sqlite-cache";

const PRODUCT_CACHE_TTL_SECONDS = 600;

function parseFeatures(rawFeatures: unknown): string[] {
  if (typeof rawFeatures === "string") {
    return rawFeatures
      .split(/\r?\n/)
      .map((item) => item.trim())
      .filter(Boolean);
  }

  if (Array.isArray(rawFeatures)) {
    return rawFeatures.filter(Boolean).map(String);
  }

  return [];
}

function mapProductRow(row: Record<string, unknown>): Product {
  const priceValue = row.price;
  const price =
    typeof priceValue === "string" ? Number(priceValue) : priceValue;

  return {
    id: String(row.id),
    category: String(row.category ?? ""),
    brand: String(row.brand ?? ""),
    series: String(row.series ?? ""),
    model: String(row.model ?? ""),
    power: String(row.power ?? ""),
    energyClass: String(row.energyClass ?? ""),
    price: Number.isFinite(price as number)
      ? (price as number)
      : String(row.price ?? "0"),
    features: parseFeatures(row.features),
    imageUrl: row.imageUrl == null ? null : String(row.imageUrl),
    description:
      typeof row.description === "string" && row.description.trim().length > 0
        ? row.description.trim()
        : null,
    createdAt:
      row.createdAt instanceof Date
        ? row.createdAt
        : String(row.createdAt ?? ""),
    name: `${String(row.brand ?? "")} ${String(row.series ?? "")} ${String(row.model ?? "")}`.trim(),
    area: String(row.category ?? ""),
  };
}

export async function getProductById(id: string): Promise<Product | null> {
  const cacheKey = `product:${id}`;

  try {
    const cached = await getCacheValue<Product>(cacheKey);
    if (cached) {
      return cached;
    }
  } catch {}

  if (!db) {
    // Fallback to mocks for development
    return PRODUCTS_MOCK.find((p) => p.id === id) || null;
  }

  try {
    const results = await db
      .select()
      .from(productsTable)
      .where(eq(productsTable.id, id));

    if (results.length === 0) {
      return PRODUCTS_MOCK.find((p) => p.id === id) || null;
    }

    const mapped = mapProductRow(results[0]);

    try {
      await setCacheValue(cacheKey, mapped, PRODUCT_CACHE_TTL_SECONDS);
    } catch {}

    return mapped;
  } catch {
    return PRODUCTS_MOCK.find((p) => p.id === id) || null;
  }
}
