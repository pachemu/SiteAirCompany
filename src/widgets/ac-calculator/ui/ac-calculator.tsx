"use client";

import { useState } from "react";
import {
  CloseOutlined,
  ThunderboltOutlined,
  ExpandOutlined,
  ShrinkOutlined,
} from "@ant-design/icons";

import type { Product } from "@/entities/product";
import productsData from "@/entities/product/model/products.data.json";

type Step = "rooms" | "area" | "silence" | "winter" | "budget" | "results";

type RoomsOption = "one" | "multi";
type AreaOption = "small" | "medium" | "large";
type SilenceOption = "quiet" | "any";
type WinterOption = "yes" | "no";
type BudgetOption = "cheap" | "optimal" | "premium";

const ROOMS: { value: RoomsOption; label: string; desc: string }[] = [
  { value: "one", label: "Одну комнату", desc: "Сплит-система" },
  { value: "multi", label: "Две и более", desc: "Мультисплит" },
];

const AREAS: { value: AreaOption; label: string; desc: string }[] = [
  { value: "small", label: "До 20–25 кв.м.", desc: "Небольшая комната" },
  { value: "medium", label: "До 35 кв.м.", desc: "Среднее помещение" },
  { value: "large", label: "Большой зал (50+ кв.м.)", desc: "Студия / офис" },
];

const SILENCE: { value: SilenceOption; label: string; desc: string }[] = [
  { value: "quiet", label: "Нужна тишина", desc: "Спальня / детская" },
  { value: "any", label: "Обычное помещение", desc: "Зал / офис" },
];

const WINTER: { value: WinterOption; label: string; desc: string }[] = [
  { value: "yes", label: "Да, в сильные морозы", desc: "Инвертор с подогревом" },
  { value: "no", label: "Нет, только летом", desc: "Любые модели" },
];

const BUDGET: { value: BudgetOption; label: string; desc: string }[] = [
  { value: "cheap", label: "Максимально недорого", desc: "Самые доступные" },
  { value: "optimal", label: "Оптимальный баланс", desc: "Цена / Качество" },
  { value: "premium", label: "Премиум / Топ-качество", desc: "Топовые линейки" },
];

const SPLIT_CATS = [
  "Стандарт", "Премиум", "Универсальный", "Бизнес",
  "Консольные", "Кассетный однопоточный", "Кассетный 4-х поточный", "Канальный",
];

function parsePrice(p: number | string): number {
  return typeof p === "number" ? p : Number(String(p).replace(/[^0-9]/g, "")) || 0;
}

function parsePower(power: string): number | null {
  const m = power.replace(",", ".").match(/\d+(?:\.\d+)?/);
  return m ? Number(m[0]) : null;
}

function isHighEnergy(ec: string): boolean {
  const low = ec.toLowerCase();
  return low.includes("a++") || low.includes("а++") || low === "a" || low === "а";
}

function isInverter(product: Product): boolean {
  const s = (product.series + " " + product.name).toLowerCase();
  return s.includes("инвертор") || s.includes("inverter") || s.includes("dc");
}

function filterProducts(
  rooms: RoomsOption,
  area: AreaOption,
  silence: SilenceOption,
  winter: WinterOption,
  budget: BudgetOption,
): Product[] {
  const all = productsData as unknown as Product[];

  let list = all.filter((p) =>
    rooms === "multi" ? p.category === "Мультисплит" : SPLIT_CATS.includes(p.category),
  );

  list = list.filter((p) => {
    const pw = parsePower(p.power);
    if (pw === null) return true;
    if (area === "small") return pw <= 3.5;
    if (area === "medium") return pw <= 6;
    return pw > 4;
  });

  if (winter === "yes") {
    const inv = list.filter((p) => isInverter(p));
    if (inv.length > 0) list = inv;
  }

  if (silence === "quiet") {
    const quiet = list.filter((p) => isHighEnergy(p.energyClass) || isInverter(p));
    if (quiet.length > 0) list = quiet;
  }

  const sorted = [...list].sort((a, b) => parsePrice(a.price) - parsePrice(b.price));

  if (budget === "cheap") return sorted.slice(0, 4);

  if (budget === "premium") {
    const prem = sorted.filter(
      (p) => parsePrice(p.price) >= 50000 || isHighEnergy(p.energyClass),
    );
    return prem.length > 0 ? prem.slice(0, 4) : sorted.slice(-4).reverse();
  }

  const mid = Math.floor(sorted.length / 3);
  const slice = sorted.slice(mid, mid + 4);
  return slice.length > 0 ? slice : sorted.slice(0, 4);
}

