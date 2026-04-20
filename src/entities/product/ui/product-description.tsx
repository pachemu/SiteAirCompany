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
    <section className="w-full rounded-2xl border bg-card p-6">
      <div className="mb-4 border-b pb-3">
        <h3 className="text-xl font-semibold tracking-tight">Описание</h3>
      </div>

      <div className="w-full whitespace-pre-line text-[15px] leading-7 text-foreground/90">
        {description}
      </div>
    </section>
  );
}
