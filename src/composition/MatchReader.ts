import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";
import { stringToDate } from "../utils";
import { CsvReader } from "./CsvReader";
import { IDataReader } from "./IDataReader";

export class MatchReader {
  private _reader: IDataReader;
  private _matches: MatchData[] = [];

  public constructor(reader: IDataReader) {
    this._reader = reader;
  }

  public get matches(): MatchData[] {
    return this._matches;
  }

  public load(): void {
    try {
      this._reader.read();
      this._matches = this._reader.data.map((row) => [
        stringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6],
      ]);
    } catch (err) {
      throw err;
    }
  }

  public static fromCsv(path: string): MatchReader {
    return new MatchReader(new CsvReader(path));
  }
}
