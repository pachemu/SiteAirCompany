import Link from "next/link";
import { EMAIL, PHONE_E164, PHONE_HUMAN } from "@/shared/config/contacts";

export function Footer() {
  return (
    <footer className="bg-[#0c1527] px-4 py-10 text-white md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <h4 className="m-0 text-xl font-bold">Кондиционеры в Крыму</h4>
            <p className="max-w-xs text-sm text-white/50">
              Профессиональный подбор и монтаж климатических систем по всему Крыму.
            </p>
            <p className="max-w-xs text-xs leading-relaxed text-white/30">
              Продажа и установка кондиционеров в Симферополе и Крыму. Работаем по
              82 региону. Телефон: {PHONE_HUMAN}.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h5 className="m-0 font-semibold">Навигация</h5>
            <nav className="flex flex-col gap-2">
              <Link
                href="/catalog"
                className="text-sm text-white/50 transition-colors hover:text-[#22d3ee]"
              >
                Каталог товаров
              </Link>
              <Link
                href="/about"
                className="text-sm text-white/50 transition-colors hover:text-[#22d3ee]"
              >
                О нас
              </Link>
            </nav>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <h5 className="m-0 font-semibold">Связаться с нами</h5>
            <div className="flex flex-col gap-2 md:items-end">
              <a
                href={`tel:${PHONE_E164}`}
                className="text-lg font-bold text-white transition-colors hover:text-[#22d3ee]"
              >
                {PHONE_HUMAN}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="text-sm text-white/50 transition-colors hover:text-[#22d3ee]"
              >
                {EMAIL}
              </a>
              <span className="text-sm text-white/30">
                Респ. Крым, г. Симферополь
              </span>
            </div>
          </div>
        </div>

        <div className="my-8 h-px w-full bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-white/30 md:flex-row">
          <span>© {new Date().getFullYear()} Кондиционеры в Крыму. ИП Ионин Алексей Иванович</span>
          <span>Кондиционеры-в-крыму.рф</span>
        </div>
      </div>
    </footer>
  );
}
