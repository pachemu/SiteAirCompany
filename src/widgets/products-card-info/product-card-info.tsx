import { ProductGallery } from "@/entities/product/ui/product-gallery";
import { ProductMainHeader } from "@/entities/product/ui/product-main-header";
import { ProductSpecs } from "@/entities/product/ui/product-specs";
import { ProductActionButtons } from "@/features/catalog-filters/ui/product-action-buttons";

export function ProductCardWidget({ product }: { product: any }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <ProductGallery images={product.images} />
      <div className="space-y-6">
        <ProductMainHeader product={product} />
        <ProductActionButtons />
        <ProductSpecs product={product} />
      </div>
    </div>
  );
}
