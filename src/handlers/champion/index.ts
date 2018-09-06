import JarvanScript from "../../jarvanscript";
import { Methods, RegionManager, Regions, RequestManager } from "../../models";
import { ChampionInfo } from "./dto";
const methods = Methods.CHAMPION;
const reqManager = RequestManager.getInstance();
const regManager = RegionManager.getInstance();

export namespace ChampionMethods {

  /**
   * Returns information of one or all champions.
   * @param championId the ID of the champion (optional)
   * @param region the region of choice (optional)
   */
  export async function getChampions(
    wrapper: JarvanScript,
    championId?: number,
    region: Regions = regManager.getRegion(),
  ): Promise<ChampionInfo[]> {
    let url;
    if (championId !== void 0) {
      url = methods.BY_CHAMPION_ID.VALUE;
    } else {
      url = methods.VALUE;
    }
    const data = JSON.parse(await reqManager.getDynamicData(url, {championId}, region));
    const championList: ChampionInfo[] = [];
    if (data.champions) {
      data.champions.forEach((element: any) => championList.push(new ChampionInfo(element, region, wrapper)));
    } else {
      championList.push(new ChampionInfo(data, region, wrapper));
    }
    return championList;
  }
}
