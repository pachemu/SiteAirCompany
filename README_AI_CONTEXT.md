# README_AI_CONTEXT.md — Единый источник правды для ИИ-агентов

> Этот файл предназначен для любых ИИ-агентов, работающих с проектом.
> Он содержит всю ключевую информацию о сайте, стеке, данных, дизайне и архитектуре.

---

## 1. Описание бизнеса

**Название:** Кондиционеры в Крыму
**Домен:** кондиционеры-в-крыму.рф (кириллический IDN)
**Направление:** Продажа и профессиональная установка кондиционеров в Симферополе и Крыму.
**Владелец:** ИП Ионин Алексей Иванович
**Телефон:** +7 (978) 839-02-72
**Telegram:** https://t.me/+79788390272
**Email:** alexeyivanych182@mail.ru

**Услуги:**

- Продажа кондиционеров (Haier, HEC)
- Монтаж и пусконаладка за 1 день (2-3 часа)
- Гарантие на оборудование
- Обслуживание по всему Крыму (82 и 92 регион)

---

## 2. Технический стек

| Компонент               | Технология                   | Версия             |
| ----------------------- | ---------------------------- | ------------------ |
| Фреймворк               | Next.js (App Router)         | 16.2.3             |
| Сборка                  | Turbopack                    | встроена в Next.js |
| Стили                   | Tailwind CSS                 | 4.2.4              |
| UI-компоненты           | Ant Design (antd)            | 6.3.5              |
| Шрифт                   | Inter                        | через CSS          |
| Кэширование (локальное) | better-sqlite3               | 11.10.0            |
| Валидация               | Zod                          | 4.3.6              |
| ORM (ОТКЛЮЧЕНА)         | Drizzle                      | 0.45.2             |
| БД (ОТКЛЮЧЕНА)          | PostgreSQL (Supabase Pooler) | -                  |

### Статус базы данных

**Внешняя БД Supabase ПОЛНОСТЬЮ ОТКЛЮЧЕНА.** Проект работает как полностью автономная статическая сборка (SSG/ISR). Все данные о товарах хранятся локально в JSON-файле. Никаких запросов к внешней БД при сборке или рендеринге НЕ происходит.

---

## 3. Структура данных и каталога товаров

### Где лежат данные

Единственный источник правды для каталога товаров:

```
src/entities/product/model/products.data.json
```

Этот JSON-массив содержит **167 реальных товаров** (кондиционеры), извлечённых из ранее существовавшей БД Supabase.

**API-функции, которые читают эти данные:**

- `src/entities/product/api/get-products.ts` — возвращает все 167 товаров
- `src/entities/product/api/get-product-by-id.ts` — ищет товар по UUID

### Схема товара (Product)

```typescript
type Product = {
  id: string; // UUID
  category: string; // Категория (Стандарт, Бизнес, Премиум, Кассетный, Канальный, Консольные, Мультисплит, Универсальный)
  brand: string; // Бренд (Haier, HEC)
  series: string; // Серия (QUANTUM, CORAL, FLEXIS, Spirit, etc.)
  model: string; // Модель
  power: string; // Мощность (холод/тепло), формат "x, y / z, w"
  energyClass: string; // Класс энергоэффективности (A, A++, A+++, etc.)
  price: number; // Цена в рублях
  features: string[]; // Список особенностей
  imageUrl: string; // Путь(я) к картинке(м), разделённые запятой
  description: string | null; // Описание товара
  createdAt: string; // ISO дата создания
  name: string; // Отображаемое имя = "brand series model"
  area: string; // Площадь/категория (совпадает с category)
};
```

### Категории товаров (9 штук)

| Категория              | Описание                                      |
| ---------------------- | --------------------------------------------- |
| Стандарт               | Настенные сплит-системы базового уровня       |
| Бизнес                 | Улучшенные настенные модели                   |
| Премиум                | Флагманские модели с расширенным функционалом |
| Кассетный однопоточный | Кассетные внутренние блоки для мультисплит    |
| Кассетный 4-х поточный | Кассетные блоки с 4 направлениями потока      |
| Канальный              | Канальные блоки для скрытой системы           |
| Консольные             | Напольно-потолочные блоки                     |
| Мультисплит            | Внутренние блоки для мультисплит-систем       |
| Универсальный          | Универсальные блоки                           |

### Диапазон цен

- Минимум: **14 700 руб.** (HEC 2U Multi внутренний блок)
- Максимум: **262 700 руб.** (Haier 5U125S2SN1FA, 5 портов)

---

## 4. Где лежат картинки

Все изображения кондиционеров находятся локально:

