import { Queues } from "../models";

export interface IRequestInfo {
  accountId?: number;
  championId?: number;
  itemId?: number;
  leagueId?: string;
  masteryId?: number;
  matchId?: number;
  queue?: string|Queues;
  runeId?: number;
  tournamentCode?: any;
  summonerId?: number;
  summonerName?: string;
  summonerSpellId?: number;
}
