import type { Metadata } from "next";

import "antd/dist/reset.css";

import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";

import "./globals.css";
import { Metrica } from "@/widgets/metrica/metrica";

export const metadata: Metadata = {
  metadataBase: new URL("https://кондиционеры-в-крыму.рф"),
  title: {
    default: "Купить кондиционер в Симферополе | Кондиционеры в Крыму",
    template: "%s | Кондиционеры Симферополь",
  },
  description:
    "Купить кондиционер в Симферополе по выгодным ценам. Широкий выбор кондиционеров в Крыму. Установка кондиционеров в Симферополе и Крыму.",
  keywords: [
    "купить кондиционер",
    "цена",
    "купить в симферополе",
    "купить в крыму",
    "кондиционеры симферополь",
    "кондиционеры в крыму",
    "установка кондиционера",
    "установка в симферополе",
  ],
  authors: [{ name: "ИП Ионин Алексей Иванович" }],
  creator: "Ионин Алексей Иванович",
  publisher: "Кондиционеры в Крыму ИП Ионин Алексей Иванович",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Купить кондиционер в Симферополе | Кондиционеры в Крыму",
    description:
      "Купить кондиционер в Симферополе по выгодным ценам. Широкий выбор кондиционеров в Крыму. Установка кондиционеров в Симферополе и Крыму.",
    url: "https://кондиционеры-в-крыму.рф",
    siteName: "Кониционеры симферополь",
    images: [
      {
        url: "/images/products/conditioner_air.png",
        width: 1200,
        height: 630,
        alt: "Кондиционеры в Симферополе",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Купить кондиционер в Симферополе | Кондиционеры в Крыму",
    description:
      "Купить кондиционер в Симферополе по выгодным ценам. Широкий выбор кондиционеров в Крыму.",
    images: ["/images/products/conditioner_air.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://кондиционеры-в-крыму.рф",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Кондиционеры в Крыму",
    image:
      "https://кондиционеры-в-крыму.рф/images/products/conditioner_air.png",
    description:
      "Продажа и профессиональная установка кондиционеров в Симферополе и Крыму",
    url: "https://кондиционеры-в-крыму.рф",
    telephone: "+7-978-839-02-72",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Симферополь",
      addressLocality: "Симферополь",
      addressRegion: "Республика Крым",
      addressCountry: "RU",
      postalCode: "295000",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Симферополь",
      },
      {
        "@type": "AdministrativeArea",
        name: "Республика Крым",
      },
    ],
    priceRange: "$$",
    service: {
      "@type": "Service",
      name: "Установка кондиционеров",
      provider: {
        "@type": "LocalBusiness",
        name: "Кондиционеры в Крыму",
      },
    },
  };

  return (
    <html lang="ru" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Metrica />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
