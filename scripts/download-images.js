const fs = require("node:fs/promises");
const path = require("node:path");

const PROJECT_ROOT = path.resolve(__dirname, "..");
const PUBLIC_DIR = path.join(PROJECT_ROOT, "public");
const PRODUCTS_DATA_PATH = path.join(
  PROJECT_ROOT,
  "src/entities/product/model/products.data.json",
);
const LOCAL_PRODUCTS_IMAGE_PREFIX = "/images/products/product-images/";
const SUPABASE_PUBLIC_STORAGE_URL =
  "https://vrnhymlneqdiphogedtm.supabase.co/storage/v1/object/public/product-images/";
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

function getRemoteProductImageUrl(localUrl) {
  try {
    const normalizedUrl = normalizeImageUrlPart(localUrl);

    if (!normalizedUrl.startsWith(LOCAL_PRODUCTS_IMAGE_PREFIX)) {
      return null;
    }

    const segments = normalizedUrl
      .slice(LOCAL_PRODUCTS_IMAGE_PREFIX.length)
      .split("/")
      .filter(Boolean)
      .map(decodeURIComponent)
      .map(sanitizePathSegment)
      .map(encodeURIComponent);

    if (segments.length === 0) {
      return null;
    }

    return `${SUPABASE_PUBLIC_STORAGE_URL}${segments.join("/")}`;
  } catch {
    return null;
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
    .filter((url) => url.startsWith(LOCAL_PRODUCTS_IMAGE_PREFIX));
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
  const products = JSON.parse(await fs.readFile(PRODUCTS_DATA_PATH, "utf8"));
  return products.flatMap((product) => parseImageUrls(product.imageUrl));
}

async function main() {
  const localUrls = [...new Set(await getProductImageUrls())];
  let downloaded = 0;
  let skipped = 0;
  let failed = 0;

  for (const localUrl of localUrls) {
    const remoteUrl = getRemoteProductImageUrl(localUrl);

    if (!remoteUrl) {
      skipped += 1;
      console.warn(`[images] skipped unsupported path: ${localUrl}`);
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
    `[images] done. total=${localUrls.length}, downloaded=${downloaded}, skipped=${skipped}, failed=${failed}`,
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
