import Link from "next/link";
import { EMAIL, PHONE_E164, PHONE_HUMAN } from "@/shared/config/contacts";

export function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-100 bg-white px-4 py-10 md:py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <h4 className="m-0 text-xl font-bold text-blue-900">
              Кондиционеры в Крыму
            </h4>
            <p className="text-slate-500 text-sm max-w-xs">
              Профессиональный подбор и монтаж климатических систем по всему
              Крыму.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h5 className="m-0 font-semibold text-slate-800">Навигация</h5>
            <nav className="flex flex-col gap-2">
              <Link
                href="/catalog"
                className="text-slate-600 hover:text-blue-600 transition-colors text-sm"
              >
                Каталог товаров
              </Link>
            </nav>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <h5 className="m-0 font-semibold text-slate-800">
              Связаться с нами
            </h5>
            <div className="flex flex-col gap-2 md:items-end">
              <a
                href={`tel:${PHONE_E164}`}
                className="text-lg font-bold text-slate-800 hover:text-blue-600 transition-colors"
              >
                {PHONE_HUMAN}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="text-slate-600 hover:text-blue-600 transition-colors text-sm"
              >
                {EMAIL}
              </a>
              <span className="text-slate-400 text-sm">
                Респ. Крым, г. Симферополь
              </span>
            </div>
          </div>
        </div>

        <div className="my-8 h-[1px] w-full bg-slate-100" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs">
          <span>© {new Date().getFullYear()} Кондиционеры в Крыму</span>
          <Link href="/privacy" className="hover:text-slate-600">
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
}
