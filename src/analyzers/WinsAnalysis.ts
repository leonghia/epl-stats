import { IAnalyzer } from "../IAnalyzer";
import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";

export class WinsAnalysis implements IAnalyzer {
  private _team: string;

  public constructor(team: string) {
    this._team = team;
  }

  public run(matches: MatchData[]): string {
    let wins = 0;

    for (let match of matches) {
      if (
        (match[1] === this._team && match[5] === MatchResult.HomeWin) ||
        (match[2] === this._team && match[5] === MatchResult.AwayWin)
      ) {
        wins++;
      }
    }

    return `Team ${this._team} wons ${wins} games.`;
  }
}