function Header({ n, total, title, sub }: { n: number; total: number; title: string; sub: string }) {
  return (
    <div className="mb-5 text-center">
      <div className="mb-3 flex justify-center gap-1.5">
        {Array.from({ length: total }, (_, i) => (
          <div key={i} className={`h-1 w-7 rounded-full transition-colors ${i < n ? "bg-cyan-400" : "bg-white/15"}`} />
        ))}
      </div>
      <h2 className="m-0 mb-1 text-xl font-bold text-white md:text-2xl">{title}</h2>
      <p className="m-0 text-xs text-zinc-400">{sub}</p>
    </div>
  );
}

function Btn({ label, desc, onClick }: { label: string; desc: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full flex-col items-center gap-0.5 rounded-2xl border border-white/15 bg-white/8 px-5 py-3.5 text-center transition-all hover:border-cyan-400/50 hover:bg-white/15 active:scale-[0.97]"
    >
      <span className="text-base font-semibold text-white">{label}</span>
      <span className="text-xs text-zinc-400">{desc}</span>
    </button>
  );
}

function Card({ p }: { p: Product }) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-white/15 bg-white/8 p-5 text-center">
      <span className="rounded-full bg-cyan-400/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-300">
        {p.category}
      </span>
      <h3 className="m-0 text-base font-bold text-white">{p.brand} {p.series}</h3>
      <p className="m-0 text-xs text-zinc-400">{p.model}</p>
      <div className="flex w-full flex-col gap-1.5 text-xs">
        <div className="flex items-center justify-between text-zinc-300">
          <span>Мощность</span>
          <span className="font-medium text-white">{p.power}</span>
        </div>
        <div className="flex items-center justify-between text-zinc-300">
          <span>Энергокласс</span>
          <span className="font-medium text-white">{p.energyClass || "—"}</span>
        </div>
        <div className="flex items-center justify-between text-zinc-300">
          <span>Цена</span>
          <span className="font-medium text-white">
            {typeof p.price === "number" ? p.price.toLocaleString("ru-RU") + " ₽" : p.price}
          </span>
        </div>
      </div>
      <a
        href="tel:+79788390272"
        className="mt-auto inline-flex h-10 w-full items-center justify-center rounded-xl bg-cyan-400 text-sm font-semibold text-white transition-colors hover:bg-cyan-500"
      >
        Узнать цену / Заказать
      </a>
    </div>
  );
}

