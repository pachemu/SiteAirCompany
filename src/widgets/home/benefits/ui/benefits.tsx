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
    icon: <ClockCircleOutlined className="text-2xl text-[#38BDF8]" />,
  },
  {
    title: "Бесплатный выезд",
    description: "Осмотр и рекомендации по месту.",
    icon: <CarOutlined className="text-2xl text-[#38BDF8]" />,
  },
  {
    title: "Чистая работа без пыли",
    description: "Аккуратно, с защитой мебели и уборкой после монтажа.",
    icon: <SafetyCertificateOutlined className="text-2xl text-[#38BDF8]" />,
  },
  {
    title: "Свой склад в наличии",
    description: "Популярные модели доступны быстрее, без ожидания поставки.",
    icon: <ShopOutlined className="text-2xl text-[#38BDF8]" />,
  },
];

export function Benefits() {
  return (
    <section className="rounded-2xl border border-[#CBD5E1] bg-[#E2E8F0] p-6 shadow-sm md:p-10">
      <div className="space-y-2">
        <Title level={2} className="m-0 !text-2xl md:!text-3xl !text-[#0F172A]">
          Почему нас рекомендуют
        </Title>
        <Paragraph className="m-0 !text-[#475569]">
          Ставим кондиционеры так, чтобы вы забыли о жаре — и не вспоминали о
          ремонте.
        </Paragraph>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {BENEFITS.map((item) => (
          <div key={item.title} className="rounded-2xl bg-[#F8FAFC] p-5 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="rounded-2xl bg-[#38BDF8]/10 p-3">{item.icon}</div>
              <div className="min-w-0">
                <div className="text-base font-semibold text-[#0F172A]">
                  {item.title}
                </div>
                <div className="mt-1 text-sm leading-6 text-[#475569]">
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
