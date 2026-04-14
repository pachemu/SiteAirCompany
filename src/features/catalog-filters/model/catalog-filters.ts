import type { Product } from "@/entities/product";

import {
  CATALOG_SORT_OPTIONS,
  type CatalogFilterOptions,
  type CatalogFilters,
  type CatalogPageSearchParams,
  type CatalogSort,
} from "./types";

export const DEFAULT_CATALOG_SORT: CatalogSort = "price-asc";

export const DEFAULT_CATALOG_FILTERS: CatalogFilters = {
  query: "",
  area: null,
  features: [],
  sort: DEFAULT_CATALOG_SORT,
};

function getSingleValue(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

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
  return CATALOG_SORT_OPTIONS.some((option) => option.value === value);
}

function normalizeQuery(query: string | undefined) {
  return query?.trim().slice(0, 100) ?? "";
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
  const query = normalizeQuery(getSingleValue(searchParams.q));

  const areaValue = getSingleValue(searchParams.area);
  const area =
    areaValue && options.areas.includes(areaValue) ? areaValue : null;

  const featureValues = getMultipleValues(searchParams.feature);
  const features = [...new Set(featureValues)].filter((feature) =>
    options.features.includes(feature),
  );

  const sortValue = getSingleValue(searchParams.sort);
  const sort =
    sortValue && isCatalogSort(sortValue) ? sortValue : DEFAULT_CATALOG_SORT;

  return {
    query,
    area,
    features,
    sort,
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

  filteredProducts.sort((left, right) => {
    const leftPrice = normalizePrice(left.price);
    const rightPrice = normalizePrice(right.price);

    if (filters.sort === "price-desc") {
      return rightPrice - leftPrice;
    }

    return leftPrice - rightPrice;
  });

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

  return params.toString();
}
