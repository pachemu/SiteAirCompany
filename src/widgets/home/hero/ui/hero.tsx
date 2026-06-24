"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "antd";
import {
  CheckCircleOutlined,
  SafetyCertificateOutlined,
  ToolOutlined,
} from "@ant-design/icons";

import { PHONE_E164, PHONE_HUMAN } from "@/shared/config/contacts";

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0c1527] via-[#0e3a5e] to-[#0891b2] text-white shadow-xl">
      <div className="absolute inset-0 bg-[url('/images/products/conditioner_air.png')] bg-cover bg-center opacity-[0.06]" />
      <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-[#0891b2]/20 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-[#0ea5e9]/10 blur-[100px]" />

      <div className="relative grid grid-cols-1 gap-8 p-6 md:grid-cols-2 md:p-10 lg:p-12">
        <div className="flex flex-col justify-center gap-5">
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold tracking-wide text-white/90">
            <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e] animate-pulse" />
            Крым · Симферополь · Доставка и монтаж
          </div>

          <h1 className="m-0 text-3xl font-extrabold leading-[1.1] tracking-tight md:text-5xl lg:text-[3.25rem]">
            Установка кондиционеров
            <br />
            <span className="bg-gradient-to-r from-[#22d3ee] via-[#0891b2] to-[#67e8f9] bg-clip-text text-transparent">
              в Крыму
            </span>
          </h1>

          <p className="m-0 max-w-lg text-base leading-relaxed text-white/70 md:text-lg">
            Чистый монтаж с пылесосом. Гарантия 3 года.
            <br className="hidden md:block" />
            Подберём мощность, доставим и установим за один день.
          </p>

          <div className="flex flex-col gap-3 pt-1 sm:flex-row">
            <Button
              type="primary"
              size="large"
              className="!h-12 !rounded-xl !bg-[#0ea5e9] !border-[#0ea5e9] !text-white !font-bold !text-base !shadow-[0_4px_20px_rgba(14,165,233,0.4)] hover:!bg-[#0284c7] hover:!border-[#0284c7]"
            >
              <Link href="/catalog">Купить с установкой</Link>
            </Button>
            <Button
              size="large"
              className="!h-12 !rounded-xl !border-white/30 !bg-white/5 !text-white hover:!border-white/60 hover:!bg-white/10"
            >
              <a href={`tel:${PHONE_E164}`}>{PHONE_HUMAN}</a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-x-5 gap-y-2 pt-3 text-sm text-white/60">
            <span className="flex items-center gap-1.5">
              <CheckCircleOutlined className="text-[#22c55e]" />
              Цена с установкой
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircleOutlined className="text-[#22c55e]" />
              Гарантия 3 года
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircleOutlined className="text-[#22c55e]" />
              Работаем по 82 региону
            </span>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[#0891b2]/20 to-[#22d3ee]/5" />
          <div className="relative w-full max-w-[480px]">
            <Image
              src="/images/products/conditioner_air.png"
              alt="Современный кондиционер — продажа и установка в Крыму"
              width={1200}
              height={800}
              priority
              className="h-auto w-full drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      <div className="relative grid grid-cols-1 gap-3 border-t border-white/10 p-5 backdrop-blur-sm md:grid-cols-3 md:p-6">
        <div className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0891b2]/20">
            <ToolOutlined className="text-lg text-[#22d3ee]" />
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Монтаж за 1 день</div>
            <div className="text-xs text-white/50">Быстро и аккуратно</div>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0891b2]/20">
            <SafetyCertificateOutlined className="text-lg text-[#22d3ee]" />
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Чистая работа</div>
            <div className="text-xs text-white/50">С пылесосом и уборкой</div>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0891b2]/20">
            <SafetyCertificateOutlined className="text-lg text-[#22d3ee]" />
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Гарантия 3 года</div>
            <div className="text-xs text-white/50">Официальная гарантия</div>
          </div>
        </div>
      </div>
    </section>
  );
}
