import { ChampionInfo, ChampionMethods } from "../../handlers";
import JarvanScript from "../../jarvanscript";
import { Regions } from "../../models/enums";

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
  public async getChampions(
    championId?: number,
    region?: Regions): Promise<ChampionInfo[]> {
    return await ChampionMethods.getChampions(
      this.wrapper, championId, region);
  }
}
