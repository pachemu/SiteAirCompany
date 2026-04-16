"use client";

import { Button } from "antd";
import { ShoppingCart, Phone } from "lucide-react";

export function ProductActionButtons() {
  return (
    <div className="flex gap-3 pt-4">
      <Button
        type="primary"
        size="large"
        icon={<ShoppingCart className="h-4 w-4" />}
        className="flex-1"
      >
        Добавить в корзину
      </Button>
      <Button
        size="large"
        icon={<Phone className="h-4 w-4" />}
        className="flex-1"
      >
        Заказать
      </Button>
    </div>
  );
}
