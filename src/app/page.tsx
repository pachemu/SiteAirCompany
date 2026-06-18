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
    <main className="flex flex-1 bg-white text-[#0c1527]">
      <div className="mx-auto w-full max-w-6xl px-4 py-6 md:px-6 md:py-10 xl:px-8">
        <div className="space-y-12 md:space-y-16">
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
