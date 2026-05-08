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
          <section className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0F172A]">
              Кондиционеры в Крыму: продажа и установка в Симферополе
            </h1>
            <p className="text-lg text-[#475569] max-w-2xl">
              Предлагаем широкий выбор кондиционеров с профессиональной
              установкой. Купить кондиционер в Крыму с гарантией и сервисом.
              Цена с установкой включена. Обслуживаем 82 регион (Республика
              Крым) и город Симферополь. Квалифицированные специалисты,
              качественное оборудование, выгодные условия.
            </p>
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
