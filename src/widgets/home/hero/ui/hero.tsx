"use client";

import Image from "next/image";
import Link from "next/link";
import { Button, Typography } from "antd";

import { PHONE_E164 } from "@/shared/config/contacts";

const { Title, Paragraph } = Typography;

export function Hero() {
  return (
    <section className="rounded-2xl border border-[#CBD5E1] bg-[#E2E8F0]/70 overflow-hidden shadow-sm">
      <div className="grid grid-cols-1 gap-8 p-6 md:grid-cols-2 md:p-10">
        <div className="flex flex-col justify-center gap-5">
          <div className="inline-flex w-fit items-center rounded-full bg-[#38BDF8]/15 px-3 py-1 text-xs font-semibold text-[#0F172A]">
            Крым · Подбор · Монтаж · Сервис
          </div>

          <Title
            level={1}
            className="m-0 !text-3xl md:!text-5xl !text-[#0F172A]"
          >
            Профессиональный климат в вашем доме под ключ
          </Title>

          <Paragraph className="m-0 !text-base md:!text-lg !text-[#475569]">
            Продажа, установка кондиционеров в Крыму. Официальная гарантия 3
            года
          </Paragraph>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              type="primary"
              size="large"
              className="h-11 rounded-2xl bg-[#38BDF8] text-[#0F172A] shadow-sm hover:!bg-[#0EA5E9] hover:!text-[#0F172A]"
            >
              <Link href="/catalog">Подобрать модель</Link>
            </Button>
            <Button
              size="large"
              className="h-11 rounded-2xl border-[#38BDF8] text-[#0F172A] hover:!border-[#38BDF8] hover:!text-[#0284C7]"
            >
              <a href={`tel:${PHONE_E164}`}>Консультация</a>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2 text-sm text-[#475569] md:grid-cols-3">
            <div className="rounded-2xl bg-[#F8FAFC] border border-[#CBD5E1] p-3 shadow-sm">
              <div className="font-semibold text-[#0F172A]">Под площадь</div>
              <div>Подбор под помещение</div>
            </div>
            <div className="rounded-2xl bg-[#F8FAFC] border border-[#CBD5E1] p-3 shadow-sm">
              <div className="font-semibold text-[#0F172A]">Под бюджет</div>
              <div>Оптимальная цена</div>
            </div>
            <div className="rounded-2xl bg-[#F8FAFC] border border-[#CBD5E1] p-3 col-span-2 shadow-sm md:col-span-1">
              <div className="font-semibold text-[#0F172A]">Под ключ</div>
              <div>Монтаж и запуск</div>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute -inset-8 rounded-[2rem] bg-gradient-to-br from-[#38BDF8]/10 via-[#38BDF8]/5 to-transparent" />
          <div className="relative w-full max-w-[560px]">
            <Image
              src={"/images/products/conditioner_air.png"}
              alt="Современный кондиционер"
              width={1200}
              height={800}
              priority
              className="h-auto w-full rounded-2xl border border-[#CBD5E1] bg-[#F8FAFC] shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