export function AcCalculator() {
  const [isOpen, setIsOpen] = useState(false);
  const [fs, setFs] = useState(false);
  const [step, setStep] = useState<Step>("rooms");
  const [rooms, setRooms] = useState<RoomsOption | null>(null);
  const [area, setArea] = useState<AreaOption | null>(null);
  const [silence, setSilence] = useState<SilenceOption | null>(null);
  const [winter, setWinter] = useState<WinterOption | null>(null);
  const [budget, setBudget] = useState<BudgetOption | null>(null);
  const [results, setResults] = useState<Product[]>([]);

  const reset = () => {
    setStep("rooms");
    setRooms(null);
    setArea(null);
    setSilence(null);
    setWinter(null);
    setBudget(null);
    setResults([]);
  };

  const close = () => { setIsOpen(false); setFs(false); reset(); };

  const idx = step === "rooms" ? 1 : step === "area" ? 2 : step === "silence" ? 3 : step === "winter" ? 4 : step === "budget" ? 5 : 5;

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-400 text-white shadow-lg shadow-cyan-400/40 transition-all hover:bg-cyan-500 hover:scale-105 active:scale-95 md:bottom-6 md:right-6"
        aria-label="Подобрать кондиционер"
      >
        <ThunderboltOutlined className="text-xl" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] pointer-events-none">
          <div className={`absolute bottom-0 right-0 flex flex-col overflow-hidden border-l border-t border-white/15 bg-[#0c1527]/95 shadow-2xl backdrop-blur-md transition-all duration-300 pointer-events-auto ${
            fs ? "inset-0" : "max-h-[80vh] w-full sm:w-[420px] sm:rounded-tl-3xl"
          }`}>
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
              <div className="flex items-center gap-2">
                <ThunderboltOutlined className="text-cyan-400" />
                <span className="text-sm font-semibold text-white">Подбор кондиционера</span>
              </div>
              <div className="flex items-center gap-1">
                <button type="button" onClick={() => setFs(!fs)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
                  aria-label={fs ? "Свернуть" : "Развернуть"}>
                  {fs ? <ShrinkOutlined /> : <ExpandOutlined />}
                </button>
                <button type="button" onClick={close}
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-white/10 hover:text-white"
                  aria-label="Закрыть">
                  <CloseOutlined />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-4 py-4">
              {step === "rooms" && (
                <div>
                  <Header n={1} total={5} title="Сколько комнат охлаждаем?" sub="От этого зависит тип системы" />
                  <div className="grid grid-cols-1 gap-2">
                    {ROOMS.map((o) => <Btn key={o.value} label={o.label} desc={o.desc} onClick={() => { setRooms(o.value); setStep("area"); }} />)}
                  </div>
                </div>
              )}

              {step === "area" && (
                <div>
                  <Header n={2} total={5} title="Какая площадь (примерно)?" sub="Подберём нужную мощность" />
                  <div className="grid grid-cols-1 gap-2">
                    {AREAS.map((o) => <Btn key={o.value} label={o.label} desc={o.desc} onClick={() => { setArea(o.value); setStep("silence"); }} />)}
                  </div>
                </div>
              )}

              {step === "silence" && (
                <div>
                  <Header n={3} total={5} title="Где вешаем кондиционер?" sub="Важна ли тишина?" />
                  <div className="grid grid-cols-1 gap-2">
                    {SILENCE.map((o) => <Btn key={o.value} label={o.label} desc={o.desc} onClick={() => { setSilence(o.value); setStep("winter"); }} />)}
                  </div>
                </div>
              )}

              {step === "winter" && (
                <div>
                  <Header n={4} total={5} title="Будем греться зимой?" sub="Нужен ли обогрев" />
                  <div className="grid grid-cols-1 gap-2">
                    {WINTER.map((o) => <Btn key={o.value} label={o.label} desc={o.desc} onClick={() => { setWinter(o.value); setStep("budget"); }} />)}
                  </div>
                </div>
              )}

              {step === "budget" && (
                <div>
                  <Header n={5} total={5} title="Какой бюджет в приоритете?" sub="Подберём по цене и качеству" />
                  <div className="grid grid-cols-1 gap-2">
                    {BUDGET.map((o) => (
                      <Btn key={o.value} label={o.label} desc={o.desc} onClick={() => {
                        setBudget(o.value);
                        setResults(filterProducts(rooms!, area!, silence!, winter!, o.value));
                        setStep("results");
                      }} />
                    ))}
                  </div>
                </div>
              )}

              {step === "results" && (
                <div>
                  <Header n={5} total={5} title="Идеальные варианты для вас" sub={`Подобрали ${results.length} ${results.length === 1 ? "модель" : "моделей"}`} />
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {results.map((p) => <Card key={p.id} p={p} />)}
                  </div>
                  <div className="mt-6 text-center">
                    <button type="button" onClick={reset}
                      className="rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/10 hover:text-white">
                      Начать заново
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
