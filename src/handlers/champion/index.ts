import JarvanScript from "../../jarvanscript";
import {
  Methods,
  RegionManager,
  Regions,
  RequestManager,
} from "../../models";
import { ChampionInfo } from "./dto";

const methods = Methods.CHAMPION;
const reqManager = RequestManager.getInstance();
const regManager = RegionManager.getInstance();

const URL_CHAMPION_BY_ID = methods.BY_CHAMPION_ID.VALUE;
const URL_CHAMPION = methods.VALUE;

/**
 * Methods handling the CHAMPION-V3 endpoints
 */
export namespace ChampionMethods {

  /**
   * Returns information of one or all champions.
   *
   * @param championId - (optional) the ID of the champion
   * @param region - (optional) the region of choice
   */
  export async function getChampionsInfo(
    wrapper: JarvanScript,
    championId?: number,
    region: Regions = regManager.getRegion()): Promise<ChampionInfo[]> {
    const championList: ChampionInfo[] = [];
    let url: string;

    /* sets the right URL */
    if (championId !== void 0) {
      url = URL_CHAMPION_BY_ID;
    } else {
      url = URL_CHAMPION;
    }

    /* response data */
    const data = JSON.parse(
      await reqManager.getDynamicData(url, {championId}, region));

    /* adding all champions */
    if (data.champions) data.champions.forEach(
        (element: any) => championList.push(
          new ChampionInfo(element, region, wrapper)));

    /* adding a single champion */
    else championList.push(
        new ChampionInfo(data, region, wrapper));

    return championList;
  }
}
