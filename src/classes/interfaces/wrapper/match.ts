import { Regions } from "../../enums/regions";
import { MatchList } from "../match/index";

/**
 * Match Wrapper
 */
export interface MatchWrapper {
  /**
   * Gets the MatchList by accountID
   *
   * @param accountId - accountID of the summoner in question
   * @param region - (optional) region
   */
  getMatchList(
    accountId: string,
    region?: Regions,
  ): Promise<MatchList>;
}
