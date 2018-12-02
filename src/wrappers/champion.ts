import JarvanModelInterface from "../classes/interfaces";
import JarvanEnum from "../classes/enums";
import JarvanScript from "..";

import { ChampionMethods } from "../handlers";

/**
 * Champion Wrapper
 */
export default class ChampionWrapper {
  private wrapper: JarvanScript;

  /**
   * Creates a Champion Wrapper
   *
   * @param wrapper - the JarvanScript wrapper
   */
  public constructor(wrapper: JarvanScript) {
    this.wrapper = wrapper;
  }

  /**
   * Gets list of information entities about champion
   *
   * @param championId - (optional) specific champion
   * @param region - (optional) region
   */
  public async getChampionsInfo(
    championId?: number,
    region?: JarvanEnum.Regions
  ): Promise<JarvanModelInterface.Champion.ChampionInfo[]> {
    return await ChampionMethods.getChampionsInfo(
      this.wrapper, championId, region);
  }
}
