import { MatchData } from "./MatchData";

export interface IAnalyzer {
  run(matches: MatchData[]): string;
}
