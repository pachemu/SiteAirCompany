import { Button } from "antd";
import { ShoppingCart, Phone } from "lucide-react";

export function ProductActionButtons() {
  return (
    <div className="flex gap-3">
      <Button
        type="primary"
        size="large"
        icon={<ShoppingCart className="h-4 w-4" />}
        className="bg-[#38BDF8] text-[#0F172A] hover:!bg-[#0EA5E9] hover:!text-[#0F172A]"
        block
      >
        В корзину
      </Button>
      <Button
        size="large"
        icon={<Phone className="h-4 w-4" />}
        className="border-[#CBD5E1] text-[#0F172A] hover:!border-[#38BDF8] hover:!text-[#0284C7]"
        block
      >
        Заказать
      </Button>
    </div>
  );
}
