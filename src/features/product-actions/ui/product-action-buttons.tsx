"use client";

import { Button } from "antd";
import { MessageCircle, Phone } from "lucide-react";

import { PHONE_E164, WHATSAPP_LINK } from "@/shared/config/contacts";

export function ProductActionButtons() {
  return (
    <div className="flex gap-3">
      <Button
        type="primary"
        size="large"
        icon={<MessageCircle className="h-4 w-4" />}
        className="flex-1"
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
      >
        Написать
      </Button>
      <Button
        size="large"
        icon={<Phone className="h-4 w-4" />}
        className="flex-1"
        href={`tel:${PHONE_E164}`}
      >
        Позвонить
      </Button>
    </div>
  );
}
