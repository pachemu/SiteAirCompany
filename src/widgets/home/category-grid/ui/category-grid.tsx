"use client";

import {
  HomeOutlined,
  ApartmentOutlined,
  BankOutlined,
} from "@ant-design/icons";

type CategoryCard = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const CATEGORIES: CategoryCard[] = [
  {
    title: "Для квартиры",
    description: "Тихие модели для спальни и гостиной, подбор по площади.",
    icon: <ApartmentOutlined className="text-xl text-[#0891b2]" />,
  },
  {
    title: "Для дома",
    description: "Решения для больших помещений и частных домов с монтажом.",
    icon: <HomeOutlined className="text-xl text-[#0891b2]" />,
  },
  {
    title: "Для офиса",
    description: "Комфорт для команды: равномерное охлаждение и быстрый сервис.",
    icon: <BankOutlined className="text-xl text-[#0891b2]" />,
  },
];

export function CategoryGrid() {
  return (
    <section className="space-y-5">
      <div className="space-y-1">
        <h2 className="m-0 text-2xl font-extrabold text-[#0c1527] md:text-3xl">
          Подбор под ваш сценарий
        </h2>
        <p className="m-0 text-[#64748b]">
          Не переплачивайте: подберём мощность, функции и класс энергоэффективности.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {CATEGORIES.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl bg-white p-5 shadow-sm"
          >
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
