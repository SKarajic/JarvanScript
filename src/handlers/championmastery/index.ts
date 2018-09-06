import JarvanScript from "../../jarvanscript";
import { Methods, Regions } from "../../models/enums";
import { RegionManager, RequestManager } from "../../models/managers";
import { ChampionMastery } from "./classes";

const methods = Methods.CHAMPION_MASTERY;
const reqManager = RequestManager.getInstance();
const regManager = RegionManager.getInstance();

export namespace ChampionMasteryMethods {

  /**
   * Returns one or all Champion Masteries of a summoner.
   * @param summonerId the ID of the summoner
   * @param championId the ID of the champion (optional)
   * @param region the region of choice (optional)
   */
  export async function getChampionMasteries(
    wrapper: JarvanScript,
    summonerId: number,
    championId?: number,
    region: Regions = regManager.getRegion(),
  ): Promise<ChampionMastery[]> {
    let url;
    if (championId !== void 0) {
      url = methods.CHAMPION_MASTERIES.BY_SUMMONER_ID.BY_CHAMPION_ID.VALUE;
    } else {
      url = methods.CHAMPION_MASTERIES.BY_SUMMONER_ID.VALUE;
    }
    const data = JSON.parse(await reqManager.getDynamicData(url, {summonerId, championId}, region));
    const championMasteryList: ChampionMastery[] = [];
    if (Array.isArray(data)) {
      data.forEach((element) => championMasteryList.push(new ChampionMastery(element, region, wrapper)));
    } else {
      championMasteryList.push(new ChampionMastery(data, region, wrapper));
    }
    return championMasteryList;
  }

  /**
   * Returns the combined level of all the Champion Masteries of a summoner
   * @param summonerId the ID of the summoner
   * @param region the region of choice (optional)
   */
  export async function getChampionMasteryScore(
    summonerId: number,
    region: Regions = RegionManager.getInstance().getRegion(),
  ): Promise<number> {
    const url = methods.SCORES.BY_SUMMONER_ID.VALUE;
    return parseInt(
      await RequestManager.getInstance().getDynamicData(
        url, {summonerId}, region),
        undefined);
  }
}
