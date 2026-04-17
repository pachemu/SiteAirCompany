import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "antd/dist/reset.css";
import "./globals.css";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Продажа кондиционеров",
  description:
    "Продажа кондиционеров от ИП Ионин Алексея Ивановича, на территории Крыма.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
