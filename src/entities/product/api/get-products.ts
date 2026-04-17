import { PRODUCTS_MOCK } from "../model/products.mock";
import type { Product } from "../model/types";
import { db } from "@/lib/db";
import { productsTable } from "@/api/db/schema";
import { getRedisClient } from "@/lib/redis";
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
    createdAt:
      row.createdAt instanceof Date
        ? row.createdAt
        : String(row.createdAt ?? ""),
    name: `${String(row.brand ?? "")} ${String(row.series ?? "")} ${String(row.model ?? "")}`.trim(),
    area: String(row.category ?? ""),
  };
}

export async function getProducts(): Promise<Product[]> {
  const redis = await getRedisClient();
  const cacheKey = `products`;
  try {
    const cached = await redis.get(cacheKey);
    if (cached) {
      return JSON.parse(cached);
    }
  } catch {}
  if (!db) {
    return PRODUCTS_MOCK;
  }
  try {
    const rows = await db.select().from(productsTable);
    const mapped = rows.map(mapProductRow);

    try {
      await redis.set(cacheKey, JSON.stringify(mapped), { EX: 600 });
    } catch {}

    return mapped;
  } catch {
    return PRODUCTS_MOCK;
  }
}
