import JarvanScript from "../../jarvanscript";
import {
  Methods,
  RegionManager,
  Regions,
  RequestManager,
} from "../../models";
import { ChampionMastery } from "./dto";

const methods = Methods.CHAMPION_MASTERY;
const reqManager = RequestManager.getInstance();
const regManager = RegionManager.getInstance();

const URL_SUMMONER_BY_ID_CHAMPION_BY_ID = methods.CHAMPION_MASTERIES.BY_SUMMONER_ID.BY_CHAMPION_ID.VALUE;
const URL_SUMMONER_BY_ID = methods.CHAMPION_MASTERIES.BY_SUMMONER_ID.VALUE;
const URL_SCORES = methods.SCORES.BY_SUMMONER_ID.VALUE;

/**
 * Methods handling the CHAMPION-MASTERY-V3 endpoints
 */
export namespace ChampionMasteryMethods {

  /**
   * Returns one or all Champion Masteries of a summoner.
   *
   * @param summonerId - the ID of the summoner
   * @param championId - (optional) the ID of the champion
   * @param region - (optional) the region of choice
   */
  export async function getChampionMasteries(
    wrapper: JarvanScript,
    summonerId: number,
    championId?: number,
    region: Regions = regManager.getRegion(),
  ): Promise<ChampionMastery[]> {
    const championMasteryList: ChampionMastery[] = [];

    /* sets the right URL */
    const url = championId !== void 0
      ? URL_SUMMONER_BY_ID_CHAMPION_BY_ID
      : URL_SUMMONER_BY_ID;

    /* response data */
    const data = JSON.parse(
      await reqManager.getDynamicData(
        url, {summonerId, championId}, region));

    /* adding all champion masteries */
    if (Array.isArray(data)) data.forEach(
      (championMastery) => championMasteryList.push(
        new ChampionMastery(championMastery, region, wrapper)));

    /* adding single champion mastery */
    else championMasteryList.push(
      new ChampionMastery(data, region, wrapper));

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
    const url = URL_SCORES;
    return parseInt(
      await RequestManager.getInstance().getDynamicData(
        url, {summonerId}, region),
        undefined);
  }
}
