import fs from "node:fs";

export abstract class CsvReader<T> {
  private _data: T[] = [];
  private _path: string;

  public constructor(path: string) {
    this._path = path;
  }

  public get data(): T[] {
    return this._data;
  }

  protected abstract _mapRow(row: string[]): T;

  public read(): void {
    try {
      this._data = fs
        .readFileSync(this._path, "utf8")
        .split("\n")
        .map((row) => row.split(","))
        .map(this._mapRow);
    } catch (err) {
      throw err;
    }
  }
}
