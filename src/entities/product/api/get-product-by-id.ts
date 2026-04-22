import { PRODUCTS_MOCK } from "../model/products.mock";
import type { Product } from "../model/types";
import { parseProductFromRow } from "../model/product-row.schema";
import { db } from "@/lib/db";
import { productsTable } from "@/api/db/schema";
import { eq } from "drizzle-orm";
import { getCacheValue, setCacheValue } from "@/lib/sqlite-cache";

const PRODUCT_CACHE_TTL_SECONDS = 600;

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
      return null;
    }

    const mapped = parseProductFromRow(results[0]);

    if (!mapped) {
      return null;
    }

    try {
      await setCacheValue(cacheKey, mapped, PRODUCT_CACHE_TTL_SECONDS);
    } catch {}

    return mapped;
  } catch {
    return PRODUCTS_MOCK.find((p) => p.id === id) || null;
  }
}
