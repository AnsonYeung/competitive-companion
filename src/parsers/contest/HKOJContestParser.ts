import { ContestParser } from '../ContestParser';
import { Parser } from '../Parser';
import { HKOJProblemParser } from '../problem/HKOJProblemParser';

export class HKOJContestParser extends ContestParser {
  public problemParser: Parser = new HKOJProblemParser();
  public linkSelector: string = 'td:nth-child(2) > a';

  public getMatchPatterns(): string[] {
    return ['https://judge.hkoi.org/contest/*'];
  }
}
