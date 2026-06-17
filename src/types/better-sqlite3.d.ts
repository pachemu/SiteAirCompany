declare module "better-sqlite3" {
  interface Statement {
    get(...params: unknown[]): unknown;
    run(...params: unknown[]): { changes: number; lastInsertRowid: number | bigint };
  }

  class Database {
    constructor(filename: string, options?: Record<string, unknown>);
    pragma(source: string): unknown;
    exec(source: string): this;
    prepare(source: string): Statement;
  }

  export = Database;
}
