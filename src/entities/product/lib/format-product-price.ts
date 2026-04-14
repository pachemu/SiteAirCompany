const rubFormatter = new Intl.NumberFormat("ru-RU", {
  style: "currency",
  currency: "RUB",
  maximumFractionDigits: 0,
});

export function formatProductPrice(price: number | string) {
  const numericPrice =
    typeof price === "string" ? Number(price.replace(/[^0-9.-]+/g, "")) : price;

  return rubFormatter.format(Number.isFinite(numericPrice) ? numericPrice : 0);
}
