"use client";

import { useState } from "react";
import Link from "next/link";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";

import { PHONE_E164 } from "@/shared/config/contacts";

const NAV_LINKS = [
  { href: "/", label: "Главная" },
  { href: "/catalog", label: "Каталог" },
  { href: "/about", label: "О нас" },
] as const;

export function HomeNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 md:px-6 md:pt-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between gap-3 rounded-full bg-white px-4 py-2.5 shadow-lg shadow-blue-900/10 md:px-6 md:py-3">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-2 text-base font-bold tracking-tight text-[#0c1527] md:text-lg"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0891b2] text-xs font-bold text-white">
              КК
            </span>
            <span className="hidden sm:inline">Кондиционеры в Крыму</span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="rounded-full px-4 py-2 text-sm font-medium text-[#334155] transition-colors hover:bg-[#f1f5f9] hover:text-[#0891b2]"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${PHONE_E164}`}
              className="hidden rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 sm:inline-flex"
            >
              Связаться
            </a>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full text-[#334155] transition-colors hover:bg-[#f1f5f9] md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
            >
              {mobileOpen ? (
                <CloseOutlined className="text-lg" />
              ) : (
                <MenuOutlined className="text-lg" />
              )}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav className="mt-2 flex flex-col gap-1 rounded-3xl bg-white p-3 shadow-lg shadow-blue-900/10 md:hidden">
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-[#334155] transition-colors hover:bg-[#f1f5f9]"
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            ))}
            <a
              href={`tel:${PHONE_E164}`}
              className="rounded-2xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-blue-700"
              onClick={() => setMobileOpen(false)}
            >
              Связаться
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
