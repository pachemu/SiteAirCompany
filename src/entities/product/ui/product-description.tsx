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
    <section className="w-full rounded-2xl border border-[#CBD5E1] bg-[#E2E8F0] p-6 shadow-sm">
      <div className="mb-4 border-b border-[#CBD5E1] pb-3">
        <h3 className="text-xl font-semibold tracking-tight">Описание</h3>
      </div>

      <div className="w-full whitespace-pre-line text-[15px] leading-7 text-foreground/90">
        {description}
      </div>
    </section>
  );
}
