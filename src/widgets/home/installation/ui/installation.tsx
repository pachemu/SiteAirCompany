import React from "react";

export function Installation() {
  return (
    <section className="relative py-16 px-4 md:py-24 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#38BDF8]/5 via-transparent to-[#0EA5E9]/5 pointer-events-none" />
      
      <div className="relative max-w-4xl mx-auto">
        {/* Decorative top accent */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent rounded-full" />
        
        <div className="space-y-8">
          {/* Main heading */}
          <div className="space-y-4 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-[#38BDF8] via-[#0EA5E9] to-[#38BDF8] bg-clip-text text-transparent">
                Установка кондиционеров
              </span>
              <br />
              <span className="text-[#0F172A]">в Симферополе</span>
            </h2>
            <p className="text-[#64748B] text-lg md:text-xl font-medium">
              Профессиональный монтаж • Гарантия качества • Поддержка 24/7
            </p>
          </div>

          {/* Content paragraphs */}
          <div className="space-y-6">
            {/* Block 1 */}
            <div className="bg-white/50 backdrop-blur-sm border border-[#CBD5E1] rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#38BDF8]/10">
                    <span className="text-2xl">✓</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#0F172A]">
                    Гарантия комфорта в жаркие дни
                  </h3>
                  <p className="text-[#475569] leading-relaxed">
                    Профессиональная установка кондиционера в Симферополе и по всему Крыму — это гарантия комфорта в жаркие дни. Мы предлагаем качественный монтаж с соблюдением всех норм, чтобы ваш кондиционер работал эффективно и безопасно. В 82 регионе Крыма климатические условия требуют надежных решений, и наша команда мастеров обеспечит быстрый и аккуратный монтаж.
                  </p>
                </div>
              </div>
            </div>

            {/* Block 2 */}
            <div className="bg-white/50 backdrop-blur-sm border border-[#CBD5E1] rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#38BDF8]/10">
                    <span className="text-2xl">⚙</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-[#0F172A]">
                    Полный комплекс работ под ключ
                  </h3>
                  <p className="text-[#475569] leading-relaxed">
                    Установка кондиционера в Симферополе включает полный комплекс работ: от подбора места до тестирования системы. Мы используем современное оборудование и материалы, чтобы избежать проблем в будущем. Если вы ищете, где купить и установить кондиционер в Крыму, обратитесь к нам — мы поможем создать идеальный микроклимат в вашем доме или офисе.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Block */}
            <div className="bg-gradient-to-br from-[#38BDF8]/10 to-[#0EA5E9]/10 border border-[#38BDF8]/30 rounded-2xl p-6 md:p-8 text-center">
              <p className="text-lg md:text-xl text-[#0F172A] font-semibold mb-3">
                Готовы к идеальному микроклимату?
              </p>
              <p className="text-[#475569] leading-relaxed">
                Свяжитесь с нами для консультации по установке в Симферополе. Ваша комфортная жизнь в Крыму начинается здесь!
              </p>
            </div>
          </div>
        </div>

        {/* Decorative bottom accent */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#38BDF8] to-transparent rounded-full" />
      </div>
    </section>
  );
}

