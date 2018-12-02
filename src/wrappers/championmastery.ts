import JarvanModelInterface from "../classes/interfaces";
import JarvanEnum from "../classes/enums";
import JarvanScript from "..";

import { ChampionMasteryMethods } from "../handlers";

/**
 * Champion Mastery Wrapper
 */
export default class ChampionMasteryWrapper {
  private wrapper: JarvanScript;

  /**
   * Creates a Champion Mastery Wrapper
   *
   * @param wrapper - the JarvanScript wrapper
   */
  public constructor(wrapper: JarvanScript) {
    this.wrapper = wrapper;
  }

  /**
   * Gets Champion Masteries
   *
   * @param summonerId - ID of the summoner in question
   * @param championId - (optional) specific champion
   * @param region - (optional) region
   */
  public async getChampionMasteries(
    summonerId: string,
    championId?: number,
    region?: JarvanEnum.Regions
  ): Promise<JarvanModelInterface.ChampionMastery.ChampionMastery[]> {
    return await ChampionMasteryMethods.getChampionMasteries(
      this.wrapper, summonerId, championId, region);
  }

  /**
   * Gets the total mastery score of a summoner
   *
   * @param summonerId - ID of the summoner in question
   * @param region - (optional) region
   */
  public async getChampionMasteryScore(
    summonerId: string,
    region?: JarvanEnum.Regions
  ): Promise<number> {
    return await ChampionMasteryMethods.getChampionMasteryScore(
      summonerId, region);
  }
}
