"use client";

import { Button } from "antd";
import { ShoppingCart, Phone } from "lucide-react";

import { PHONE_E164, TELEGRAM_LINK } from "@/shared/config/contacts";

export function ProductActionButtons() {
  return (
    <div className="flex gap-3">
      <Button
        type="primary"
        size="large"
        icon={<ShoppingCart className="h-4 w-4" />}
        className="!flex-1 !rounded-xl !bg-[#0ea5e9] !border-[#0ea5e9] !text-white !font-semibold hover:!bg-[#0284c7]"
        href={TELEGRAM_LINK}
        target="_blank"
        rel="noopener noreferrer"
      >
        Купить с установкой
      </Button>
      <Button
        size="large"
        icon={<Phone className="h-4 w-4" />}
        className="!flex-1 !rounded-xl !border-[#e2e8f0] !text-[#334155] hover:!border-[#0891b2] hover:!text-[#0891b2]"
        href={`tel:${PHONE_E164}`}
      >
        Позвонить
      </Button>
    </div>
  );
}
