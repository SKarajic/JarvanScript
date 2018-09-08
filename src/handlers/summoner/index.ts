import { JarvanScript } from "../..";
import { Methods, RegionManager, Regions, RequestManager } from "../../models";
import { Summoner } from "./dto";

const methods = Methods.SUMMONER;

/**
 * Methods handling the SUMMONER-V3 endpoints
 */
export namespace SummonerMethods {

  /**
   * Gets the Summoner by accountID
   *
   * @param wrapper - the wrapper
   * @param accountId - accountID of the summoner in question
   * @param region - (optional) region
   */
  export async function getSummonerByAccountId(
    wrapper: JarvanScript,
    accountId: number,
    region: Regions = RegionManager.getInstance().getRegion()): Promise<Summoner> {
    const url = methods.BY_ACCOUNT_ID.VALUE;
    const data = JSON.parse(await RequestManager.getInstance()
      .getDynamicData(url, {accountId}, region));

    return new Summoner(data, region, wrapper);
  }

  /**
   * Gets the Summoner by summonerID
   *
   * @param wrapper - the wrapper
   * @param summonerId - ID of the summoner in question
   * @param region - (optional) region
   */
  export async function getSummonerById(
    wrapper: JarvanScript,
    summonerId: number,
    region: Regions = RegionManager.getInstance().getRegion()): Promise<Summoner> {
    const url = methods.BY_SUMMONER_ID.VALUE;
    const data = JSON.parse(await RequestManager.getInstance()
      .getDynamicData(url, {summonerId}, region));

    return new Summoner(data, region, wrapper);
  }

  /**
   * Gets the Summoner by name
   *
   * @param wrapper - the wrapper
   * @param summonerName - name of the summoner in question
   * @param region - (optional) region
   */
  export async function getSummonerByName(
    wrapper: JarvanScript,
    summonerName: string,
    region: Regions = RegionManager.getInstance().getRegion()): Promise<Summoner> {
    const url = methods.BY_SUMMONER_NAME.VALUE;
    const data = JSON.parse(await RequestManager.getInstance()
      .getDynamicData(url, {summonerName}, region));

    return new Summoner(data, region, wrapper);
  }
}
