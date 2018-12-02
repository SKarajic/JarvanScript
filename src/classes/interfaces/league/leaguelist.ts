import { LeagueItem } from "./leagueitem";

export interface LeagueList {
  readonly leagueId: string;
  readonly tier: string;
  readonly entries:	LeagueItem[];
  readonly queue: string;
  readonly name: string;
}