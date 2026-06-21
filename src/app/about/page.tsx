import type { Metadata } from "next";
import Link from "next/link";

import { PHONE_E164, PHONE_HUMAN, TELEGRAM_LINK } from "@/shared/config/contacts";

export const metadata: Metadata = {
  title: "О нас — Кондиционеры в Крыму",
  description:
    "ИП Ионин Алексей Иванович — продажа и профессиональная установка кондиционеров в Симферополе и по всему Крыму. Гарантия, чистый монтаж, подбор мощности.",
  keywords: [
    "кондиционеры крым",
    "установка кондиционеров симферополь",
    "монтаж кондиционеров",
    "о компании",
  ],
};

const SCENARIOS = [
  {
    title: "Для квартиры",
    description: "Тихие модели для спальни и гостиной, подбор по площади.",
    emoji: "🏢",
  },
  {
    title: "Для дома",
    description: "Решения для больших помещений и частных домов с монтажом.",
    emoji: "🏠",
  },
  {
    title: "Для офиса",
    description: "Комфорт для команды: равномерное охлаждение и быстрый сервис.",
    emoji: "🏛",
  },
] as const;

const BENEFITS = [
  {
    title: "Монтаж за 3 часа",
    description: "Приезжаем вовремя, работаем чётко по плану.",
    emoji: "⏱",
  },
  {
    title: "Бесплатный выезд",
    description: "Осмотр и рекомендации по месту.",
    emoji: "🚗",
  },
  {
    title: "Чистая работа без пыли",
    description: "Аккуратно, с защитой мебели и уборкой после монтажа.",
    emoji: "✓",
  },
  {
    title: "Свой склад в наличии",
    description: "Популярные модели доступны быстрее, без ожидания поставки.",
    emoji: "📦",
  },
] as const;

const INSTALLATION_POINTS = [
  {
    title: "Гарантия комфорта в жаркие дни",
    description:
      "Профессиональная установка кондиционера в Симферополе и по всему Крыму — это гарантия комфорта в жаркие дни. Мы предлагаем качественный монтаж с соблюдением всех норм, чтобы ваш кондиционер работал эффективно и безопасно.",
  },
  {
    title: "Полный комплекс работ",
    description:
      "Установка кондиционера в Симферополе включает полный комплекс работ: от подбора места до тестирования системы. Мы используем современное оборудование и материалы.",
  },
] as const;

function SectionHeading({
  label,
  title,
  description,
  light = false,
}: {
  label: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="mb-12 space-y-3 md:mb-16">
      <p
        className={`text-xs font-bold uppercase tracking-[0.2em] ${light ? "text-white/60" : "text-[#0891b2]"}`}
      >
        {label}
      </p>
      <h2
        className={`font-serif text-3xl font-normal tracking-tight md:text-4xl ${light ? "text-white" : "text-[#0c1527]"}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`max-w-2xl text-base leading-relaxed md:text-lg ${light ? "text-white/75" : "text-[#64748b]"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="flex flex-1 text-[#0c1527]">
      <div className="w-full">
        <section className="relative overflow-hidden bg-gradient-to-br from-cyan-600 via-sky-600 to-blue-700 px-4 py-12 md:px-6 md:py-16">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-6xl">
            <nav className="mb-8 flex items-center gap-2 text-sm text-white/60">
              <Link href="/" className="transition-colors hover:text-white">
                Главная
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-white">О нас</span>
            </nav>

            <div className="max-w-3xl space-y-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                ИП Ионин Алексей Иванович
              </p>
              <h1 className="font-serif text-4xl font-normal leading-tight tracking-tight text-white md:text-5xl lg:text-[3.25rem]">
                Кондиционеры в Крыму
              </h1>
              <p className="text-base leading-relaxed text-white/80 md:text-lg">
                Мы продаём и профессионально устанавливаем кондиционеры Haier и HEC
                в Симферополе и по всему Крыму. Чистый монтаж с пылесосом, подбор
                мощности под вашу площадь и официальная гарантия на оборудование.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/catalog"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-[#0c1527] shadow-lg transition-all hover:bg-white/90"
                >
                  Каталог моделей
                </Link>
                <a
                  href={`tel:${PHONE_E164}`}
                  className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 bg-white/10 px-7 text-sm font-semibold text-white transition-colors hover:bg-white/15"
                >
                  {PHONE_HUMAN}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-12 md:px-6 md:py-16">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              label="Подбор"
              title="Подбор под ваш сценарий"
              description="Не переплачивайте: подберём мощность, функции и класс энергоэффективности."
            />
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {SCENARIOS.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl bg-[#f8fafc] p-6 shadow-sm md:p-8"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0891b2]/10 text-xl">
                    {item.emoji}
                  </div>
                  <h3 className="text-lg font-bold text-[#0c1527]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#64748b]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f8fafc] px-4 py-12 md:px-6 md:py-16">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              label="Преимущества"
              title="Почему нас рекомендуют"
              description="Ставим кондиционеры так, чтобы вы забыли о жаре — и не вспоминали о ремонте."
            />
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {BENEFITS.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl bg-white p-6 shadow-sm md:p-7"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0891b2]/10 text-lg font-bold text-[#0891b2]">
                    {item.emoji}
                  </div>
                  <h3 className="text-base font-bold text-[#0c1527]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#64748b]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-12 md:px-6 md:py-16">
          <div className="mx-auto max-w-6xl">
            <SectionHeading
              label="Монтаж"
              title="Установка кондиционеров в Симферополе"
              description="Профессиональный монтаж · Гарантия качества · Поддержка 24/7"
            />
            <div className="space-y-5">
              {INSTALLATION_POINTS.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl bg-[#f8fafc] p-6 md:p-8"
                >
                  <h3 className="text-lg font-bold text-[#0c1527]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#64748b] md:text-base">
                    {item.description}
                  </p>
                </div>
              ))}
              <div className="rounded-3xl border border-[#0891b2]/20 bg-[#0891b2]/5 p-6 text-center md:p-8">
                <p className="text-lg font-bold text-[#0c1527] md:text-xl">
                  Готовы к идеальному микроклимату?
                </p>
                <p className="mt-2 text-sm text-[#64748b] md:text-base">
                  Свяжитесь с нами для консультации по установке в Симферополе.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-gradient-to-br from-[#0c1527] via-[#0e3a5e] to-[#0891b2] px-4 py-12 md:px-6 md:py-16">
          <div className="relative mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
              <div className="space-y-4">
                <SectionHeading
                  label="Контакты"
                  title="Нужна консультация по модели и монтажу?"
                  description="Напишите в Telegram — ответим быстро, подберём кондиционер и озвучим стоимость с установкой."
                  light
                />
                <p className="text-sm text-white/60">
                  Телефон:{" "}
                  <a href={`tel:${PHONE_E164}`} className="font-bold text-white">
                    {PHONE_HUMAN}
                  </a>
                </p>
              </div>
              <div className="flex flex-col gap-4 md:items-end">
                <a
                  href={TELEGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 w-full items-center justify-center rounded-full bg-white px-8 text-sm font-semibold text-[#0c1527] transition-colors hover:bg-white/90 md:w-auto"
                >
                  Написать в Telegram
                </a>
                <a
                  href={`tel:${PHONE_E164}`}
                  className="inline-flex h-12 w-full items-center justify-center rounded-full border border-white/30 bg-white/10 px-8 text-sm font-semibold text-white transition-colors hover:bg-white/15 md:w-auto"
                >
                  Позвонить
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
