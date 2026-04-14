import Image from "next/image";
import { Card, Tag, Button, Carousel } from "antd";
import { PhoneOutlined } from "@ant-design/icons";

import { formatProductPrice } from "../lib/format-product-price";
import type { Product } from "../model/types";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const rawImageUrl = product.imageUrl || "";

  const finalImages = rawImageUrl
    .split(",")
    .map((url) => url.trim())
    .filter((url) => url.length > 0 && url.startsWith("http"));

  const featureLimit = 4;
  const featureItems = product.features.slice(0, featureLimit);
  const hiddenFeatureCount = product.features.length - featureItems.length;

  return (
    <Card
      hoverable
      className="min-w-0 h-full min-h-[34rem] flex flex-col overflow-hidden rounded-3xl shadow-sm"
      styles={{
        body: {
          padding: 0,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          height: "100%",
        },
      }}
    >
      <div className="overflow-hidden border-b bg-muted/30">
        <Carousel effect="fade" autoplay autoplaySpeed={3000}>
          {finalImages.map((url, index) => (
            <div key={index}>
              <Image
                src={url}
                alt={`${product.model} - фото ${index + 1}`}
                width={320}
                height={280}
                unoptimized
                className="h-48 w-full object-contain"
              />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="flex flex-1 flex-col justify-between p-4">
        <div className="space-y-4">
          <div className="space-y-1">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {product.category}
            </p>
            <h2 className="text-lg font-semibold leading-tight">
              {product.brand} {product.series}
            </h2>
            <p className="text-sm text-muted-foreground">{product.model}</p>
          </div>

          <dl className="space-y-2 text-sm">
            <div className="flex items-start justify-between gap-3">
              <dt className="text-muted-foreground">Мощность</dt>
              <dd className="text-right font-medium">{product.power}</dd>
            </div>

            <div className="flex items-start justify-between gap-3">
              <dt className="text-muted-foreground">
                Класс энергоэффективности
              </dt>
              <dd className="text-right font-medium">{product.energyClass}</dd>
            </div>
          </dl>

          <div className="flex flex-wrap gap-2 max-h-17 overflow-visible">
            {featureItems.map((feature) => (
              <Tag
                key={feature}
                className="max-w-[45%] truncate whitespace-nowrap rounded-full border px-2 py-1 text-xs m-0"
              >
                {feature}
              </Tag>
            ))}

            {hiddenFeatureCount > 0 ? (
              <Tag className="rounded-full border px-2 py-1 text-xs m-0">
                +{hiddenFeatureCount}
              </Tag>
            ) : null}
          </div>
        </div>

        <div className="space-y-1 border-t pt-4">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Цена под ключ
          </p>
          <p className="text-2xl font-bold tracking-tight">
            {formatProductPrice(product.price)}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 border-t p-4">
        <span className="text-sm text-muted-foreground">
          Монтаж и консультация
        </span>

        <Button
          type="primary"
          size="small"
          icon={<PhoneOutlined />}
          href="tel:+79788397202"
        >
          Заказать
        </Button>
      </div>
    </Card>
  );
}
