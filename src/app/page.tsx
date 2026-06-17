import type { Metadata } from "next";

import { Benefits, CategoryGrid, ContactCTA, Hero } from "@/widgets/home";
import { Installation } from "@/widgets/home/installation";

export const metadata: Metadata = {
  title: "Купить кондиционер в Симферополе | Цены на кондиционеры в Крыму",
  description:
    "Купить кондиционер в Симферополе по выгодным ценам. Широкий выбор кондиционеров в Крыму. Установка кондиционеров в Симферополе и Крыму.",
  keywords: [
    "купить кондиционер",
    "цена",
    "купить в симферополе",
    "купить в крыму",
    "кондиционеры симферополь",
  ],
};

export default async function Home() {
  return (
    <main className="flex flex-1 bg-[#F8FAFC] text-[#0F172A]">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 md:px-6 md:py-12 xl:px-8">
        <div className="space-y-10">
          <section className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight bg-gradient-to-r from-[#0F172A] via-[#38BDF8] to-[#0F172A] bg-clip-text text-transparent">
              Кондиционеры в Крыму: продажа и установка в Симферополе
            </h1>
            <div className="space-y-4 max-w-2xl">
              <p className="text-lg text-[#475569] leading-relaxed">
                Предлагаем{" "}
                <span className="font-semibold text-[#0F172A]">
                  широкий выбор кондиционеров
                </span>{" "}
                с профессиональной установкой. Купить кондиционер в Крыму с
                гарантией и сервисом.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <div className="flex items-center gap-2 bg-[#38BDF8]/10 px-3 py-2 rounded-lg">
                  <span className="text-[#38BDF8] font-semibold">✓</span>
                  <span className="text-sm text-[#0F172A] font-medium">
                    Цена с установкой включена
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-[#38BDF8]/10 px-3 py-2 rounded-lg">
                  <span className="text-[#38BDF8] font-semibold">✓</span>
                  <span className="text-sm text-[#0F172A] font-medium">
                    82 регион (Республика Крым)
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-[#38BDF8]/10 px-3 py-2 rounded-lg">
                  <span className="text-[#38BDF8] font-semibold">✓</span>
                  <span className="text-sm text-[#0F172A] font-medium">
                    Город Симферополь
                  </span>
                </div>
              </div>
            </div>
          </section>
          <Hero />
          <CategoryGrid />
          <Benefits />
          <Installation />
          <ContactCTA />
        </div>
      </div>
    </main>
  );
}
