"use client";

import Link from "next/link";
import { MessageOutlined, PhoneOutlined, ArrowRightOutlined } from "@ant-design/icons";

import {
  PHONE_E164,
  PHONE_HUMAN,
  TELEGRAM_LINK,
} from "@/shared/config/contacts";

export function HomeConsultation() {
  return (
    <section className="px-4 py-12 md:px-6 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 shadow-2xl shadow-blue-950/20 backdrop-blur-md">
          <div className="grid grid-cols-1 gap-10 p-8 md:grid-cols-2 md:gap-12 md:p-12 lg:p-16">
            <div className="space-y-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                Быстрая консультация
              </p>
              <h2 className="font-serif text-3xl font-normal leading-tight tracking-tight text-white md:text-4xl lg:text-[2.75rem]">
                Подберём кондиционер и рассчитаем стоимость за 10 минут
              </h2>
              <p className="max-w-md text-base leading-relaxed text-white/75 md:text-lg">
                Расскажите о помещении — подскажем мощность, модель и сроки монтажа.
                Ответим в Telegram или по телефону в рабочее время.
              </p>
              <p className="text-sm text-white/60">
                Телефон:{" "}
                <a
                  href={`tel:${PHONE_E164}`}
                  className="font-semibold text-white transition-colors hover:text-white/90"
                >
                  {PHONE_HUMAN}
                </a>
              </p>
            </div>

            <div className="flex flex-col justify-center gap-4">
              <a
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-white px-8 text-base font-semibold text-[#0c1527] shadow-lg transition-all hover:bg-white/90"
              >
                <MessageOutlined />
                Написать в Telegram
              </a>
              <a
                href={`tel:${PHONE_E164}`}
                className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 text-base font-semibold text-white transition-colors hover:bg-white/15"
              >
                <PhoneOutlined />
                Позвонить сейчас
              </a>
              <Link
                href="/catalog"
                className="inline-flex h-12 items-center justify-center gap-2 text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                Смотреть каталог
                <ArrowRightOutlined className="text-xs" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
