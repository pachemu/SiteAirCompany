import type { Product } from "@/entities/product/model/types";
import { formatProductPrice } from "@/entities/product/lib/format-product-price";
import { ProductDescription } from "@/entities/product/ui/product-description";
import { ProductMainHeader } from "@/entities/product/ui/product-main-header";
import { ProductGallery } from "@/entities/product/ui/product-gallery";
import { ProductSpecs } from "@/entities/product/ui/product-specs";
import { ProductActionButtons } from "@/features/product-actions/ui/product-action-buttons";
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  SafetyCertificateOutlined,
  ToolOutlined,
} from "@ant-design/icons";

interface ProductDetailsWidgetProps {
  product: Product;
}

function hasPrice(price: Product["price"]) {
  const numeric =
    typeof price === "number"
      ? price
      : Number(String(price).replace(/[^0-9.-]+/g, ""));

  return Number.isFinite(numeric) && numeric > 0;
}

export function ProductDetailsWidget({ product }: ProductDetailsWidgetProps) {
  const rawImageUrl = product.imageUrl || "";
  const images = rawImageUrl
    .split(",")
    .map((url) => url.trim())
    .filter(
      (url) =>
        url.length > 0 && (url.startsWith("http") || url.startsWith("/")),
    );

  return (
    <div className="bg-[#f8fafc] py-8 pb-16 text-[#0c1527] md:py-12 md:pb-24">
      <div className="mx-auto w-full max-w-6xl px-4 md:px-6 xl:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start lg:gap-10 xl:gap-12">
          <div className="lg:col-span-6 xl:col-span-7 lg:sticky lg:top-24 lg:h-[calc(100vh-7rem)]">
            <ProductGallery images={images} />
          </div>
          <div className="flex w-full min-w-0 flex-col gap-5 lg:col-span-6 xl:col-span-5">
            <div className="inline-flex w-fit items-center gap-1.5 rounded-full bg-[#0891b2]/10 px-3 py-1 text-xs font-bold text-[#0891b2]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e]" />
              В наличии
            </div>

            <ProductMainHeader product={product} />

            <div className="rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-sm">
              <div className="mb-1 text-xs font-bold uppercase tracking-wider text-[#64748b]">
                Цена с установкой
              </div>
              <div className="text-3xl font-extrabold leading-tight text-[#0c1527]">
                {hasPrice(product.price)
                  ? formatProductPrice(product.price)
                  : "Цена по запросу"}
              </div>
              <p className="mt-1 text-xs text-[#64748b]">
                Монтаж, доставка и пусконаладка включены
              </p>
            </div>

            <ProductActionButtons />

            <ProductDescription product={product} />

            <div className="rounded-2xl border border-[#e2e8f0] bg-white p-6 shadow-sm">
              <h3 className="m-0 mb-4 text-base font-bold text-[#0c1527]">
                Как проходит установка
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0891b2]/10">
                    <span className="text-sm font-bold text-[#0891b2]">1</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#0c1527]">Заявка и консультация</div>
                    <div className="text-xs text-[#64748b]">Вы оставляете заявку, мы перезвоним и подберём модель</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0891b2]/10">
                    <span className="text-sm font-bold text-[#0891b2]">2</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#0c1527]">Замер и расчёт</div>
                    <div className="text-xs text-[#64748b]">Бесплатный выезд, замер помещения, расчёт стоимости</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0891b2]/10">
                    <span className="text-sm font-bold text-[#0891b2]">3</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#0c1527]">Доставка и монтаж</div>
                    <div className="text-xs text-[#64748b]">Доставляем оборудование и устанавливаем за 2-3 часа</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0891b2]/10">
                    <span className="text-sm font-bold text-[#0891b2]">4</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#0c1527]">Пусконаладка и гарантия</div>
                    <div className="text-xs text-[#64748b]">Проверяем работу, убираем за собой, выдаём гарантию 3 года</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2.5 rounded-xl border border-[#e2e8f0] bg-white p-3 shadow-sm">
                <ToolOutlined className="text-[#0891b2]" />
                <div>
                  <div className="text-xs font-semibold text-[#0c1527]">Монтаж за 1 день</div>
                  <div className="text-[10px] text-[#64748b]">2-3 часа</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5 rounded-xl border border-[#e2e8f0] bg-white p-3 shadow-sm">
                <SafetyCertificateOutlined className="text-[#0891b2]" />
                <div>
                  <div className="text-xs font-semibold text-[#0c1527]">Чистая работа</div>
                  <div className="text-[10px] text-[#64748b]">С пылесосом</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5 rounded-xl border border-[#e2e8f0] bg-white p-3 shadow-sm">
                <CheckCircleOutlined className="text-[#22c55e]" />
                <div>
                  <div className="text-xs font-semibold text-[#0c1527]">Гарантия 3 года</div>
                  <div className="text-[10px] text-[#64748b]">Официальная</div>
                </div>
              </div>
              <div className="flex items-center gap-2.5 rounded-xl border border-[#e2e8f0] bg-white p-3 shadow-sm">
                <ClockCircleOutlined className="text-[#0891b2]" />
                <div>
                  <div className="text-xs font-semibold text-[#0c1527]">Выезд бесплатно</div>
                  <div className="text-[10px] text-[#64748b]">По Крыму</div>
                </div>
              </div>
            </div>

            <ProductSpecs product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}
