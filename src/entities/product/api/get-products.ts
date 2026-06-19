import type { Product } from "../model/types";
import products from "../model/products.data.json";

export async function getProducts(): Promise<Product[]> {
  return products as Product[];
}
