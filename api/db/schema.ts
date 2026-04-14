import {
  integer,
  numeric,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const productsTable = pgTable("products", {
  id: uuid("id").primaryKey(),
  category: varchar("category", { length: 255 }),
  brand: varchar("brand", { length: 255 }),
  series: varchar("series", { length: 255 }),
  model: varchar("model", { length: 255 }).notNull().unique(),
  power: varchar("power", { length: 255 }).notNull(),
  energyClass: varchar("energy_class", { length: 10 }),
  price: numeric("price", { precision: 12, scale: 2 }).notNull(),
  features: text("features"),
  imageUrl: text("image_url"),
  createdAt: timestamp("created_at").defaultNow(),
});
