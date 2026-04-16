"use client";

import { useEffect, useMemo, useState, useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Pagination } from "antd";

import type { Product } from "@/entities/product";
import {
  CatalogFiltersPanel,
  createCatalogSearchParams,
  DEFAULT_CATALOG_FILTERS,
  type CatalogFilterOptions,
  type CatalogFilters,
} from "@/features/catalog-filters";

import { CatalogGrid } from "./catalog-grid";

type CatalogShowcaseProps = {
  products: Product[];
  totalProducts: number;
  filters: CatalogFilters;
  options: CatalogFilterOptions;
};

const PAGE_SIZE = 21;

export function CatalogShowcase({
  products,
  totalProducts,
  filters,
  options,
}: CatalogShowcaseProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (currentPage !== 1) {
      startTransition(() => {
        setCurrentPage(1);
      });
    }
  }, [products, currentPage, startTransition]);

  const pagedProducts = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return products.slice(start, start + PAGE_SIZE);
  }, [currentPage, products]);

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

  return (
    <section className="space-y-6">
      <CatalogFiltersPanel
        filters={filters}
        searchValue={filters.query}
        options={options}
        resultCount={products.length}
        totalCount={totalProducts}
        isPending={isPending}
        onSearchChange={(query) =>
          replaceCatalogRoute({
            ...filters,
            query,
          })
        }
        onAreaChange={(area) =>
          replaceCatalogRoute({
            ...filters,
            area: area || null,
          })
        }
        onSortChange={(sort) =>
          replaceCatalogRoute({
            ...filters,
            sort,
          })
        }
        onFeatureToggle={(feature) =>
          replaceCatalogRoute({
            ...filters,
            features: filters.features.includes(feature)
              ? filters.features.filter((item) => item !== feature)
              : [...filters.features, feature],
          })
        }
        onReset={() => {
          replaceCatalogRoute(DEFAULT_CATALOG_FILTERS);
        }}
      />

      <CatalogGrid products={pagedProducts} />

      <div className="flex justify-center pt-4">
        <Pagination
          current={currentPage}
          total={products.length}
          pageSize={PAGE_SIZE}
          onChange={(page) => setCurrentPage(page)}
          showSizeChanger={false}
        />
      </div>
    </section>
  );
}
