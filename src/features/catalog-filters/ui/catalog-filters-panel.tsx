import {
  CATALOG_SORT_OPTIONS,
  type CatalogFilterOptions,
  type CatalogFilters,
} from "../model/types";
import { Button, Select } from "antd";

type CatalogFiltersPanelProps = {
  filters: CatalogFilters;
  searchValue: string;
  options: CatalogFilterOptions;
  resultCount: number;
  totalCount: number;
  isPending: boolean;
  onSearchChange: (value: string) => void;
  onAreaChange: (value: string) => void;
  onSortChange: (value: CatalogFilters["sort"]) => void;
  onFeatureToggle: (feature: string) => void;
  onReset: () => void;
};
const FEATURES = [
  "Wi-Fi управление",
  "УФ-лампа (стерилизация)",
  "Стерилизация Steri Clean 56°C",
  "Датчик присутствия Eco-sensor",
  "Ионизатор воздуха",
  "Супертихий режим",
  "Обогрев при низких температурах",
  "Функция I FEEL",
  "3D воздушный поток",
  "Самоочистка Self Clean",
  "Фреон R32",
  "IFD фильтр (проф. очистка)",
];
export function CatalogFiltersPanel({
  filters,
  searchValue,
  options,
  resultCount,
  totalCount,
  isPending,
  onSearchChange,
  onAreaChange,
  onSortChange,
  onFeatureToggle,
  onReset,
}: CatalogFiltersPanelProps) {
  const filteredFeatures = options.features.filter((feature) =>
    FEATURES.includes(feature),
  );
  const visibleFeatureCount = 8;
  const visibleFeatures = filteredFeatures.slice(0, visibleFeatureCount);
  const hiddenFeatures = filteredFeatures.slice(visibleFeatureCount);
  const onChangeSelect = (event: string) => {
    onAreaChange(event);
  };
  return (
    <section className="rounded-[2rem] border bg-card/80 p-5 shadow-sm backdrop-blur md:p-6">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">
              Найдено {resultCount} из {totalCount} моделей
            </p>
            <h2 className="text-2xl font-semibold tracking-tight">
              Подберите кондиционер под свою площадь
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {isPending ? (
              <span className="text-sm text-muted-foreground">
                Обновляем каталог...
              </span>
            ) : null}

            <Button variant="outlined" onClick={onReset}>
              Сбросить
            </Button>
          </div>
        </div>

        <div className="grid gap-4 xl:grid-cols-[minmax(0,2fr)_minmax(220px,1fr)_minmax(220px,1fr)]">
          <label className="flex flex-col gap-2 text-sm font-medium">
            Поиск по названию и функциям
            <Select
              showSearch={{ filterOption: false, onSearch: onSearchChange }}
              value={searchValue || undefined}
              placeholder="HEC, Multi, Haier..."
              defaultActiveFirstOption={false}
              suffixIcon={null}
              onChange={(value) => onSearchChange(value)}
              notFoundContent={null}
              className="h-13 rounded-2xl border bg-background px-2"
              allowClear
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium">
            Площадь помещения
            <Select
              placeholder="Любая площадь"
              size="large"
              className="h-13 w-full"
              style={{ borderRadius: "1rem" }}
              onChange={onChangeSelect}
              options={[
                { label: "Любая площадь", value: "" },
                ...options.areas.map((area) => ({
                  label: area,
                  value: area,
                })),
              ]}
              value={filters.area || undefined}
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium">
            Сортировка по цене
            <Select
              size="large"
              className="h-13 w-full"
              style={{ borderRadius: "1rem" }}
              value={filters.sort}
              onChange={(value) =>
                onSortChange(value as CatalogFilters["sort"])
              }
              options={CATALOG_SORT_OPTIONS.map((opt) => ({
                label: opt.label,
                value: opt.value,
              }))}
            />
          </label>
        </div>

        <div className="space-y-3">
          <p className="text-sm font-medium">Фильтрация по функциям</p>

          <div className="flex flex-wrap gap-2">
            {visibleFeatures.map((feature) => {
              const isActive = filters.features.includes(feature);

              return (
                <Button
                  key={feature}
                  type={isActive ? "primary" : "default"}
                  onClick={() => onFeatureToggle(feature)}
                  className="bg-lightgray"
                >
                  {feature}
                </Button>
              );
            })}

            {hiddenFeatures.length > 0 ? (
              <details className="relative">
                <summary className="flex content-center h-8 items-center rounded-2xl border bg-background px-4 text-sm font-medium shadow-sm cursor-pointer list-none marker:hidden outline-none transition focus-visible:ring-2 focus-visible:ring-ring">
                  Ещё {hiddenFeatures.length}
                </summary>
                <div className="mt-2 rounded-3xl border bg-card p-4 shadow-sm">
                  <div className="flex flex-wrap gap-2">
                    {hiddenFeatures.map((feature) => {
                      const isActive = filters.features.includes(feature);

                      return (
                        <Button
                          key={feature}
                          type={isActive ? "primary" : "default"}
                          onClick={() => onFeatureToggle(feature)}
                        >
                          {feature}
                        </Button>
                      );
                    })}
                  </div>
                </div>
              </details>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
