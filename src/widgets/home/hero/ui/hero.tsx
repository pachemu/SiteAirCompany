"use client";

import Image from "next/image";
import Link from "next/link";
import { Button, Typography } from "antd";

const { Title, Paragraph } = Typography;

const HERO_IMAGE_SVG = encodeURIComponent(`
<svg width="1200" height="800" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="800" rx="48" fill="#F1F5F9"/>
  <rect x="170" y="230" width="860" height="300" rx="48" fill="#0B2A55"/>
  <rect x="230" y="280" width="740" height="70" rx="28" fill="#FFFFFF" opacity="0.92"/>
  <rect x="230" y="380" width="520" height="34" rx="17" fill="#FFFFFF" opacity="0.6"/>
  <circle cx="922" cy="397" r="16" fill="#60A5FA"/>
  <rect x="230" y="450" width="420" height="26" rx="13" fill="#FFFFFF" opacity="0.45"/>
  <path d="M260 320 C310 290, 350 290, 400 320" stroke="#0B2A55" stroke-width="10" stroke-linecap="round"/>
  <path d="M260 320 C310 350, 350 350, 400 320" stroke="#0B2A55" stroke-width="10" stroke-linecap="round" opacity="0.7"/>
</svg>
`);

export function Hero() {
  return (
    <section className="rounded-2xl bg-slate-50 border overflow-hidden">
      <div className="grid grid-cols-1 gap-8 p-6 md:grid-cols-2 md:p-10">
        <div className="flex flex-col justify-center gap-5">
          <div className="inline-flex w-fit items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-900">
            Крым · Подбор · Монтаж · Сервис
          </div>

          <Title
            level={1}
            className="m-0 !text-3xl md:!text-5xl !text-slate-900"
          >
            Профессиональный климат в вашем доме под ключ
          </Title>

          <Paragraph className="m-0 !text-base md:!text-lg !text-slate-600">
            Продажа, установка кондиционеров в Крыму. Официальная гарантия 3
            года
          </Paragraph>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              type="primary"
              size="large"
              className="h-11 rounded-2xl bg-blue-900 hover:!bg-blue-800"
            >
              <Link href="/catalog">Подобрать модель</Link>
            </Button>
            <Button
              size="large"
              className="h-11 rounded-2xl border-blue-900 text-blue-900"
            >
              <a href="tel:+79788390272">Консультация</a>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2 text-sm text-slate-600 md:grid-cols-3">
            <div className="rounded-2xl bg-white border p-3">
              <div className="font-semibold text-slate-900">Под площадь</div>
              <div>Подбор под помещение</div>
            </div>
            <div className="rounded-2xl bg-white border p-3">
              <div className="font-semibold text-slate-900">Под бюджет</div>
              <div>Оптимальная цена</div>
            </div>
            <div className="rounded-2xl bg-white border p-3 col-span-2 md:col-span-1">
              <div className="font-semibold text-slate-900">Под ключ</div>
              <div>Монтаж и запуск</div>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute -inset-8 bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.18),_transparent_55%)]" />
          <div className="relative w-full max-w-[560px]">
            <Image
              src={"/images/products/conditioner_air.png"}
              alt="Современный кондиционер"
              width={1200}
              height={800}
              priority
              className="h-auto w-full rounded-2xl border bg-white shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
