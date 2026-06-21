import { ProductCard, type Product } from "@/entities/product";

type CatalogGridProps = {
  products: Product[];
};

export function CatalogGrid({ products }: CatalogGridProps) {
  if (products.length === 0) {
    return (
      <div className="rounded-3xl bg-white px-6 py-16 text-center text-[#0c1527]">
        <h3 className="text-2xl font-semibold tracking-tight">Товары не найдены</h3>
        <p className="mt-3 text-[#64748b]">
          Попробуйте убрать часть фильтров или изменить поисковый запрос.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 auto-rows-fr items-stretch [&>*]:min-w-0">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
