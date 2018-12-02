import JarvanModelInterface from "../classes/interfaces";
import JarvanManager from "../classes/managers";
import JarvanEnum from "../classes/enums";
import JarvanDTO from '../classes/dto'
import JarvanScript from "..";

const methods = JarvanEnum.Methods.CHAMPION;
const reqManager = JarvanManager.RequestManager.getInstance();
const regManager = JarvanManager.RegionManager.getInstance();

const URL_CHAMPION_BY_ID = methods.BY_CHAMPION_ID.VALUE;
const URL_CHAMPION = methods.VALUE;

/**
 * Methods handling the CHAMPION-V3 endpoints
 */
export namespace ChampionMethods {

  /**
   * Returns information of one or all champions.
   *
   * @param wrapper - the wrapper
   * @param championId - (optional) the ID of the champion
   * @param region - (optional) the region of choice
   */
  export async function getChampionsInfo(
    wrapper: JarvanScript,
    championId?: number,
    region: JarvanEnum.Regions = regManager.getRegion()
  ): Promise<JarvanModelInterface.Champion.ChampionInfo[]> {
    const championList: JarvanDTO.Champion.ChampionInfo[] = [];

    /* sets the right URL */
    const url = championId !== void 0
      ? URL_CHAMPION_BY_ID
      : URL_CHAMPION;

    /* response data */
    const data = JSON.parse(
      await reqManager.getDynamicData(url, {championId}, region));

    /* adding all champions */
    if (data.champions) data.champions.forEach(
      (championInfo) => championList.push(
        new JarvanDTO.Champion.ChampionInfo(championInfo, region, wrapper)));

    /* adding a single champion */
    else championList.push(
      new JarvanDTO.Champion.ChampionInfo(data, region, wrapper));

    return championList;
  }
}
