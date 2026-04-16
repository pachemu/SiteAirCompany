"use client";

import { Button } from "antd";
import { MessageCircle, Phone } from "lucide-react";

export function ProductActionButtons() {
  return (
    <div className="flex gap-3">
      <Button
        type="primary"
        size="large"
        icon={<MessageCircle className="h-4 w-4" />}
        className="flex-1"
        href="https://wa.me/79788390272"
        target="_blank"
      >
        Написать
      </Button>
      <Button
        size="large"
        icon={<Phone className="h-4 w-4" />}
        className="flex-1"
        href="tel:+79788390272"
      >
        Позвонить
      </Button>
    </div>
  );
}
