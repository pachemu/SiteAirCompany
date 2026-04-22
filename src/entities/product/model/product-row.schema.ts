import { z } from "zod";

import type { Product } from "./types";

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

const productDbRowSchema = z.object({
  id: z.union([z.string(), z.number(), z.bigint()]),
  category: z.string().nullable().optional(),
  brand: z.string().nullable().optional(),
  series: z.string().nullable().optional(),
  model: z.string().nullable().optional(),
  power: z.string().nullable().optional(),
  energyClass: z.string().nullable().optional(),
  price: z.union([z.number(), z.string()]).nullable().optional(),
  features: z.unknown().optional(),
  imageUrl: z.string().nullable().optional(),
  description: z.string().nullable().optional(),
  createdAt: z.union([z.date(), z.string()]).nullable().optional(),
});

export function parseProductFromRow(row: unknown): Product | null {
  const parsed = productDbRowSchema.safeParse(row);

  if (!parsed.success) {
    return null;
  }

  const data = parsed.data;
  const rawPrice = data.price ?? "0";
  const numericPrice =
    typeof rawPrice === "string" ? Number(rawPrice) : rawPrice;

  return {
    id: String(data.id),
    category: data.category ?? "",
    brand: data.brand ?? "",
    series: data.series ?? "",
    model: data.model ?? "",
    power: data.power ?? "",
    energyClass: data.energyClass ?? "",
    price: Number.isFinite(numericPrice) ? numericPrice : String(rawPrice),
    features: parseFeatures(data.features),
    imageUrl: data.imageUrl ?? null,
    description:
      typeof data.description === "string" && data.description.trim().length > 0
        ? data.description.trim()
        : null,
    createdAt: data.createdAt ?? "",
    name: `${data.brand ?? ""} ${data.series ?? ""} ${data.model ?? ""}`.trim(),
    area: data.category ?? "",
  };
}
