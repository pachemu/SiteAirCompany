import { Button } from "antd";
import { ShoppingCart, Phone } from "lucide-react";

export function ProductActionButtons() {
  return (
    <div className="flex gap-3">
      <Button
        type="primary"
        size="large"
        icon={<ShoppingCart className="h-4 w-4" />}
        block
      >
        В корзину
      </Button>
      <Button size="large" icon={<Phone className="h-4 w-4" />} block>
        Заказать
      </Button>
    </div>
  );
}
