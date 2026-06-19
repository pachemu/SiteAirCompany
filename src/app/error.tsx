"use client";

import { useEffect } from "react";
import Link from "next/link";

import { PHONE_E164, PHONE_HUMAN } from "@/shared/config/contacts";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex min-h-[65vh] max-w-2xl flex-col items-center justify-center gap-5 px-4 py-12 text-center text-[#0c1527]">
      <div className="inline-flex rounded-full border border-[#0891b2]/30 bg-[#0891b2]/10 px-4 py-2 text-sm font-medium text-[#0891b2]">
        Мы уже на месте
      </div>
      <h1 className="text-3xl font-semibold tracking-tight">
        Что-то пошло не так, но страницу можно вернуть
      </h1>
      <p className="max-w-xl text-base leading-7 text-[#64748b]">
        Попробуйте загрузить страницу еще раз. Если ошибка повторится, просто
        позвоните нам — поможем подобрать кондиционер и оформить установку.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex h-11 items-center justify-center rounded-xl bg-[#2563eb] px-5 text-sm font-medium text-white shadow-sm"
        >
          Попробовать снова
        </button>
        <a
          href={`tel:${PHONE_E164}`}
          className="inline-flex h-11 items-center justify-center rounded-xl border border-[#e2e8f0] px-5 text-sm font-medium"
        >
          {PHONE_HUMAN}
        </a>
        <Link
          href="/"
          className="inline-flex h-11 items-center justify-center rounded-xl border border-[#e2e8f0] px-5 text-sm font-medium"
        >
          На главную
        </Link>
      </div>
    </div>
  );
}