```
public/images/products/
├── conditioner_air.png              # Фоновая картинка для Hero-секции
└── product-images/
    ├── HEC/                         # 8 файлов — кондиционеры HEC
    │   ├── HEC-2U-INVERTER-DC-WHITE-INCLINE.png
    │   ├── HEC-2U-MULTI-BLACK.png
    │   ├── HEC-2U-MULTI-WHITE.png
    │   ├── HEC-2U-ON-OFF-WHITE-INCLINE.png
    │   ├── HEC-2U-STANDART-BLACK-INCLINE.png
    │   ├── HEC-2U-STANDART-BLACKpng.png
    │   ├── HEC-2U-STANDART-WHITE-INCLINE.png
    │   └── HEC-2U-STANDART-WHITE.png
    ├── Multi/                       # 17 файлов — внутренние блоки мультисплит
    │   ├── MULTI-CANAL-30PA.png
    │   ├── MULTI-CANAL-50PA.jpg
    │   ├── MULTI-CASSETE-1-FLOW.png
    │   ├── MULTI-CASSETE-4-FLOW-CLOSED.png
    │   ├── MULTI-CASSETE-4-FLOW-OPEN.png
    │   ├── MULTI-CONSOLE.png
    │   ├── MULTI-CORAL-M-WHITE.png
    │   ├── MULTI-FLEXSIS-SM-BLACK.png
    │   ├── MULTI-FLEXSIS-SM-GOLD.png
    │   ├── MULTI-FLEXSIS-SM-WHITE.png
    │   ├── MULTI-HAIER.jpg
    │   ├── MULTI-JADE-SM-GOLD.png
    │   ├── MULTI-JADE-SM-SILVERpng.png
    │   ├── MULTI-JADE-SM-WHITE.png
    │   ├── MULTI-LEADER-M-WHITE.png
    │   ├── MULTI-SPIRIT-M-WHITE.png
    │   └── MULTI-UNIVERSAL.png
    ├── RAC2025/                     # 9 файлов — настенные сплит-системы 2025
    │   ├── RAC-CORAL-DC-WHITE.png
    │   ├── RAC-CORAL-EXPERT-WHITE.png
    │   ├── RAC-CORAL-ON-OFF-WHITE.png
    │   ├── RAC-FLEXIS-1-INVERTER-WHITE.png
    │   ├── RAC-LIGHTERA-DC-INVERTER-BLACK.png
    │   ├── RAC-LIGHTERA-DC-INVERTER-PINK.jpg
    │   ├── RAC-LIGHTERA-DC-INVERTER-WHITE.png
    │   ├── RAC-TUNDRA-DC-WHITE.png
    │   └── RAC-TUNDRA-ON-OFF-WHITE.png
    └── RAC2026/                     # 16 файлов — настенные сплит-системы 2026
        ├── RAC-CORAL-HI-CAPACITY-WHITE.png
        ├── RAC-FLEXIS-ON-OFF-BLACK.png
        ├── RAC-FLEXIS-ON-OFF-GOLD.jpg
        ├── RAC-FLEXIS-ON-OFF-WHITE.png
        ├── RAC-FLEXIS-SM-BLACK.png
        ├── RAC-FLEXIS-SM-GOLD.png
        ├── RAC-FLEXIS-SM-WHITE.png
        ├── RAC-JADE-SM-GOLDpng.png
        ├── RAC-JADE-SM-SILVER.png
        ├── RAC-JADE-SM-WHITE.png
        ├── RAC-QUANTUM-BLACK.png
        ├── RAC-QUANTUM-WHITE.png
        ├── RAC-SPIRIT-DC-WHITE.png
        ├── RAC-STELLAR-HP-GOLD.png
        ├── RAC-STELLAR-HP-SILVER.png
        └── RAC-STELLAR-HP-WHITE.png
```

**Формат путей в данных:** `/images/products/product-images/{подпапка}/{файл}.png`
Пути в `products.data.json` уже приведены к локальному виду (от корня `public/`).

---

## 5. Правила дизайн-системы (UI/UX)

### Цветовая палитра

**Основной акцентный цвет — СИНИЙ.**

| Роль                           | HEX       | Tailwind класс     |
| ------------------------------ | --------- | ------------------ |
| Primary (основной)             | `#2563eb` | `bg-blue-600`      |
| Primary hover                  | `#1d4ed8` | `bg-blue-700`      |
| Brand/акцент (шапка, карточки) | `#0891b2` | `text-[#0891b2]`   |
| Фон страницы                   | `#ffffff` | `bg-white`         |
| Текст основной                 | `#0c1527` | `text-[#0c1527]`   |
| Текст вторичный                | `#64748b` | `text-[#64748b]`   |
| Границы                        | `#e2e8f0` | `border-[#e2e8f0]` |
| Карточки/ховер фон             | `#f1f5f9` | `bg-[#f1f5f9]`     |
| Успех (зелёный чек)            | `#22c55e` | `text-[#22c55e]`   |

