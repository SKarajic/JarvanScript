import { JarvanScript } from "../..";
import { Summoner, SummonerMethods } from "../../handlers";
import { Regions } from "../../models";

/**
 * Summoner Wrapper
 */
export default class SummonerWrapper {
  private wrapper: JarvanScript;

  /**
   * Creates a League Wrapper
   *
   * @param wrapper - the JarvanScript wrapper
   */
  public constructor(wrapper: JarvanScript) {
    this.wrapper = wrapper;
  }

  /**
   * Gets the Summoner by accountID
   *
   * @param accountId - accountID of the summoner in question
   * @param region - (optional) region
   */
  public async getSummonerByAccountId(
    accountId: number,
    region?: Regions): Promise<Summoner> {
    return await SummonerMethods.getSummonerByAccountId(
      this.wrapper, accountId, region);
  }

  /**
   * Gets the Summoner by accountID
   *
   * @param summonerId - ID of the summoner in question
   * @param region - (optional) region
   */
  public async getSummonerById(
    summonerId: number,
    region?: Regions): Promise<Summoner> {
    return await SummonerMethods.getSummonerById(
      this.wrapper, summonerId, region);
  }

  /**
   * Gets the Summoner by name
   *
   * @param summonerName - name of the summoner in question
   * @param region - (optional) region
   */
  public async getSummonerByName(
    summonerName: string,
    region?: Regions): Promise<Summoner> {
    return await SummonerMethods.getSummonerByName(
      this.wrapper, summonerName, region);
  }
}
