"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "antd";
import { MenuOutlined, PhoneOutlined, CloseOutlined } from "@ant-design/icons";

import { EMAIL, PHONE_E164, PHONE_HUMAN } from "@/shared/config/contacts";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e2e8f0] bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 items-center justify-between px-4 md:px-6 xl:px-8">
        <Link href="/" className="flex items-center gap-2 text-lg font-bold tracking-tight text-[#0c1527]">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0891b2] text-xs font-bold text-white">
            КК
          </span>
          <span className="hidden sm:inline">Кондиционеры в Крыму</span>
          <span className="sm:hidden">КК</span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          <Link
            href="/catalog"
            className="rounded-lg px-3 py-2 text-sm font-medium text-[#334155] transition-colors hover:bg-[#f1f5f9] hover:text-[#0891b2]"
          >
            Каталог
          </Link>
          <a
            href={`tel:${PHONE_E164}`}
            className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-[#334155] transition-colors hover:bg-[#f1f5f9]"
          >
            <PhoneOutlined /> {PHONE_HUMAN}
          </a>
          <Button
            type="primary"
            className="!rounded-xl !bg-[#2563eb] !border-[#2563eb] !text-white !font-semibold hover:!bg-[#1d4ed8]"
          >
            <Link href="/catalog">Заявка</Link>
          </Button>
        </nav>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-[#334155] transition-colors hover:bg-[#f1f5f9] md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {mobileOpen ? <CloseOutlined className="text-xl" /> : <MenuOutlined className="text-xl" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-[#e2e8f0] bg-white px-4 pb-4 pt-3 md:hidden">
          <div className="flex flex-col gap-2">
            <Link
              href="/catalog"
              className="rounded-xl px-4 py-3 text-sm font-medium text-[#334155] transition-colors hover:bg-[#f1f5f9]"
              onClick={() => setMobileOpen(false)}
            >
              Каталог кондиционеров
            </Link>
            <a
              href={`tel:${PHONE_E164}`}
              className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-[#334155] transition-colors hover:bg-[#f1f5f9]"
            >
              <PhoneOutlined /> {PHONE_HUMAN}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="rounded-xl px-4 py-3 text-sm text-[#64748b] transition-colors hover:bg-[#f1f5f9]"
            >
              {EMAIL}
            </a>
            <Button
              type="primary"
              size="large"
              className="!mt-1 !rounded-xl !bg-[#2563eb] !border-[#2563eb] !text-white !font-semibold hover:!bg-[#1d4ed8]"
              onClick={() => setMobileOpen(false)}
            >
              <Link href="/catalog">Оставить заявку</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
