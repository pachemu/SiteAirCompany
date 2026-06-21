"use client";

import {
  ClockCircleOutlined,
  CarOutlined,
  SafetyCertificateOutlined,
  ShopOutlined,
} from "@ant-design/icons";

type Benefit = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const BENEFITS: Benefit[] = [
  {
    title: "Монтаж за 3 часа",
    description: "Приезжаем вовремя, работаем чётко по плану.",
    icon: <ClockCircleOutlined className="text-xl text-[#0891b2]" />,
  },
  {
    title: "Бесплатный выезд",
    description: "Осмотр и рекомендации по месту.",
    icon: <CarOutlined className="text-xl text-[#0891b2]" />,
  },
  {
    title: "Чистая работа без пыли",
    description: "Аккуратно, с защитой мебели и уборкой после монтажа.",
    icon: <SafetyCertificateOutlined className="text-xl text-[#0891b2]" />,
  },
  {
    title: "Свой склад в наличии",
    description: "Популярные модели доступны быстрее, без ожидания поставки.",
    icon: <ShopOutlined className="text-xl text-[#0891b2]" />,
  },
];

export function Benefits() {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm md:p-10">
      <div className="space-y-2">
        <h2 className="m-0 text-2xl font-extrabold text-[#0c1527] md:text-3xl">
          Почему нас рекомендуют
        </h2>
        <p className="m-0 text-[#64748b]">
          Ставим кондиционеры так, чтобы вы забыли о жаре — и не вспоминали о
          ремонте.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {BENEFITS.map((item) => (
          <div key={item.title} className="rounded-2xl bg-[#f8fafc] p-5 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="shrink-0 rounded-xl bg-[#0891b2]/10 p-2.5">{item.icon}</div>
              <div className="min-w-0">
                <div className="text-sm font-bold text-[#0c1527]">
                  {item.title}
                </div>
                <div className="mt-1 text-xs leading-5 text-[#64748b]">
                  {item.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
