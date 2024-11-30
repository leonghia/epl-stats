import fs from "node:fs";
import { IOutputTarget } from "../IOutputTarget";

export class HtmlReport implements IOutputTarget {
  private _path: string;

  public constructor(path: string) {
    this._path = path;
  }

  public print(report: string): void {
    const html = `
        <div>
            <h1>Analysis output</h1>
            <p>${report}</p>
        </div>
    `;

    try {
      fs.writeFileSync(this._path, html);
    } catch (err) {
      throw err;
    }
  }
}