### CSS-переменные (globals.css)

```css
--accent: #2563eb; /* Синий акцент */
--primary: #0891b2; /* Брендовый бирюзовый */
--ring: #0891b2; /* Фокусные кольца */
```

### Анти-паттерны (ЧЕГО НЕ ДЕЛАТЬ)

// Придумать надо мб, игнорируй

### Стиль

- **Климатический минимализм** — много воздуха (отступов), чистые линии
- Белые карточки товаров с мягкими тенями и скруглёнными углами (`rounded-2xl`, `rounded-3xl`)
- Градиенты: Hero-секция использует `from-[#0c1527] via-[#0e3a5e] to-[#0891b2]`
- Кнопки: скруглённые `!rounded-xl`, жирный текст `!font-semibold`, мягкие тени
- Шрифт: Inter, заголовки жирные (`font-bold`, `font-extrabold`)
- Ант-дизайн: Ant Design кнопки стилизуются через `!important` в globals.css

### Типографика

- Заголовки: `text-3xl font-extrabold` (hero), `text-2xl font-semibold` (страницы), `text-base font-bold` (карточки)
- Описание: `text-sm text-[#64748b]` (вторичный текст)
- Цена: `text-3xl font-extrabold` (детали), `text-xl font-extrabold` (карточки)

---

## 6. Структура папок проекта

```
siteaircompany/
├── public/
│   └── images/products/          # Все изображения товаров
├── src/
│   ├── app/                      # Next.js App Router (страницы)
│   │   ├── layout.tsx            # Корневой layout
│   │   ├── page.tsx              # Главная страница (/)
│   │   ├── globals.css           # Глобальные стили + Ant Design оверрайды
│   │   ├── catalog/
│   │   │   ├── page.tsx          # Каталог (/catalog) — серверный компонент
│   │   │   └── [id]/
│   │   │       └── page.tsx      # Детали товара (/catalog/[id]) — серверный
│   │   ├── error.tsx             # Страница ошибки
│   │   ├── global-error.tsx      # Глобальная ошибка
│   │   ├── loading.tsx           # Состояние загрузки
│   │   ├── not-found.tsx         # 404
│   │   ├── sitemap.ts            # Генерация sitemap.xml
│   │   ├── sitemap.txt/
│   │   │   └── route.ts          # Текстовый sitemap
│   │   ├── robots.ts             # robots.txt
│   │   ├── opengraph-image.tsx   # OG изображение
│   │   └── twitter-image.tsx     # Twitter изображение
│   ├── entities/
│   │   └── product/
│   │       ├── api/
│   │       │   ├── index.ts      # Barrel export
│   │       │   ├── get-products.ts       # getProducts() — читает products.data.json
│   │       │   └── get-product-by-id.ts  # getProductById(id) — ищет по UUID
│   │       ├── model/
│   │       │   ├── types.ts              # Тип Product
│   │       │   ├── products.data.json    # ★ ГЛАВНЫЙ ФАЙЛ ДАННЫХ (167 товаров)
│   │       │   ├── products.mock.ts      # Старый мок (4 товара) — НЕ используется
│   │       │   └── product-row.schema.ts # Zod-схема (осталась от БД)
│   │       ├── ui/
│   │       │   ├── product-card.tsx       # Карточка товара в каталоге
│   │       │   ├── product-gallery.tsx    # Галерея изображений (use client)
│   │       │   ├── product-main-header.tsx
│   │       │   ├── product-description.tsx
│   │       │   └── product-specs.tsx      # Таблица характеристик
│   │       ├── lib/
│   │       │   └── format-product-price.ts # Форматирование цены "78 600 ₽"
│   │       └── index.ts            # Barrel export
│   ├── features/
│   │   ├── catalog-filters/
│   │   │   └── model/
│   │   │       ├── types.ts              # CatalogSort, CatalogFilters
│   │   │       └── catalog-filters.ts    # Фильтрация и сортировка на клиенте
│   │   └── product-actions/
│   │       └── ui/
│   │           └── product-action-buttons.tsx  # Кнопки "Купить" и "Позвонить"
│   ├── widgets/
│   │   ├── catalog-showcase/
│   │   │   └── ui/
│   │   │       ├── catalog-showcase.tsx  # Обёртка каталога (use client)
│   │   │       └── catalog-grid.tsx      # Сетка карточек
│   │   ├── header/
│   │   │   └── header.tsx                # Шапка сайта (use client)
│   │   ├── footer/
│   │   │   └── footer.tsx                # Подвал сайта
│   │   ├── home/
│   │   │   ├── hero/
│   │   │   │   └── ui/hero.tsx           # Hero-секция главной (use client)
│   │   │   ├── category-grid/
│   │   │   ├── contact-cta/
│   │   │   └── benefits/
│   │   ├── product-details/
│   │   │   └── ui/
│   │   │       └── product-details-widget.tsx  # Детали товара (use client)
│   │   └── metrica/
│   │       └── metrica.tsx               # Яндекс.Метрика
│   ├── shared/
│   │   ├── config/
│   │   │   ├── contacts.ts       # Телефон, Telegram, Email
│   │   │   └── site.ts           # SITE_URL
│   │   ├── lib/
│   │   │   └── image-placeholder.ts  # BLUR_DATA_URL для Image
│   │   └── ui/                   # Общие UI-компоненты
│   ├── components/
│   │   └── ui/                   # shadcn/ui компоненты
│   ├── lib/
│   │   └── sqlite-cache.ts       # Локальный кэш (better-sqlite3)
│   ├── api/
│   │   └── db/
│   │       └── schema.ts         # Drizzle-схема (ОСТАЛАСЬ ОТ БД, не используется)
│   ├── types/                    # Глобальные типы
│   └── index.ts
├── api/
│   └── db/
│       └── schema.ts             # Drizzle-схема productsTable (ОСТАЛАСЬ ОТ БД)
├── drizzle/                      # SQL-миграции (ОСТАЛИСЬ ОТ БД)
├── scripts/
│   ├── download-images.js        # Скрипт скачивания картинок из Supabase (ОТКЛЮЧЁН)
│   └── extract-products.js       # Скрипт извлечения данных из out/catalog.txt
├── .env                          # DATABASE_URL (ОТКЛЮЧЁНА)
├── .env.local                    # DATABASE_URL (ОТКЛЮЧЁНА)
├── next.config.ts                # Конфигурация Next.js
├── drizzle.config.ts             # Конфиг Drizzle (НЕ используется)
├── tailwind.config.ts            # Если есть
├── components.json               # Конфиг shadcn/ui
└── package.json
```

