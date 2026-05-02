export const CATALOG_SORT_PRICE_OPTIONS = [
  {
    value: "default",
    label: "По умолчанию",
  },
  {
    value: "price-asc",
    label: "Сначала дешевле",
  },
  {
    value: "price-desc",
    label: "Сначала дороже",
  },
] as const;

export type CatalogSortPrice =
  (typeof CATALOG_SORT_PRICE_OPTIONS)[number]["value"];

export const CATALOG_SORT_POWER_OPTIONS = [
  {
    value: "default",
    label: "По умолчанию",
  },
  {
    value: "power-desc",
    label: "Сначала мощнее",
  },
  {
    value: "power-asc",
    label: "Сначала слабее",
  },
] as const;

export type CatalogSortPower =
  (typeof CATALOG_SORT_POWER_OPTIONS)[number]["value"];

export type CatalogSort = CatalogSortPrice | CatalogSortPower;

export type CatalogFilters = {
  query: string;
  area: string | null;
  features: string[];
  sort: CatalogSort;
  page: number;
};

export type CatalogFilterOptions = {
  areas: string[];
  features: string[];
};

export type CatalogPageSearchParams = {
  q?: string | string[] | undefined;
  area?: string | string[] | undefined;
  feature?: string | string[] | undefined;
  sort?: string | string[] | undefined;
  page?: string | string[] | undefined;
};
