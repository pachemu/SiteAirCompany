import { getProducts } from "@/entities/product/api";
import {
  getCatalogFilterOptions,
  DEFAULT_CATALOG_FILTERS,
} from "@/features/catalog-filters";
import { CatalogShowcase } from "@/widgets/catalog-showcase";

export default async function CatalogPage() {
  const products = await getProducts();
  const filterOptions = getCatalogFilterOptions(products);

  return (
    <main className="flex flex-1 bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.06),_transparent_40%),linear-gradient(180deg,_rgba(248,250,252,1)_0%,_rgba(241,245,249,0.9)_100%)]">
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
