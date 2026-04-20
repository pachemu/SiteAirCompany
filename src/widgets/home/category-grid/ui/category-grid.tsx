"use client";

import { Typography } from "antd";
import {
  HomeOutlined,
  ApartmentOutlined,
  BankOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

type CategoryCard = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const CATEGORIES: CategoryCard[] = [
  {
    title: "Для квартиры",
    description: "Тихие модели для спальни и гостиной, подбор по площади.",
    icon: <ApartmentOutlined className="text-2xl text-blue-900" />,
  },
  {
    title: "Для дома",
    description: "Решения для больших помещений и частных домов с монтажом.",
    icon: <HomeOutlined className="text-2xl text-blue-900" />,
  },
  {
    title: "Для офиса",
    description: "Комфорт для команды: равномерное охлаждение и быстрый сервис.",
    icon: <BankOutlined className="text-2xl text-blue-900" />,
  },
];

export function CategoryGrid() {
  return (
    <section className="space-y-5">
      <div className="space-y-1">
        <Title level={2} className="m-0 !text-2xl md:!text-3xl !text-slate-900">
          Подбор под ваш сценарий
        </Title>
        <Paragraph className="m-0 !text-slate-600">
          Не переплачивайте: подберём мощность, функции и класс энергоэффективности.
        </Paragraph>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {CATEGORIES.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border bg-white p-5 shadow-sm"
          >
            <div className="flex items-start gap-3">
              <div className="rounded-2xl bg-blue-50 p-3">{item.icon}</div>
              <div className="min-w-0">
                <div className="text-base font-semibold text-slate-900">
                  {item.title}
                </div>
                <div className="mt-1 text-sm leading-6 text-slate-600">
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

