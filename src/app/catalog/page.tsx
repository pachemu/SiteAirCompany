import { getProducts } from "@/entities/product/api";
import {
  getCatalogFilterOptions,
  DEFAULT_CATALOG_FILTERS,
} from "@/features/catalog-filters";
import { CatalogShowcase } from "@/widgets/catalog-showcase";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Каталог кондиционеров в Симферополе | Купить кондиционер в Крыму",
  description:
    "Каталог кондиционеров в Симферополе. Купить кондиционер в Крыму по лучшим ценам. Установка и монтаж кондиционеров в 82 регионе.",
  keywords: [
    "кондиционеры симферополь",
    "купить кондиционер",
    "купить в крыму",
    "установка кондиционера",
    "установка в симферополе",
  ],
};
export default async function CatalogPage() {
  const products = await getProducts();
  const filterOptions = getCatalogFilterOptions(products);

  return (
    <main className="flex flex-1 bg-[#f8fafc] text-[#0c1527]">
      <div className="mx-auto flex w-full flex-1 flex-col gap-8 px-4 py-8 md:px-6 xl:px-8">
        <CatalogShowcase
          products={products}
          totalProducts={products.length}
          filters={DEFAULT_CATALOG_FILTERS}
          options={filterOptions}
        />
      </div>
    </main>
  );
}
