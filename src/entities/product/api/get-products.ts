import { PRODUCTS_MOCK } from "../model/products.mock";
import type { Product } from "../model/types";
import { parseProductFromRow } from "../model/product-row.schema";
import { db } from "@/lib/db";
import { productsTable } from "@/api/db/schema";
import { getCacheValue, setCacheValue } from "@/lib/sqlite-cache";

const PRODUCTS_CACHE_KEY = "products";
const PRODUCTS_CACHE_TTL_SECONDS = 600;

export async function getProducts(): Promise<Product[]> {
  try {
    const cached = await getCacheValue<Product[]>(PRODUCTS_CACHE_KEY);
    if (cached) {
      return cached;
    }
  } catch {}
  if (!db) {
    return PRODUCTS_MOCK;
  }
  try {
    const rows = await db.select().from(productsTable);
    const mapped = rows
      .map((row) => parseProductFromRow(row))
      .filter((product): product is Product => product !== null);

    try {
      await setCacheValue(PRODUCTS_CACHE_KEY, mapped, PRODUCTS_CACHE_TTL_SECONDS);
    } catch {}

    return mapped;
  } catch {
    return PRODUCTS_MOCK;
  }
}
