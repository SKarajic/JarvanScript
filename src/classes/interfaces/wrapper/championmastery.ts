import { Regions } from "../../enums/regions";
import { ChampionMastery } from "../championmastery/index";

/**
 * Champion Mastery Wrapper
 */
export interface ChampionMasteryWrapper {
  /**
   * Gets Champion Masteries
   *
   * @param summonerId - ID of the summoner in question
   * @param championId - (optional) specific champion
   * @param region - (optional) region
   */
  getChampionMasteries(
    summonerId: string,
    championId?: number,
    region?: Regions,
  ): Promise<ChampionMastery[]>;

  /**
   * Gets the total mastery score of a summoner
   *
   * @param summonerId - ID of the summoner in question
   * @param region - (optional) region
   */
   getChampionMasteryScore(
    summonerId: string,
    region?: Regions,
  ): Promise<number>;
}
