import { MatchReference } from "./matchreference";

export interface MatchList {
  matches: MatchReference[];
  startIndex: number;
  endIndex: number;
  totalGames: number;
}
