import type { Product } from "../model/types";
import { getProducts } from "./get-products";

export async function getProductById(id: string): Promise<Product | null> {
  const products = await getProducts();
  return products.find((product) => product.id === id) ?? null;
}
