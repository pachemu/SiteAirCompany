import type { Metadata } from "next";

import { HomeHero } from "@/widgets/home/home-hero";

export const metadata: Metadata = {
  title: "Купить кондиционер в Симферополе | Цены на кондиционеры в Крыму",
  description:
    "Профессиональный монтаж и ремонт кондиционеров в Крыму. Чистая установка, подбор мощности и гарантия на оборудование Haier и HEC.",
  keywords: [
    "купить кондиционер",
    "цена",
    "купить в симферополе",
    "купить в крыму",
    "кондиционеры симферополь",
    "монтаж кондиционеров",
    "ремонт кондиционеров",
  ],
};

export default function Home() {
  return (
    <div className="relative bg-gradient-to-br from-cyan-600 via-sky-600 to-blue-700">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-sky-400/10 blur-2xl" />
      </div>

      <div className="relative">
        <HomeHero />
      </div>
    </div>
  );
}
