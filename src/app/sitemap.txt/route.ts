import { getSitemapUrls } from "../sitemap";

export const dynamic = "force-dynamic";

export async function GET() {
  const urls = await getSitemapUrls();
  const body = urls.join("\n") + "\n";

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=86400",
    },
  });
}
