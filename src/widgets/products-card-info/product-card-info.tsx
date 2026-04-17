import { ProductGallery } from "@/entities/product/ui/product-gallery";
import { ProductMainHeader } from "@/entities/product/ui/product-main-header";
import { ProductSpecs } from "@/entities/product/ui/product-specs";
import { ProductActionButtons } from "@/features/catalog-filters/ui/product-action-buttons";
import type { Product } from "@/entities/product/model/types";

type ProductCardWidgetProps = {
  product: Product;
};

export function ProductCardWidget({ product }: ProductCardWidgetProps) {
  const images = product.imageUrl
    ? product.imageUrl
        .split(",")
        .map((url) => url.trim())
        .filter(Boolean)
    : [];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <ProductGallery images={images} />
      <div className="space-y-6">
        <ProductMainHeader product={product} />
        <ProductActionButtons />
        <ProductSpecs product={product} />
      </div>
    </div>
  );
}
