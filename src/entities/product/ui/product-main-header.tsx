import type { Product } from "@/entities/product/model/types";

interface ProductMainHeaderProps {
  product: Product;
}

export function ProductMainHeader({ product }: ProductMainHeaderProps) {
  return (
    <div>
      <p className="text-sm uppercase text-[#475569] mb-1">
        {product.category}
      </p>
      <h2 className="m-0 text-2xl font-semibold">
        {product.brand} {product.series}
      </h2>
      <p className="text-sm text-[#475569]">{product.model}</p>
    </div>
  );
}
