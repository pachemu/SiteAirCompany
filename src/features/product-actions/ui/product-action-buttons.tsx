"use client";

import { Button } from "antd";
import { MessageCircle, Phone } from "lucide-react";

import { PHONE_E164, TELEGRAM_LINK } from "@/shared/config/contacts";

export function ProductActionButtons() {
  return (
    <div className="flex gap-3">
      <Button
        type="primary"
        size="large"
        icon={<MessageCircle className="h-4 w-4" />}
        className="flex-1 bg-[#38BDF8] text-[#0F172A] hover:!bg-[#0EA5E9] hover:!text-[#0F172A]"
        href={TELEGRAM_LINK}
        target="_blank"
        rel="noopener noreferrer"
      >
        Написать
      </Button>
      <Button
        size="large"
        icon={<Phone className="h-4 w-4" />}
        className="flex-1 border-[#CBD5E1] text-[#0F172A] hover:!border-[#38BDF8] hover:!text-[#0284C7]"
        href={`tel:${PHONE_E164}`}
      >
        Позвонить
      </Button>
    </div>
  );
}
