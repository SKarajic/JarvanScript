
import JarvanModelInterface from "../classes/interfaces";
import JarvanManager from "../classes/managers";
import JarvanEnum from "../classes/enums";
import JarvanDTO from "../classes/dto";
import JarvanScript from "..";


const methods = JarvanEnum.Methods.SUMMONER;

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
    accountId: string,
    region: JarvanEnum.Regions = JarvanManager.RegionManager.getInstance().getRegion()
  ): Promise<JarvanModelInterface.Summoner.Summoner> {
    const url = methods.BY_ACCOUNT_ID.VALUE;
    const data = JSON.parse(await JarvanManager.RequestManager.getInstance()
      .getDynamicData(url, {accountId}, region));

    return new JarvanDTO.Summoner.Summoner(data, region, wrapper);
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
    summonerId: string,
    region: JarvanEnum.Regions = JarvanManager.RegionManager.getInstance().getRegion()
  ): Promise<JarvanModelInterface.Summoner.Summoner> {
    const url = methods.BY_SUMMONER_ID.VALUE;
    const data = JSON.parse(await JarvanManager.RequestManager.getInstance()
      .getDynamicData(url, {summonerId}, region));

    return new JarvanDTO.Summoner.Summoner(data, region, wrapper);
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
    region: JarvanEnum.Regions = JarvanManager.RegionManager.getInstance().getRegion()
  ): Promise<JarvanModelInterface.Summoner.Summoner> {
    const url = methods.BY_SUMMONER_NAME.VALUE;
    const data = JSON.parse(await JarvanManager.RequestManager.getInstance()
      .getDynamicData(url, {summonerName}, region));

    return new JarvanDTO.Summoner.Summoner(data, region, wrapper);
  }
}
