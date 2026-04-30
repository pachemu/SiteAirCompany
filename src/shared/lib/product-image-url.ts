const LOCAL_PRODUCTS_IMAGE_BASE_PATH = "/images/products";
const SUPABASE_PUBLIC_STORAGE_PREFIX = "/storage/v1/object/public/";

function normalizeImageUrlPart(imageUrl: string) {
  return imageUrl.trim().replace(/^(?:%20|%09|\s)+/gi, "");
}

function sanitizePathSegment(segment: string) {
  return segment
    .trim()
    .replace(/[<>:"\\|?*\u0000-\u001F]/g, "-")
    .replace(/\.+$/g, "")
    .replace(/^\.{1,2}$/g, "-");
}

function toSafeLocalPathSegments(url: URL) {
  let pathname = decodeURIComponent(url.pathname);

  if (pathname.startsWith(SUPABASE_PUBLIC_STORAGE_PREFIX)) {
    pathname = pathname.slice(SUPABASE_PUBLIC_STORAGE_PREFIX.length);
  } else {
    pathname = `${url.hostname}${pathname}`;
  }

  const segments = pathname
    .split("/")
    .map(sanitizePathSegment)
    .filter(Boolean);

  if (segments[0] === "products") {
    segments.shift();
  }

  return segments;
}

export function getLocalProductImageUrl(imageUrl: string) {
  try {
    const normalizedImageUrl = normalizeImageUrlPart(imageUrl);
    const parsedUrl = new URL(normalizedImageUrl);

    if (parsedUrl.protocol !== "http:" && parsedUrl.protocol !== "https:") {
      return normalizedImageUrl;
    }

    const segments = toSafeLocalPathSegments(parsedUrl);

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

export function localizeProductImageUrls(imageUrl: string | null) {
  if (!imageUrl) {
    return null;
  }

  return imageUrl
    .split(",")
    .map(normalizeImageUrlPart)
    .filter(Boolean)
    .map(getLocalProductImageUrl)
    .join(",");
}
