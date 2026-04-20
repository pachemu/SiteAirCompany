"use client";

import { Typography } from "antd";
import {
  ClockCircleOutlined,
  CarOutlined,
  SafetyCertificateOutlined,
  ShopOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

type Benefit = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const BENEFITS: Benefit[] = [
  {
    title: "Монтаж за 3 часа",
    description: "Приезжаем вовремя, работаем чётко по плану.",
    icon: <ClockCircleOutlined className="text-2xl text-blue-900" />,
  },
  {
    title: "Бесплатный выезд",
    description: "Осмотр и рекомендации по месту, без навязанных услуг.",
    icon: <CarOutlined className="text-2xl text-blue-900" />,
  },
  {
    title: "Чистая работа без пыли",
    description: "Аккуратно, с защитой мебели и уборкой после монтажа.",
    icon: <SafetyCertificateOutlined className="text-2xl text-blue-900" />,
  },
  {
    title: "Свой склад в наличии",
    description: "Популярные модели доступны быстрее, без ожидания поставки.",
    icon: <ShopOutlined className="text-2xl text-blue-900" />,
  },
];

export function Benefits() {
  return (
    <section className="rounded-2xl border bg-white p-6 md:p-10">
      <div className="space-y-2">
        <Title level={2} className="m-0 !text-2xl md:!text-3xl !text-slate-900">
          Почему нас рекомендуют
        </Title>
        <Paragraph className="m-0 !text-slate-600">
          Ставим кондиционеры так, чтобы вы забыли о жаре — и не вспоминали о
          ремонте.
        </Paragraph>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {BENEFITS.map((item) => (
          <div key={item.title} className="rounded-2xl bg-slate-50 p-5">
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

