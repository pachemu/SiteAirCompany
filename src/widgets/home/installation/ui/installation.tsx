export function Installation() {
  return (
    <section className="relative overflow-hidden rounded-2xl bg-white px-6 py-10 shadow-sm md:px-10 md:py-14">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0891b2]/5 via-transparent to-[#0891b2]/5 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-3 text-center">
            <h2 className="m-0 text-3xl font-extrabold leading-tight tracking-tight text-[#0c1527] md:text-4xl">
              Установка кондиционеров
              <br />
              <span className="text-[#0891b2]">в Симферополе</span>
            </h2>
            <p className="m-0 text-sm font-medium text-[#64748b] md:text-base">
              Профессиональный монтаж · Гарантия качества · Поддержка 24/7
            </p>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl bg-[#f8fafc] p-5 md:p-6">
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0891b2]/10">
                    <span className="text-lg text-[#0891b2]">✓</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="m-0 text-base font-bold text-[#0c1527]">
                    Гарантия комфорта в жаркие дни
                  </h3>
                  <p className="m-0 text-sm leading-relaxed text-[#64748b]">
                    Профессиональная установка кондиционера в Симферополе и по всему
                    Крыму — это гарантия комфорта в жаркие дни. Мы предлагаем
                    качественный монтаж с соблюдением всех норм, чтобы ваш
                    кондиционер работал эффективно и безопасно.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-[#f8fafc] p-5 md:p-6">
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0891b2]/10">
                    <span className="text-lg text-[#0891b2]">⚙</span>
                  </div>
                </div>
                <div className="space-y-1">
                  <h3 className="m-0 text-base font-bold text-[#0c1527]">
                    Полный комплекс работ
                  </h3>
                  <p className="m-0 text-sm leading-relaxed text-[#64748b]">
                    Установка кондиционера в Симферополе включает полный комплекс
                    работ: от подбора места до тестирования системы. Мы используем
                    современное оборудование и материалы.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#0891b2]/20 bg-[#0891b2]/5 p-5 text-center md:p-6">
              <p className="m-0 mb-2 text-base font-bold text-[#0c1527] md:text-lg">
                Готовы к идеальному микроклимату?
              </p>
              <p className="m-0 text-sm text-[#64748b]">
                Свяжитесь с нами для консультации по установке в Симферополе.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
