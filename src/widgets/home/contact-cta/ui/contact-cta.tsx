"use client";

import { Button, Typography } from "antd";
import { MessageOutlined, PhoneOutlined } from "@ant-design/icons";

import {
  PHONE_E164,
  PHONE_HUMAN,
  TELEGRAM_LINK,
} from "@/shared/config/contacts";

const { Title, Paragraph } = Typography;

export function ContactCTA() {
  return (
    <section className="rounded-2xl overflow-hidden border border-[#38BDF8]/30 bg-gradient-to-br from-[#0F172A] via-[#075985] to-[#38BDF8] text-white shadow-sm">
      <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 md:p-10">
        <div className="space-y-3">
          <Title level={2} className="m-0 !text-white !text-2xl md:!text-3xl">
            Нужна консультация по модели и монтажу?
          </Title>
          <Paragraph className="m-0 !text-slate-100">
            Напишите в WhatsApp, MAX, Telegram — ответим быстро, подберём
            кондиционер и озвучим стоимость под ключ.
          </Paragraph>
          <div className="text-sm text-slate-100">
            Телефон:{" "}
            <span className="font-semibold text-white">{PHONE_HUMAN}</span>
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
            className="h-11 rounded-2xl bg-[#F8FAFC] text-[#0F172A] hover:!bg-[#E2E8F0] hover:!text-[#0F172A]"
          >
            Написать в Telegram
          </Button>
          <Button
            size="large"
            icon={<PhoneOutlined />}
            href={`tel:${PHONE_E164}`}
            className="h-11 rounded-2xl border-white/50 bg-transparent text-white hover:!border-white hover:!text-white"
          >
            Позвонить
          </Button>
        </div>
      </div>
    </section>
  );
}
