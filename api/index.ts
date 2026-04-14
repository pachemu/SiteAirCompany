import { drizzle } from "drizzle-orm/postgres-js";
import { productsTable } from "./db/schema";
import { eq } from "drizzle-orm";

const db = drizzle(process.env.DATABASE_URL!);

export const getData = async () => {
  const data = await db.select().from(productsTable);
  return data;
};
