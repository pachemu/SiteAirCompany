"use client";

import Image from "next/image";
import Link from "next/link";
import { PhoneOutlined, ArrowRightOutlined } from "@ant-design/icons";

import { PHONE_E164, PHONE_HUMAN } from "@/shared/config/contacts";

const CASCADE_UNITS = [
  {
    src: "/images/products/product-images/RAC2026/RAC-QUANTUM-BLACK.png",
    alt: "Haier Quantum — настенная сплит-система",
    wrapperClass: "right-[2%] top-[2%] z-40 w-[46%] animate-[float_6s_ease-in-out_infinite]",
  },
  {
    src: "/images/products/product-images/RAC2026/RAC-STELLAR-HP-SILVER.png",
    alt: "Haier Stellar — компактная модель",
    wrapperClass: "left-0 top-[14%] z-30 w-[42%] animate-[float_7s_ease-in-out_0.8s_infinite]",
  },
  {
    src: "/images/products/product-images/RAC2026/RAC-JADE-SM-SILVER.png",
    alt: "Haier Jade — премиальная серия",
    wrapperClass: "right-[8%] top-[36%] z-20 w-[48%] animate-[float_5.5s_ease-in-out_1.2s_infinite]",
  },
  {
    src: "/images/products/product-images/RAC2025/RAC-LIGHTERA-DC-INVERTER-PINK.jpg",
    alt: "Haier Lightera — инверторная модель",
    wrapperClass: "bottom-[18%] left-[6%] z-10 w-[44%] animate-[float_6.5s_ease-in-out_0.4s_infinite]",
  },
  {
    src: "/images/products/product-images/HEC/HEC-2U-MULTI-WHITE.png",
    alt: "Внутренний блок кондиционера HEC",
    wrapperClass: "bottom-[2%] right-[4%] z-10 w-[40%] animate-[float_7.5s_ease-in-out_1.8s_infinite]",
  },
] as const;

function SnowflakeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-3.5 w-3.5 shrink-0 text-sky-500"
      aria-hidden="true"
    >
      <path
        d="M12 2v20M2 12h20M5.6 5.6l12.8 12.8M18.4 5.6L5.6 18.4M12 2l-2 3 2 1 2-1-2-3M12 22l-2-3 2-1 2 1-2 3M2 12l3-2 1 2-1 2-3-2M22 12l-3-2-1 2 1 2 3-2M5.6 5.6l2.5 1.5-1 2.2-2.5-1.5M18.4 5.6l-2.5 1.5 1 2.2 2.5-1.5M5.6 18.4l2.5-1.5 1 2.2-2.5 1.5M18.4 18.4l-2.5-1.5-1 2.2 2.5 1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function UnitCard({
  src,
  alt,
  wrapperClass,
}: (typeof CASCADE_UNITS)[number]) {
  return (
    <div className={`absolute ${wrapperClass}`}>
      <div className="rounded-2xl bg-white/12 p-3 shadow-2xl shadow-blue-950/25 ring-1 ring-white/25 backdrop-blur-md sm:rounded-3xl sm:p-4">
        <Image
          src={src}
          alt={alt}
          width={320}
          height={160}
          priority
          className="h-auto w-full drop-shadow-2xl"
        />
      </div>
    </div>
  );
}

export function HomeHero() {
  return (
    <section className="relative overflow-hidden px-4 py-8 md:px-6 md:py-12 lg:py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="w-full flex justify-center md:justify-start">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs font-semibold tracking-wide text-white backdrop-blur-sm">
              <SnowflakeIcon />
              Эксперты по климату в Крыму
            </div>
          </div>

          <h1 className="font-serif text-4xl font-normal leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[3.5rem] xl:text-[3.75rem]">
            Профессиональный монтаж и ремонт кондиционеров
          </h1>

          <p className="max-w-lg text-base leading-relaxed text-white/80 md:text-lg">
            Чистая установка с пылесосом — без пыли и грязи в квартире. Подберём
            мощность под вашу площадь, доставим и смонтируем за один день.
            Официальная гарантия на оборудование Haier и HEC.
          </p>

          <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
            <Link
              href="/catalog"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-[#0c1527] shadow-lg shadow-black/10 transition-all hover:bg-white/90 hover:shadow-xl"
            >
              Выбрать модель
              <ArrowRightOutlined className="text-xs" />
            </Link>

            <a
              href={`tel:${PHONE_E164}`}
              className="inline-flex items-center gap-3 rounded-full px-2 py-1 text-white transition-colors hover:text-white/90 max-md:w-full max-md:justify-center max-md:bg-white/10 max-md:backdrop-blur-sm max-md:p-2"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm ring-1 ring-white/25">
                <PhoneOutlined className="text-lg" />
              </span>
              <span className="text-base font-semibold">{PHONE_HUMAN}</span>
            </a>
          </div>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-lg lg:mx-0 lg:max-w-none z-10">
          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300/20 blur-3xl" />
          <div className="absolute left-1/3 top-2/3 h-52 w-52 rounded-full bg-sky-200/25 blur-2xl animate-pulse" />
          <div className="absolute right-1/4 top-1/3 h-36 w-36 rounded-full bg-white/15 blur-xl" />

          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-[18%] top-[28%] h-44 w-44 rounded-full border border-white/10 bg-gradient-to-br from-white/5 to-transparent" />
            <div className="absolute right-[12%] top-[42%] h-32 w-32 rounded-full border border-cyan-200/20 bg-gradient-to-tl from-cyan-200/10 to-transparent" />
            <div className="absolute bottom-[22%] left-[32%] h-28 w-28 rounded-full bg-white/5 blur-md" />
          </div>

          <div className="relative h-full min-h-[420px] w-full sm:min-h-[480px] lg:min-h-[540px]">
            {CASCADE_UNITS.map((unit) => (
              <UnitCard key={unit.src} {...unit} />
            ))}
          </div>

          <div className="pointer-events-none absolute left-[28%] top-[32%] z-0 h-52 w-52 rotate-12">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 via-cyan-200/10 to-transparent blur-xl" />
            <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}