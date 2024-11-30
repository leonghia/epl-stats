import { exit } from "node:process";
import { MatchReader } from "./composition/MatchReader";
import { Summary } from "./Summary";

const path = "/root/stats/football.csv";
const team = "Man United";

const matchReader = MatchReader.fromCsv(path);

try {
  matchReader.load();
  const summary = Summary.winsAnalysisWithHtmlReport(
    team,
    "/root/stats/report.html"
  );
  summary.buildAndPrintReport(matchReader.matches);
} catch (err) {
  console.error(err);
  exit(1);
}
