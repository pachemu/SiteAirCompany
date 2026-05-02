import type { Product } from "@/entities/product";
import { z } from "zod";

import {
  CATALOG_SORT_POWER_OPTIONS,
  CATALOG_SORT_PRICE_OPTIONS,
  type CatalogFilterOptions,
  type CatalogFilters,
  type CatalogPageSearchParams,
  type CatalogSort,
} from "./types";

export const DEFAULT_CATALOG_SORT: CatalogSort = "default";

export const DEFAULT_CATALOG_FILTERS: CatalogFilters = {
  query: "",
  area: null,
  features: [],
  sort: DEFAULT_CATALOG_SORT,
  page: 1,
};

const catalogSearchParamsSchema = z.object({
  q: z.string().trim().max(100).optional().catch(""),
  area: z.string().optional().nullable().catch(undefined),
  feature: z.union([z.string(), z.array(z.string())]).optional(),
  sort: z
    .enum(
      [...CATALOG_SORT_PRICE_OPTIONS, ...CATALOG_SORT_POWER_OPTIONS].map(
        (option) => option.value,
      ),
    )
    .optional(),
  page: z.coerce.number().int().positive().optional().catch(1),
});

function getMultipleValues(value: string | string[] | undefined) {
  if (Array.isArray(value)) {
    return value;
  }

  if (typeof value === "string") {
    return [value];
  }

  return [];
}

function isCatalogSort(value: string): value is CatalogSort {
  return [...CATALOG_SORT_PRICE_OPTIONS, ...CATALOG_SORT_POWER_OPTIONS].some(
    (option) => option.value === value,
  );
}

function normalizeQuery(query: string | undefined) {
  return query?.trim().slice(0, 100) ?? "";
}

function normalizePage(page: string | undefined) {
  const numericPage = Number.parseInt(page ?? "", 10);

  return Number.isFinite(numericPage) && numericPage > 0 ? numericPage : 1;
}

function getAreaWeight(area: string) {
  const number = Number.parseInt(area.replace(/\D+/g, ""), 10);

  return Number.isNaN(number) ? Number.MAX_SAFE_INTEGER : number;
}

export function getCatalogFilterOptions(
  products: Product[],
): CatalogFilterOptions {
  const areas = [...new Set(products.map((product) => product.area))].sort(
    (left, right) => getAreaWeight(left) - getAreaWeight(right),
  );

  const features = [...new Set(products.flatMap((product) => product.features))]
    .filter(Boolean)
    .filter((feature) => !feature.includes("Фреон R32")) // лень из бд удалять
    .sort((left, right) => left.localeCompare(right, "ru"));

  return {
    areas,
    features,
  };
}

export function parseCatalogFilters(
  searchParams: CatalogPageSearchParams,
  options: CatalogFilterOptions,
): CatalogFilters {
  const parsedSearchParams = catalogSearchParamsSchema.parse(searchParams);
  const query = normalizeQuery(parsedSearchParams.q);

  const areaValue = parsedSearchParams.area;
  const area =
    areaValue && options.areas.includes(areaValue) ? areaValue : null;

  const featureValues = getMultipleValues(parsedSearchParams.feature);
  const features = [...new Set(featureValues)].filter((feature) =>
    options.features.includes(feature),
  );

  const sortValue = parsedSearchParams.sort;
  const sort =
    sortValue && isCatalogSort(sortValue) ? sortValue : DEFAULT_CATALOG_SORT;
  const page = normalizePage(String(parsedSearchParams.page ?? 1));

  return {
    query,
    area,
    features,
    sort,
    page,
  };
}

export function filterAndSortProducts(
  products: Product[],
  filters: CatalogFilters,
) {
  const normalizedQuery = filters.query.toLocaleLowerCase("ru");

  const filteredProducts = products.filter((product) => {
    const matchesQuery =
      normalizedQuery.length === 0 ||
      product.name.toLocaleLowerCase("ru").includes(normalizedQuery) ||
      product.area.toLocaleLowerCase("ru").includes(normalizedQuery) ||
      product.features.some((feature) =>
        feature.toLocaleLowerCase("ru").includes(normalizedQuery),
      );

    const matchesArea = !filters.area || product.area === filters.area;
    const matchesFeatures =
      filters.features.length === 0 ||
      filters.features.every((feature) => product.features.includes(feature));

    return matchesQuery && matchesArea && matchesFeatures;
  });

  const normalizePrice = (price: number | string) =>
    typeof price === "string" ? Number(price.replace(/[^0-9.-]+/g, "")) : price;

  const normalizePower = (power: string) => {
    const normalizedPower = power.replace(",", ".");
    const match = normalizedPower.match(/\d+(?:\.\d+)?/);

    return match ? Number(match[0]) : null;
  };

  if (filters.sort !== "default") {
    filteredProducts.sort((left, right) => {
      if (filters.sort === "power-desc" || filters.sort === "power-asc") {
        const leftPower = normalizePower(left.power);
        const rightPower = normalizePower(right.power);

        if (leftPower === null && rightPower === null) {
          return 0;
        }

        if (leftPower === null) {
          return 1;
        }

        if (rightPower === null) {
          return -1;
        }

        return filters.sort === "power-desc"
          ? rightPower - leftPower
          : leftPower - rightPower;
      }

      if (filters.sort === "price-desc") {
        const leftPrice = normalizePrice(left.price);
        const rightPrice = normalizePrice(right.price);

        return rightPrice - leftPrice;
      }

      const leftPrice = normalizePrice(left.price);
      const rightPrice = normalizePrice(right.price);

      return leftPrice - rightPrice;
    });
  }

  return filteredProducts;
}

export function createCatalogSearchParams(filters: CatalogFilters) {
  const params = new URLSearchParams();

  if (filters.query) {
    params.set("q", normalizeQuery(filters.query));
  }

  if (filters.area) {
    params.set("area", filters.area);
  }

  for (const feature of filters.features) {
    params.append("feature", feature);
  }

  if (filters.sort !== DEFAULT_CATALOG_SORT) {
    params.set("sort", filters.sort);
  }

  if (filters.page > 1) {
    params.set("page", String(filters.page));
  }

  return params.toString();
}
