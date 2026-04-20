declare module "better-sqlite3" {
  interface RunResult {
    changes: number;
    lastInsertRowid: number | bigint;
  }

  interface Statement<BindParameters extends unknown[] = unknown[]> {
    get(...params: BindParameters): unknown;
    run(...params: BindParameters): RunResult;
  }

  interface DatabaseInstance {
    pragma(source: string): unknown;
    exec(source: string): this;
    prepare<BindParameters extends unknown[] = unknown[]>(
      source: string,
    ): Statement<BindParameters>;
  }

  class Database {
    constructor(filename: string, options?: Record<string, unknown>);
    pragma(source: string): unknown;
    exec(source: string): this;
    prepare<BindParameters extends unknown[] = unknown[]>(
      source: string,
    ): Statement<BindParameters>;
  }

  namespace Database {
    export type Database = DatabaseInstance;
  }

  export = Database;
}
