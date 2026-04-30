"use client";

import { useEffect, useMemo, useState, useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Pagination } from "antd";

import type { Product } from "@/entities/product";
import {
  CatalogFiltersPanel,
  createCatalogSearchParams,
  DEFAULT_CATALOG_FILTERS,
  filterAndSortProducts,
  parseCatalogFilters,
  type CatalogFilterOptions,
  type CatalogFilters,
  type CatalogPageSearchParams,
} from "@/features/catalog-filters";

import { CatalogGrid } from "./catalog-grid";

type CatalogShowcaseProps = {
  products: Product[];
  totalProducts: number;
  filters: CatalogFilters;
  options: CatalogFilterOptions;
};

const PAGE_SIZE = 20;

function getCatalogPageSearchParams() {
  const params = new URLSearchParams(window.location.search);

  return {
    q: params.get("q") ?? undefined,
    area: params.get("area") ?? undefined,
    feature: params.getAll("feature"),
    sort: params.get("sort") ?? undefined,
    page: params.get("page") ?? undefined,
  } satisfies CatalogPageSearchParams;
}

export function CatalogShowcase({
  products,
  totalProducts,
  filters,
  options,
}: CatalogShowcaseProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [draftFilters, setDraftFilters] = useState(filters);

  useEffect(() => {
    const nextFilters = parseCatalogFilters(getCatalogPageSearchParams(), options);
    setDraftFilters(nextFilters);
  }, [options]);

  const filteredProducts = useMemo(
    () => filterAndSortProducts(products, draftFilters),
    [draftFilters, products],
  );

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / PAGE_SIZE));
  const currentPage = Math.min(draftFilters.page, totalPages);

  const pagedProducts = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filteredProducts.slice(start, start + PAGE_SIZE);
  }, [currentPage, filteredProducts]);

  function replaceCatalogRoute(nextFilters: CatalogFilters) {
    const currentPathname = pathname ?? "/catalog";
    const nextSearchParams = createCatalogSearchParams(nextFilters);
    const nextHref = nextSearchParams
      ? `${currentPathname}?${nextSearchParams}`
      : currentPathname;

    startTransition(() => {
      router.replace(nextHref, { scroll: false });
    });
  }

  function updateFilters(nextFilters: CatalogFilters) {
    setDraftFilters(nextFilters);
    replaceCatalogRoute(nextFilters);
  }

  return (
    <section className="space-y-6">
      <CatalogFiltersPanel
        filters={draftFilters}
        searchValue={draftFilters.query}
        options={options}
        resultCount={filteredProducts.length}
        totalCount={totalProducts}
        isPending={isPending}
        onSearchChange={(query) =>
          updateFilters({
            ...draftFilters,
            query,
            page: 1,
          })
        }
        onAreaChange={(area) =>
          updateFilters({
            ...draftFilters,
            area: area || null,
            page: 1,
          })
        }
        onSortChange={(sort) =>
          updateFilters({
            ...draftFilters,
            sort,
            page: 1,
          })
        }
        onFeatureToggle={(feature) =>
          updateFilters({
            ...draftFilters,
            features: draftFilters.features.includes(feature)
              ? draftFilters.features.filter((item) => item !== feature)
              : [...draftFilters.features, feature],
            page: 1,
          })
        }
        onReset={() => {
          updateFilters(DEFAULT_CATALOG_FILTERS);
        }}
      />
      <div className="flex justify-center pt-4">
        <Pagination
          current={currentPage}
          total={filteredProducts.length}
          pageSize={PAGE_SIZE}
          onChange={(page) =>
            updateFilters({
              ...draftFilters,
              page,
            })
          }
          showSizeChanger={false}
        />
      </div>

      <CatalogGrid products={pagedProducts} />

      <div className="flex justify-center pt-4">
        <Pagination
          current={currentPage}
          total={filteredProducts.length}
          pageSize={PAGE_SIZE}
          onChange={(page) =>
            updateFilters({
              ...draftFilters,
              page,
            })
          }
          showSizeChanger={false}
        />
      </div>
    </section>
  );
}
