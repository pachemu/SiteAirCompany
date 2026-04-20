import type { Product } from "@/entities/product/model/types";
import { formatProductPrice } from "@/entities/product/lib/format-product-price";
import { ProductDescription } from "@/entities/product/ui/product-description";
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
      (url) =>
        url.length > 0 && (url.startsWith("http") || url.startsWith("/")),
    );

  return (
    <div className="bg-background py-10 pb-16 md:py-12 md:pb-24">
      <div className="mx-auto w-full px-4 md:px-6 xl:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start lg:gap-10 xl:gap-12">
          <div className="lg:col-span-6 xl:col-span-7 lg:sticky lg:top-24 lg:h-[calc(100vh-7rem)]">
            <ProductGallery images={images} />
          </div>
          <div className="flex w-full min-w-0 flex-col gap-6 lg:col-span-6 xl:col-span-5">
            <ProductMainHeader product={product} />
            <div className="w-full rounded-2xl border bg-card p-6">
              <div className="text-sm text-muted-foreground mb-1">Цена</div>
              <div className="text-3xl font-semibold leading-tight">
                {hasPrice(product.price)
                  ? formatProductPrice(product.price)
                  : "Цена по запросу"}
              </div>
            </div>
            <ProductActionButtons />
            <ProductDescription product={product} />
            <ProductSpecs product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
