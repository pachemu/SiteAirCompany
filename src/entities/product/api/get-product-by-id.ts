import { eq } from "drizzle-orm";

import { db } from "@/lib/db";
import { productsTable } from "@/api/db/schema";
import { parseProductFromRow } from "../model/product-row.schema";
import type { Product } from "../model/types";
import { getProducts } from "./get-products";

export async function getProductById(id: string): Promise<Product | null> {
  if (!db) {
    const products = await getProducts();
    return products.find((product) => product.id === id) ?? null;
  }

  const rows = await db
    .select()
    .from(productsTable)
    .where(eq(productsTable.id, id))
    .limit(1);

  if (rows.length === 0) return null;

  return parseProductFromRow(rows[0]);
}
