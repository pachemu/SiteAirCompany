import { domainToASCII } from "node:url";

const FALLBACK_UNICODE_DOMAIN = "кондиционеры-в-крыму.рф";
const DEFAULT_PROTOCOL = "https";
const configuredHost = process.env.NEXT_PUBLIC_SITE_HOST?.trim();

export const SITE_HOST = domainToASCII(
  configuredHost && configuredHost.length > 0
    ? configuredHost
    : FALLBACK_UNICODE_DOMAIN,
);

export const SITE_URL = new URL(
  `${DEFAULT_PROTOCOL}://${SITE_HOST || "xn----btbho0a0b6b.xn--p1ai"}`,
);

export const SITE_NAME = "Ионин Кондиционер";
export const SITE_TITLE = "Кондиционеры в Крыму — Продажа и Установка";
export const SITE_DESCRIPTION =
  "Продажа, монтаж и установка кондиционеров в Симферополе и по всему Крыму. Подбор модели, монтаж под ключ и официальная гарантия на оборудование и работы.";
