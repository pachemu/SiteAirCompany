import type { Product } from "@/entities/product/model/types";

interface ProductMainHeaderProps {
  product: Product;
}

export function ProductMainHeader({ product }: ProductMainHeaderProps) {
  return (
    <div>
      <p className="text-sm uppercase text-muted-foreground mb-1">
        {product.category}
      </p>
      <h2 className="m-0 text-2xl font-semibold">
        {product.brand} {product.series}
      </h2>
      <p className="text-sm text-muted-foreground">{product.model}</p>
    </div>
  );
}
