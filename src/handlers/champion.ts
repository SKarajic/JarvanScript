import JarvanScript from "../jarvanscript";
import JarvanDTO from "../classes/dto";
import JarvanEnum from "../classes/enums";
import JarvanModelInterface from "../classes/interfaces";
import JarvanManager from "../classes/managers";

const methods = JarvanEnum.Methods.CHAMPION;
const reqManager = JarvanManager.RequestManager.getInstance();
const regManager = JarvanManager.RegionManager.getInstance();

const URL_CHAMPION = methods.VALUE;

/**
 * Methods handling the CHAMPION-V3 endpoints
 */
export namespace ChampionMethods {

  /**
   * Returns the current Champion Rotation
   *
   * endpoints:
   *  - /lol/platform/v3/champion-rotations
   *
   * @param wrapper - the wrapper
   * @param championId - (optional) the ID of the champion
   * @param region - (optional) the region of choice
   */
  export async function getChampionRotation(
    wrapper: JarvanScript,
    region: JarvanEnum.Regions = regManager.getRegion(),
  ): Promise<JarvanModelInterface.Champion.ChampionRotation> {
    /* response data */
    const data = JSON.parse(
      await reqManager.getDynamicData(URL_CHAMPION, {}, region));

    /* adding a single champion */
    return new JarvanDTO.Champion.ChampionRotation(data, region, wrapper);
  }
}
