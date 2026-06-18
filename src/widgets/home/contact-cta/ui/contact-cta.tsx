"use client";

import { Button } from "antd";
import { MessageOutlined, PhoneOutlined } from "@ant-design/icons";

import {
  PHONE_E164,
  PHONE_HUMAN,
  TELEGRAM_LINK,
} from "@/shared/config/contacts";

export function ContactCTA() {
  return (
    <section className="overflow-hidden rounded-2xl border border-[#e2e8f0] bg-gradient-to-br from-[#0c1527] via-[#0e3a5e] to-[#0891b2] text-white shadow-lg">
      <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 md:p-10">
        <div className="space-y-3">
          <h2 className="m-0 text-2xl font-extrabold text-white md:text-3xl">
            Нужна консультация по модели и монтажу?
          </h2>
          <p className="m-0 text-sm text-white/70">
            Напишите в WhatsApp, MAX, Telegram — ответим быстро, подберём
            кондиционер и озвучим стоимость под ключ.
          </p>
          <div className="text-sm text-white/60">
            Телефон:{" "}
            <span className="font-bold text-white">{PHONE_HUMAN}</span>
          </div>
        </div>

        <div className="flex flex-col gap-3 md:items-end md:justify-center">
          <Button
            type="primary"
            size="large"
            icon={<MessageOutlined />}
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="!h-11 !rounded-xl !bg-white !text-[#0c1527] !font-semibold hover:!bg-white/90"
          >
            Написать в Telegram
          </Button>
          <Button
            size="large"
            icon={<PhoneOutlined />}
            href={`tel:${PHONE_E164}`}
            className="!h-11 !rounded-xl !border-white/30 !bg-transparent !text-white hover:!border-white/60"
          >
            Позвонить
          </Button>
        </div>
      </div>
    </section>
  );
}
