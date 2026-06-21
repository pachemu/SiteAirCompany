import Image from "next/image";
import Link from "next/link";
import { Button, Carousel, Tag } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";

import { formatProductPrice } from "@/entities/product/lib/format-product-price";
import type { Product } from "@/entities/product/model/types";
import { PHONE_E164 } from "@/shared/config/contacts";
import { BLUR_DATA_URL } from "@/shared/lib/image-placeholder";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const rawImageUrl = product.imageUrl || "";

  const finalImages = rawImageUrl
    .split(",")
    .map((url) => url.trim())
    .filter(
      (url) =>
        url.length > 0 && (url.startsWith("http") || url.startsWith("/")),
    );

  const galleryImages =
    finalImages.length > 0
      ? finalImages
      : ["/images/products/catalog-product-placeholder.svg"];

  const featureLimit = 4;
  const featureItems = product.features.slice(0, featureLimit);
  const hiddenFeatureCount = product.features.length - featureItems.length;

  const getImageAlt = (index: number) => {
    return index === 0
      ? `Кондиционер ${product.brand} ${product.model} — купить с установкой в Симферополе, цена ${formatProductPrice(product.price)} руб.`
      : `${product.brand} ${product.model} фото ${index + 1} — кондиционеры в Крыму`;
  };

  return (
    <div className="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
      <div className="relative overflow-hidden bg-[#f8fafc]">
        <div className="absolute left-3 top-3 z-10 rounded-full bg-[#0891b2] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
          В наличии
        </div>

        <Carousel effect="fade" autoplay autoplaySpeed={4000} dots={false} arrows={false}>
          {galleryImages.map((url, index) => (
            <div key={url || index}>
              <Link href={`/catalog/${product.id}`}>
                <Image
                  src={url}
                  alt={getImageAlt(index)}
                  title={`${product.brand} ${product.model} - фото ${index + 1}`}
                  width={400}
                  height={340}
                  className="h-56 w-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                  sizes="(min-width: 1536px) 18vw, (min-width: 1280px) 20vw, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, 100vw"
                  placeholder="blur"
                  blurDataURL={BLUR_DATA_URL}
                  priority={index === 0}
                />
              </Link>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="flex flex-1 flex-col justify-between p-4">
        <div className="space-y-3">
          <div className="space-y-1">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0891b2]">
              {product.category}
            </p>
            <Link href={`/catalog/${product.id}`}>
              <h2 className="m-0 text-base font-bold leading-tight text-[#0c1527] transition-colors group-hover:text-[#0891b2]">
                {product.brand} {product.series}
              </h2>
            </Link>
            <p className="text-xs text-[#64748b]">{product.model}</p>
          </div>

          <dl className="space-y-1.5 text-sm">
            <div className="flex items-center justify-between gap-3">
              <dt className="text-[#64748b]">Мощность</dt>
              <dd className="m-0 text-right font-medium text-[#334155]">{product.power}</dd>
            </div>
            <div className="flex items-center justify-between gap-3">
              <dt className="text-[#64748b]">Энергоэффективность</dt>
              <dd className="m-0 text-right font-medium text-[#334155]">{product.energyClass}</dd>
            </div>
            {product.area && (
              <div className="flex items-center justify-between gap-3">
                <dt className="text-[#64748b]">Площадь</dt>
                <dd className="m-0 text-right font-medium text-[#334155]">{product.area}</dd>
              </div>
            )}
          </dl>

          {featureItems.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {featureItems.map((feature) => (
                <Tag
                  key={feature}
                  className="!m-0 !rounded-full !border-[#e2e8f0] !bg-[#f1f5f9] !px-2 !py-0.5 !text-[11px] !text-[#334155]"
                >
                  {feature}
                </Tag>
              ))}
              {hiddenFeatureCount > 0 && (
                <Tag className="!m-0 !rounded-full !border-[#e2e8f0] !bg-[#f1f5f9] !px-2 !py-0.5 !text-[11px] !text-[#64748b]">
                  +{hiddenFeatureCount}
                </Tag>
              )}
            </div>
          )}
        </div>

        <div className="mt-4 space-y-3 pt-3">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#64748b]">Цена с установкой</p>
            <p className="m-0 text-xl font-extrabold tracking-tight text-[#0c1527]">
              {formatProductPrice(product.price)}
            </p>
          </div>

          <div className="flex gap-2">
            <Button
              type="primary"
              size="middle"
              icon={<ShoppingCartOutlined />}
              className="!flex-1 !rounded-xl !bg-[#2563eb] !border-[#2563eb] !text-white !font-semibold hover:!bg-[#1d4ed8]"
              href={PHONE_E164 ? `tel:${PHONE_E164}` : undefined}
            >
              Купить с установкой
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
