"use client";

import {
  SafetyCertificateOutlined,
  ToolOutlined,
  ExperimentOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";

const BENEFITS = [
  {
    title: "Чистый монтаж",
    description:
      "Защита мебели и пола, аккуратная разметка и уборка после работ — квартира остаётся в порядке.",
    icon: <ToolOutlined className="text-2xl text-white" />,
  },
  {
    title: "Промышленный пылесос",
    description:
      "Сверление отверстий с промышленным пылесосом — пыль не разлетается по комнате.",
    icon: <ExperimentOutlined className="text-2xl text-white" />,
  },
  {
    title: "Медные трубы",
    description:
      "Используем медные магистрали и качественную изоляцию — система служит дольше и работает тише.",
    icon: <ThunderboltOutlined className="text-2xl text-white" />,
  },
  {
    title: "Гарантия 3 года",
    description:
      "Официальная гарантия на оборудование и выполненные работы. Поддержка после установки.",
    icon: <SafetyCertificateOutlined className="text-2xl text-white" />,
  },
] as const;

export function HomeBenefits() {
  return (
    <section className="px-4 py-8 md:px-6 md:py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 space-y-4 text-center md:mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
            Стандарты работы
          </p>
          <h2 className="font-serif text-3xl font-normal tracking-tight text-white md:text-4xl lg:text-5xl">
            Монтаж, которому доверяют
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
            Каждая установка — по технологии: чисто, надёжно и с гарантией результата
            на годы вперёд.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {BENEFITS.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl border border-white/20 bg-white/10 p-6 shadow-xl shadow-blue-950/10 backdrop-blur-md transition-colors hover:bg-white/15 md:p-8"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/20">
                {item.icon}
              </div>
              <h3 className="font-serif text-xl font-medium text-white md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
