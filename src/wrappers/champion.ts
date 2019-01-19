import JarvanScript from "..";
import JarvanEnum from "../classes/enums";
import JarvanModelInterface from "../classes/interfaces";

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
   * Gets the current Champion Rotation
   *
   * @param region - (optional) region
   */
  public async getChampionsInfo(
    region?: JarvanEnum.Regions,
  ): Promise<JarvanModelInterface.Champion.ChampionRotation> {
    return await ChampionMethods.getChampionRotation(
      this.wrapper, region);
  }
}
