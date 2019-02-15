import { Summoner } from "../summoner/index";
import { MiniSeries } from "./miniseries";

export interface LeaguePosition {
  readonly rank: string;
  readonly queueType: string;
  readonly hotStreak: boolean;
  readonly miniSeries: MiniSeries | null;
  readonly wins: number;
  readonly veteran: boolean;
  readonly losses: number;
  readonly freshBlood: boolean;
  readonly leagueId: string;
  readonly summonerName: string;
  readonly inactive: boolean;
  readonly summonerId: string;
  readonly tier: string;
  readonly leaguePoints: number;

  /**
   * gets the Summoner from the ChampionMastery
   */
  getSummoner(): Promise<Summoner>;
}
