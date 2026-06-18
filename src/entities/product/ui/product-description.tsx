import type { Product } from "@/entities/product/model/types";

interface ProductDescriptionProps {
  product: Product;
}

export function ProductDescription({ product }: ProductDescriptionProps) {
  const description = product.description?.trim();

  if (!description) {
    return null;
  }

  return (
    <section className="w-full overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-sm">
      <div className="mb-4 border-b border-[#e2e8f0] pb-3">
        <h3 className="m-0 text-base font-bold tracking-tight text-[#0c1527]">Описание</h3>
      </div>

      <div className="w-full whitespace-pre-line text-sm leading-7 text-[#334155]">
        {description}
      </div>
    </section>
  );
}
