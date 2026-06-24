"use client";

import { useState } from "react";
import {
  CATALOG_SORT_POWER_OPTIONS,
  CATALOG_SORT_PRICE_OPTIONS,
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
  const [featuresExpanded, setFeaturesExpanded] = useState(false);
  const onChangeSelect = (event: string) => {
    onAreaChange(event);
  };

  const priceSortValue = CATALOG_SORT_PRICE_OPTIONS.some(
    (option) => option.value === filters.sort,
  )
    ? filters.sort
    : "default";
  const powerSortValue = CATALOG_SORT_POWER_OPTIONS.some(
    (option) => option.value === filters.sort,
  )
    ? filters.sort
    : "default";

  return (
    <section className="rounded-[2rem] border border-[#CBD5E1] bg-[#E2E8F0]/80 p-5 text-[#0F172A] shadow-sm backdrop-blur md:p-6">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium text-[#475569]">
              Найдено {resultCount} из {totalCount} моделей
            </p>
            <h2 className="text-2xl font-semibold tracking-tight">
              Подберите кондиционер под свои нужды
            </h2>
          </div>

          <div className="flex items-center gap-3">
            {isPending ? (
              <span className="text-sm text-[#475569]">
                Обновляем каталог...
              </span>
            ) : null}
          </div>
        </div>

        <div className="grid gap-4 xl:grid-cols-[minmax(0,2fr)_repeat(3,minmax(220px,1fr))]">
          <label className="flex flex-col gap-2 text-sm font-medium">
            Поиск по названию и модели
            <Select
              showSearch={{ filterOption: false, onSearch: onSearchChange }}
              value={searchValue || undefined}
              placeholder="HEC, Multi, Haier..."
              defaultActiveFirstOption={false}
              suffixIcon={null}
              onChange={(value) => onSearchChange(value)}
              notFoundContent={null}
              className="h-13 rounded-2xl border border-[#CBD5E1] bg-[#F8FAFC] px-2"
              allowClear
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-medium">
            Тип кондиционера
            <Select
              placeholder="Стандарт"
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
            Сортировка по мощности
            <Select
              size="large"
              className="h-13 w-full"
              style={{ borderRadius: "1rem" }}
              value={powerSortValue}
              onChange={(value) =>
                onSortChange(value as CatalogFilters["sort"])
              }
              options={CATALOG_SORT_POWER_OPTIONS.map((opt) => ({
                label: opt.label,
                value: opt.value,
              }))}
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-medium">
            Сортировка по цене
            <Select
              size="large"
              className="h-13 w-full"
              style={{ borderRadius: "1rem" }}
              value={priceSortValue}
              onChange={(value) =>
                onSortChange(value as CatalogFilters["sort"])
              }
              options={CATALOG_SORT_PRICE_OPTIONS.map((opt) => ({
                label: opt.label,
                value: opt.value,
              }))}
            />
          </label>
        </div>

        <div className="space-y-3 p-2">
          <p className="text-sm font-medium pb-3">Фильтрация по функциям</p>

          <div className="flex flex-wrap gap-2">
            {filteredFeatures.slice(0, 1).map((feature) => {
              const isActive = filters.features.includes(feature);
              return (
                <Button
                  key={feature}
                  type={isActive ? "primary" : "default"}
                  onClick={() => onFeatureToggle(feature)}
                  className={isActive ? "bg-[#38BDF8] text-[#0F172A]" : "bg-[#F8FAFC] text-[#0F172A] hover:!border-[#38BDF8] hover:!text-[#0284C7]"}
                >
                  {feature}
                </Button>
              );
            })}
            {filteredFeatures.length > 1 && (
              <div className={featuresExpanded ? "contents" : "hidden md:contents"}>
                {filteredFeatures.slice(1).map((feature) => {
                  const isActive = filters.features.includes(feature);
                  return (
                    <Button
                      key={feature}
                      type={isActive ? "primary" : "default"}
                      onClick={() => onFeatureToggle(feature)}
                      className={isActive ? "bg-[#38BDF8] text-[#0F172A]" : "bg-[#F8FAFC] text-[#0F172A] hover:!border-[#38BDF8] hover:!text-[#0284C7]"}
                    >
                      {feature}
                    </Button>
                  );
                })}
              </div>
            )}
            {!featuresExpanded && filteredFeatures.length > 1 && (
              <div className="md:hidden">
                <Button
                  type="default"
                  onClick={() => setFeaturesExpanded(true)}
                  className="bg-[#F8FAFC] text-[#475569] hover:!border-[#38BDF8] hover:!text-[#0284C7]"
                >
                  Показать все ({filteredFeatures.length - 1})
                </Button>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end border-t border-[#CBD5E1]/50 pt-4">
          <Button variant="outlined" onClick={onReset}>
            Сбросить фильтры
          </Button>
        </div>
      </div>
    </section>
  );
}
