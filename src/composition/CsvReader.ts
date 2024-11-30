import fs from "node:fs";
import { IDataReader } from "./IDataReader";

export class CsvReader implements IDataReader {
  private _data: string[][] = [];
  private _path: string;

  public constructor(path: string) {
    this._path = path;
  }

  public read(): void {
    try {
      this._data = fs
        .readFileSync(this._path, "utf8")
        .split("\n")
        .map((row) => row.split(","));
    } catch (err) {
      throw err;
    }
  }
  public get data(): string[][] {
    return this._data;
  }
}
