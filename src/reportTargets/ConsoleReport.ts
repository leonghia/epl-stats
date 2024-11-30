import { IOutputTarget } from "../IOutputTarget";

export class ConsoleReport implements IOutputTarget {
  public print(report: string): void {
    console.log(report);
  }
}
