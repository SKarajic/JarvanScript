import JarvanScript from "..";
import JarvanDTO from "../classes/dto";
import JarvanEnum from "../classes/enums";
import JarvanModelInterface from "../classes/interfaces";
import JarvanManager from "../classes/managers";

const methods = JarvanEnum.Methods.CHAMPION_MASTERY;
const reqManager = JarvanManager.RequestManager.getInstance();
const regManager = JarvanManager.RegionManager.getInstance();

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
   * endpoints:
   *  - /lol/champion-mastery/v4/champion-masteries/by-summoner/:encryptedSummonerId/by-champion/:championId
   *  - /lol/champion-mastery/v4/champion-masteries/by-summoner/:encryptedSummonerId
   *
   * @param wrapper - the wrapper
   * @param summonerId - the ID of the summoner
   * @param championId - (optional) the ID of the champion
   * @param region - (optional) the region of choice
   */
  export async function getChampionMasteries(
    wrapper: JarvanScript,
    summonerId: string,
    championId?: number,
    region: JarvanEnum.Regions = regManager.getRegion(),
  ): Promise<JarvanModelInterface.ChampionMastery.ChampionMastery[]> {
    const championMasteryList: JarvanDTO.ChampionMastery.ChampionMastery[] = [];

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
        new JarvanDTO.ChampionMastery.ChampionMastery(championMastery, region, wrapper)));

    /* adding single champion mastery */
    else championMasteryList.push(
      new JarvanDTO.ChampionMastery.ChampionMastery(data, region, wrapper));

    return championMasteryList;
  }

  /**
   * Returns the combined level of all the Champion Masteries of a summoner
   *
   * endpoints:
   *  - /lol/champion-mastery/v4/scores/by-summoner/:encryptedSummonerId
   *
   * @param wrapper - the wrapper
   * @param summonerId - the ID of the summoner
   * @param region - (optional) the region of choice
   */
  export async function getChampionMasteryScore(
    summonerId: string,
    region: JarvanEnum.Regions = regManager.getRegion()): Promise<number> {
    const url = URL_SCORES;
    return parseInt(
      await reqManager.getDynamicData(
        url, {summonerId}, region),
        undefined);
  }
}
