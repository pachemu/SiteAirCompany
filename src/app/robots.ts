import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/private"],
      },
      {
        userAgent: "Yandex",
        allow: "/",
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
    ],
    sitemap: "https://кондиционеры-в-крыму.рф/sitemap.xml",
    host: "https://кондиционеры-в-крыму.рф",
  };
}
