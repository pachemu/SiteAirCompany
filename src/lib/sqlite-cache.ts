import Database from "better-sqlite3";
import fs from "node:fs";
import path from "node:path";

const CACHE_DIRECTORY = path.join(process.cwd(), ".cache");
const CACHE_PATH = path.join(CACHE_DIRECTORY, "app-cache.sqlite");

let cacheDb: Database | null = null;

function ensureCacheDirectory() {
  if (!fs.existsSync(CACHE_DIRECTORY)) {
    fs.mkdirSync(CACHE_DIRECTORY, { recursive: true });
  }
}

function getCacheDb() {
  if (cacheDb) {
    return cacheDb;
  }

  ensureCacheDirectory();

  cacheDb = new Database(CACHE_PATH);
  cacheDb.pragma("journal_mode = WAL");
  cacheDb.pragma("synchronous = NORMAL");
  cacheDb.pragma("temp_store = MEMORY");
  cacheDb.pragma("foreign_keys = ON");

  cacheDb.exec(`
    CREATE TABLE IF NOT EXISTS cache_entries (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL,
      expires_at INTEGER NOT NULL,
      created_at INTEGER NOT NULL DEFAULT (unixepoch())
    );

    CREATE INDEX IF NOT EXISTS idx_cache_entries_expires_at
      ON cache_entries (expires_at);
  `);

  return cacheDb;
}

export async function getCacheValue<T>(key: string): Promise<T | null> {
  const db = getCacheDb();

  const row = db
    .prepare(
      `
        SELECT value, expires_at
        FROM cache_entries
        WHERE key = ?
      `,
    )
    .get(key) as { value: string; expires_at: number } | undefined;

  if (!row) {
    return null;
  }

  if (row.expires_at <= Date.now()) {
    db.prepare("DELETE FROM cache_entries WHERE key = ?").run(key);
    return null;
  }

  return JSON.parse(row.value) as T;
}

export async function setCacheValue<T>(
  key: string,
  value: T,
  ttlSeconds: number,
): Promise<void> {
  const db = getCacheDb();
  const expiresAt = Date.now() + ttlSeconds * 1000;

  db.prepare(
    `
      INSERT INTO cache_entries (key, value, expires_at)
      VALUES (?, ?, ?)
      ON CONFLICT(key) DO UPDATE SET
        value = excluded.value,
        expires_at = excluded.expires_at
    `,
  ).run(key, JSON.stringify(value), expiresAt);

  db.prepare("DELETE FROM cache_entries WHERE expires_at <= ?").run(Date.now());
}

export async function deleteCacheValue(key: string): Promise<void> {
  const db = getCacheDb();
  db.prepare("DELETE FROM cache_entries WHERE key = ?").run(key);
}

export async function clearCache(): Promise<void> {
  const db = getCacheDb();
  db.prepare("DELETE FROM cache_entries").run();
}
