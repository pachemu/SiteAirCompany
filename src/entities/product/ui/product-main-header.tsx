import type { Product } from "@/entities/product/model/types";

interface ProductMainHeaderProps {
  product: Product;
}

export function ProductMainHeader({ product }: ProductMainHeaderProps) {
  return (
    <div>
      <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-[#0891b2]">
        {product.category}
      </p>
      <h2 className="m-0 text-2xl font-extrabold text-[#0c1527]">
        {product.brand} {product.series}
      </h2>
      <p className="text-sm text-[#64748b]">{product.model}</p>
    </div>
  );
}
