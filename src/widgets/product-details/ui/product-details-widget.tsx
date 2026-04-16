import type { Product } from "@/entities/product/model/types";
import { formatProductPrice } from "@/entities/product/lib/format-product-price";
import { ProductMainHeader } from "@/entities/product/ui/product-main-header";
import { ProductGallery } from "@/entities/product/ui/product-gallery";
import { ProductSpecs } from "@/entities/product/ui/product-specs";
import { ProductActionButtons } from "@/features/product-actions/ui/product-action-buttons";

interface ProductDetailsWidgetProps {
  product: Product;
}

function hasPrice(price: Product["price"]) {
  const numeric =
    typeof price === "number"
      ? price
      : Number(String(price).replace(/[^0-9.-]+/g, ""));

  return Number.isFinite(numeric) && numeric > 0;
}

export function ProductDetailsWidget({ product }: ProductDetailsWidgetProps) {
  const rawImageUrl = product.imageUrl || "";
  const images = rawImageUrl
    .split(",")
    .map((url) => url.trim())
    .filter(
      (url) => url.length > 0 && (url.startsWith("http") || url.startsWith("/")),
    );

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12 items-start">
          <div className="lg:col-span-3 lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)]">
            <ProductGallery images={images} />
          </div>
          <div className="lg:col-span-2 flex flex-col gap-6 min-w-0">
            <ProductMainHeader product={product} />
            <div className="bg-white rounded-lg border p-6">
              <div className="text-sm text-muted-foreground mb-1">Цена</div>
              <div className="text-3xl font-semibold leading-tight">
                {hasPrice(product.price)
                  ? formatProductPrice(product.price)
                  : "Цена по запросу"}
              </div>
            </div>
            <ProductActionButtons />
            <ProductSpecs product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
