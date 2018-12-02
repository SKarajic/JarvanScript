import { Summoner } from "../index";

/**
 * Summoner's mastery in a Champion
 */
export interface ChampionMastery {
  readonly chestGranted: boolean;
  readonly level: number;
  readonly points: number;
  readonly id: number;
  readonly summonerId: string;
  readonly pointsUntilNextLevel: number;
  readonly pointsSinceLastLevel: number;
  readonly lastPlayTime: number;

  /**
   * Gets the Summoner from the ChampionMastery
   */
  getSummoner(): Promise<Summoner.Summoner>
}