import type { Product } from "@/entities/product/model/types";
import { ProductMainHeader } from "@/entities/product/ui/product-main-header";
import { ProductGallery } from "@/entities/product/ui/product-gallery";
import { ProductSpecs } from "@/entities/product/ui/product-specs";
import { ProductActionButtons } from "@/features/product-actions/ui/product-action-buttons";

interface ProductDetailsWidgetProps {
  product: Product;
}

export function ProductDetailsWidget({ product }: ProductDetailsWidgetProps) {
  console.log("ProductDetailsWidget rendered with product:", product);

  const rawImageUrl = product.imageUrl || "";
  const images = rawImageUrl
    .split(",")
    .map((url) => url.trim())
    .filter((url) => url.length > 0 && url.startsWith("http"));

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="flex flex-col gap-4">
            <ProductGallery images={images} />
          </div>
          <div className="flex flex-col gap-6">
            <ProductMainHeader product={product} />
            <ProductActionButtons />
            <div className="bg-white p-8 rounded-lg border mb-8">
              <h3 className="mb-6 text-xl font-semibold">
                Полные технические характеристики
              </h3>
              <ProductSpecs product={product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
