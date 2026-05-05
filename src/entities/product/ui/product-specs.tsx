import { Descriptions } from "antd";
import type { Product } from "@/entities/product/model/types";

interface ProductSpecsProps {
  product: Product;
}

export function ProductSpecs({ product }: ProductSpecsProps) {
  const features =
    Array.isArray(product.features) && product.features.length > 0
      ? product.features
      : [];

  const items = [
    {
      key: "brand",

      label: "Бренд",

      children: product.brand,
    },

    {
      key: "series",

      label: "Серия",

      children: product.series,
    },

    {
      key: "model",

      label: "Модель",
      children: product.model,
    },
    {
      key: "power",

      label: "Мощность",

      children: product.power,
    },

    {
      key: "energyClass",

      label: "Класс энергоэффективности",

      children: product.energyClass,
    },

    {
      key: "category",

      label: "Категория",

      children: product.category,
    },
    ...(product.area
      ? [
          {
            key: "area",
            label: "Площадь помещения",
            children: product.area,
          },
        ]
      : []),
    {
      key: "features",
      label: "Особенности",
      children:
        features.length === 0 ? (
          <span className="text-[#475569]">—</span>
        ) : (
          <span className="m-0 pl-5 space-y-1">{features.join(", ")}</span>
        ),
    },
  ];

  return (
    <div className="w-full rounded-2xl border border-[#CBD5E1] bg-[#E2E8F0] p-6 shadow-sm [&_.ant-descriptions]:w-full [&_.ant-descriptions-view]:w-full [&_.ant-descriptions-view>table]:w-full [&_.ant-descriptions-item-content]:break-words [&_.ant-descriptions-item-content]:whitespace-normal">
      <Descriptions
        title="Технические характеристики"
        column={1}
        items={items}
        size="small"
      />
    </div>
  );
}
