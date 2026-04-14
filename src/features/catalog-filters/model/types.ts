export const CATALOG_SORT_OPTIONS = [
  {
    value: "price-asc",
    label: "Сначала дешевле",
  },
  {
    value: "price-desc",
    label: "Сначала дороже",
  },
] as const;

export type CatalogSort = (typeof CATALOG_SORT_OPTIONS)[number]["value"];

export type CatalogFilters = {
  query: string;
  area: string | null;
  features: string[];
  sort: CatalogSort;
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
};