---

## 7. Поток данных

### Каталог (/catalog)

```
catalog/page.tsx (серверный)
  └── getProducts() → читает products.data.json
      └── <CatalogShowcase products={products} /> (клиентский)
          ├── Фильтрация по категории, строке поиска, характеристикам
          ├── Сортировка (цена ↑↓, мощность ↑↓)
          ├── Пагинация (20 на страницу)
          └── <CatalogGrid> → <ProductCard /> (карточки)
```

### Детали товара (/catalog/[id])

```
catalog/[id]/page.tsx (серверный)
  └── getProductById(id) → ищет в products.data.json
      └── <ProductDetailsWidget product={product} /> (клиентский)
          ├── ProductGallery (галерея картинок)
          ├── ProductMainHeader (бренд, серия, модель)
          ├── Цена + "Купить с установкой" → Telegram
          ├── ProductDescription (описание)
          └── ProductSpecs (характеристики через Ant Design Descriptions)
```

### Семантика фронтенда (Feature-Sliced Design)

```
app/          → Страницы и роутинг (Next.js App Router)
entities/     → Бизнес-сущности (Product)
features/     → Пользовательские действия (фильтры каталога, кнопки покупки)
widgets/      → Составные блоки UI (шапка, каталог, детали товара, hero)
shared/       → Конфиги, утилиты, общие компоненты
```

---

## 8. Контакты

```typescript
// src/shared/config/contacts.ts
export const PHONE_E164 = "+79788390272";
export const PHONE_HUMAN = "+7 (978) 839-02-72";
export const TELEGRAM_LINK = "https://t.me/+79788390272";
export const EMAIL = "alexeyivanych182@mail.ru";
```

---

## 9. Важные замечания для ИИ

1. **НЕ ТРОГАЙ `products.data.json` без необходимости** — это единственный источник данных каталога.
2. **НЕ создавай файлы в `public/images/`** — изображения уже скачаны и расположены.
3. **НЕ подключай Supabase/PostgreSQL обратно** — БД отключена, проект автономен.
4. **Все компоненты с `"use client"`** помечены явно — не рендерить их на сервере как серверные.
5. **Стиль Ant Design** переопределяется через CSS в `globals.css` — кнопки `ant-btn-primary` покрашены в синий.
6. **Фильтрация каталога** происходит на клиенте — сервер отдаёт ВСЕ товары, клиент фильтрует.
7. **Форма цены:** число → `formatProductPrice()` → строка вида `"78 600 ₽"`.
8. **Домен** использует кириллический IDN: `кондиционеры-в-крыму.рф`
