import { PRODUCTS_MOCK } from "../model/products.mock";
import type { Product } from "../model/types";
import { parseProductFromRow } from "../model/product-row.schema";
import { db } from "@/lib/db";
import { productsTable } from "@/api/db/schema";

function canUseMockProducts() {
  return process.env.NODE_ENV !== "production";
}

function getProductsErrorMessage(reason: string) {
  return [
    `Cannot load real products: ${reason}.`,
    "Static export must be built with DATABASE_URL configured.",
    "Add DATABASE_URL to .env.local or pass it when running npm run export.",
  ].join(" ");
}

export async function getProducts(): Promise<Product[]> {
  if (!db) {
    if (canUseMockProducts()) {
      return PRODUCTS_MOCK;
    }

    throw new Error(getProductsErrorMessage("DATABASE_URL is missing"));
  }

  try {
    const rows = await db.select().from(productsTable);
    const mapped = rows
      .map((row) => parseProductFromRow(row))
      .filter((product): product is Product => product !== null);

    if (mapped.length === 0 && !canUseMockProducts()) {
      throw new Error(getProductsErrorMessage("products table is empty"));
    }

    return mapped;
  } catch (error) {
    if (!canUseMockProducts()) {
      const message = error instanceof Error ? error.message : "unknown error";
      throw new Error(getProductsErrorMessage(message));
    }

    return PRODUCTS_MOCK;
  }
}
