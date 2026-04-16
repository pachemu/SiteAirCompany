import { Descriptions } from "antd";
import type { Product } from "../model/types";

interface ProductSpecsProps {
  product: Product;
}

export function ProductSpecs({ product }: ProductSpecsProps) {
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
  ];

  return (
    <div className="bg-white p-4 rounded-lg border">
      <Descriptions
        title="Характеристики"
        column={1}
        items={items}
        size="small"
      />
    </div>
  );
}
