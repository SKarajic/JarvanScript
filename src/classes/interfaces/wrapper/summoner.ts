import { Regions } from "../../enums/regions";
import { Summoner } from "../summoner/index";

/**
 * Summoner Wrapper
 */
export interface SummonerWrapper {
  /**
   * Gets the Summoner by accountID
   *
   * @param accountId - accountID of the summoner in question
   * @param region - (optional) region
   */
  getSummonerByAccountId(
    accountId: string,
    region?: Regions,
  ): Promise<Summoner>;

  /**
   * Gets the Summoner by summonerID
   *
   * @param summonerId - ID of the summoner in question
   * @param region - (optional) region
   */
  getSummonerById(
    summonerId: string,
    region?: Regions,
  ): Promise<Summoner>;

  /**
   * Gets the Summoner by name
   *
   * @param summonerName - name of the summoner in question
   * @param region - (optional) region
   */
  getSummonerByName(
    summonerName: string,
    region?: Regions,
  ): Promise<Summoner>;
}
