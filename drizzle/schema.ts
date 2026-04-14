import { pgTable, uuid, text, numeric, timestamp } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const products = pgTable("products", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	category: text(),
	brand: text(),
	series: text(),
	model: text().notNull(),
	power: text(),
	energyClass: text("energy_class"),
	price: numeric(),
	features: text(),
	imageUrl: text("image_url"),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow(),
});
