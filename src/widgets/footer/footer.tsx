import Link from "next/link";
import { EMAIL, PHONE_E164, PHONE_HUMAN } from "@/shared/config/contacts";

export function Footer() {
  return (
    <footer className="mt-12 border-t border-[#CBD5E1] bg-[#E2E8F0] px-4 py-10 text-[#0F172A] md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <h4 className="m-0 text-xl font-bold text-[#0F172A]">
              Кондиционеры в Крыму
            </h4>
            <p className="text-[#475569] text-sm max-w-xs">
              Профессиональный подбор и монтаж климатических систем по всему
              Крыму.
            </p>
            <p className="text-[#475569] text-sm max-w-xs">
              Кондиционеры в Симферополе и Крыму — ваш надежный партнер. Купить
              кондиционер в Симферополе по выгодным ценам, с профессиональной
              установкой в 82 регионе. Адрес: ул. Примерная, 10, Симферополь,
              Крым. Телефон: +7 (123) 456-78-90.
            </p>
            <p className="text-[#64748B] text-sm">
              © 2024 Ваш бизнес. Все права защищены. Установка кондиционеров в
              Крыму — наша специализация.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h5 className="m-0 font-semibold text-[#0F172A]">Навигация</h5>
            <nav className="flex flex-col gap-2">
              <Link
                href="/catalog"
                className="text-[#475569] hover:text-[#38BDF8] transition-colors text-sm"
              >
                Каталог товаров
              </Link>
            </nav>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <h5 className="m-0 font-semibold text-[#0F172A]">
              Связаться с нами
            </h5>
            <div className="flex flex-col gap-2 md:items-end">
              <a
                href={`tel:${PHONE_E164}`}
                className="text-lg font-bold text-[#0F172A] hover:text-[#38BDF8] transition-colors"
              >
                {PHONE_HUMAN}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="text-[#475569] hover:text-[#38BDF8] transition-colors text-sm"
              >
                {EMAIL}
              </a>
              <span className="text-[#64748B] text-sm">
                Респ. Крым, г. Симферополь
              </span>
            </div>
          </div>
        </div>

        <div className="my-8 h-[1px] w-full bg-[#CBD5E1]" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[#64748B] text-xs">
          <span>© {new Date().getFullYear()} Кондиционеры в Крыму</span>
          <Link href="/privacy" className="hover:text-[#0F172A]">
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
}
