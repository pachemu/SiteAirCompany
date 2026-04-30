require("dotenv/config");

const fs = require("node:fs/promises");
const path = require("node:path");
const postgres = require("postgres");

const PROJECT_ROOT = path.resolve(__dirname, "..");
const PUBLIC_DIR = path.join(PROJECT_ROOT, "public");
const LOCAL_PRODUCTS_IMAGE_BASE_PATH = "/images/products";
const SUPABASE_PUBLIC_STORAGE_PREFIX = "/storage/v1/object/public/";
const MAX_ATTEMPTS = 3;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function sanitizePathSegment(segment) {
  return segment
    .trim()
    .replace(/[<>:"\\|?*\u0000-\u001F]/g, "-")
    .replace(/\.+$/g, "")
    .replace(/^\.{1,2}$/g, "-");
}

function normalizeImageUrlPart(imageUrl) {
  return imageUrl.trim().replace(/^(?:%20|%09|\s)+/gi, "");
}

function getLocalProductImageUrl(imageUrl) {
  try {
    const normalizedImageUrl = normalizeImageUrlPart(imageUrl);
    const parsedUrl = new URL(normalizedImageUrl);

    if (parsedUrl.protocol !== "http:" && parsedUrl.protocol !== "https:") {
      return normalizedImageUrl;
    }

    let pathname = decodeURIComponent(parsedUrl.pathname);

    if (pathname.startsWith(SUPABASE_PUBLIC_STORAGE_PREFIX)) {
      pathname = pathname.slice(SUPABASE_PUBLIC_STORAGE_PREFIX.length);
    } else {
      pathname = `${parsedUrl.hostname}${pathname}`;
    }

    const segments = pathname
      .split("/")
      .map(sanitizePathSegment)
      .filter(Boolean);

    if (segments[0] === "products") {
      segments.shift();
    }

    if (segments.length === 0) {
      return normalizedImageUrl;
    }

    return `${LOCAL_PRODUCTS_IMAGE_BASE_PATH}/${segments
      .map((segment) => encodeURIComponent(segment))
      .join("/")}`;
  } catch {
    return normalizeImageUrlPart(imageUrl);
  }
}

function getDestinationPath(localUrl) {
  const relativePath = localUrl
    .replace(/^\//, "")
    .split("/")
    .map((segment) => decodeURIComponent(segment));

  return path.join(PUBLIC_DIR, ...relativePath);
}

function parseImageUrls(rawImageUrl) {
  if (!rawImageUrl) {
    return [];
  }

  return rawImageUrl
    .split(",")
    .map(normalizeImageUrlPart)
    .filter((url) => /^https?:\/\//i.test(url));
}

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function downloadWithRetry(remoteUrl, destinationPath) {
  let lastError;

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt += 1) {
    try {
      const response = await fetch(remoteUrl);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status} ${response.statusText}`);
      }

      const buffer = Buffer.from(await response.arrayBuffer());
      await fs.mkdir(path.dirname(destinationPath), { recursive: true });
      await fs.writeFile(destinationPath, buffer);
      return;
    } catch (error) {
      lastError = error;

      if (attempt < MAX_ATTEMPTS) {
        await sleep(500 * attempt);
      }
    }
  }

  throw lastError;
}

async function getProductImageUrls() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is missing. Cannot download product images.");
  }

  const sql = postgres(process.env.DATABASE_URL, { prepare: false });

  try {
    const rows = await sql`
      select image_url
      from products
      where image_url is not null and image_url <> ''
    `;

    return rows.flatMap((row) => parseImageUrls(row.image_url));
  } finally {
    await sql.end();
  }
}

async function main() {
  const remoteUrls = [...new Set(await getProductImageUrls())];
  let downloaded = 0;
  let skipped = 0;
  let failed = 0;

  for (const remoteUrl of remoteUrls) {
    const localUrl = getLocalProductImageUrl(remoteUrl);

    if (localUrl === remoteUrl) {
      skipped += 1;
      console.warn(`[images] skipped unsupported url: ${remoteUrl}`);
      continue;
    }

    const destinationPath = getDestinationPath(localUrl);

    if (await fileExists(destinationPath)) {
      skipped += 1;
      continue;
    }

    try {
      await downloadWithRetry(remoteUrl, destinationPath);
      downloaded += 1;
      console.log(`[images] downloaded ${remoteUrl} -> ${localUrl}`);
    } catch (error) {
      failed += 1;
      const message = error instanceof Error ? error.message : String(error);
      console.error(`[images] failed ${remoteUrl}: ${message}`);
    }
  }

  console.log(
    `[images] done. total=${remoteUrls.length}, downloaded=${downloaded}, skipped=${skipped}, failed=${failed}`,
  );

  if (failed > 0) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  const message = error instanceof Error ? error.message : String(error);
  console.error(`[images] ${message}`);
  process.exit(1);
});
