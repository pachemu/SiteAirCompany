"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Intentionally minimal: avoid leaking details to UI.
    // If you have a logger (Sentry etc.), wire it here later.
  }, [error]);

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center gap-4 px-4 py-12 text-center">
      <h1 className="text-2xl font-semibold tracking-tight">Что-то пошло не так</h1>
      <p className="text-sm text-muted-foreground">
        Попробуйте обновить страницу или повторить действие.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex h-10 items-center justify-center rounded-xl bg-primary px-4 text-sm font-medium text-primary-foreground"
        >
          Повторить
        </button>
        <Link
          href="/"
          className="inline-flex h-10 items-center justify-center rounded-xl border px-4 text-sm font-medium"
        >
          На главную
        </Link>
      </div>
    </div>
  );
}

