import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-7xl flex-col items-center justify-center gap-6 px-4 text-center">
      <h1 className="text-6xl font-bold text-[#0F172A]">404</h1>
      <p className="text-lg text-[#475569]">
        Страница не найдена. Возможно, она была перемещена или удалена.
      </p>
      <Link
        href="/"
        className="rounded-2xl bg-[#38BDF8] px-6 py-3 text-sm font-semibold text-[#0F172A] transition-colors hover:bg-[#0EA5E9]"
      >
        На главную
      </Link>
    </div>
  );
}
