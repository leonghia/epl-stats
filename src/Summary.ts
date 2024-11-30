import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { IAnalyzer } from "./IAnalyzer";
import { IOutputTarget } from "./IOutputTarget";
import { MatchData } from "./MatchData";
import { HtmlReport } from "./reportTargets/HtmlReport";

export class Summary {
  private _analyzer: IAnalyzer;
  private _outputTarget: IOutputTarget;

  public constructor(analyzer: IAnalyzer, outputTarget: IOutputTarget) {
    this._analyzer = analyzer;
    this._outputTarget = outputTarget;
  }

  public buildAndPrintReport(matches: MatchData[]): void {
    const report = this._analyzer.run(matches);
    try {
      this._outputTarget.print(report);
    } catch (err) {
      throw err;
    }
  }

  public static winsAnalysisWithHtmlReport(
    team: string,
    path: string
  ): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReport(path));
  }
}
