import { MatchReference } from "./matchreference";

export interface MatchList {
  endIndex: number;
  startIndex: number;
  totalGames: number;
  matches: MatchReference[];
}
