import JarvanScript from "..";
import JarvanEnum from "../classes/enums";
import JarvanModelInterface from "../classes/interfaces";

import { MatchMethods } from "../handlers";

/**
 * Match Wrapper
 */
export default class MatchWrapper {
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
   * Gets the MatchList by accountID
   *
   * @param accountId - accountID of the summoner in question
   * @param region - (optional) region
   */
  public async getMatchList(
    accountId: string,
    region?: JarvanEnum.Regions,
  ): Promise<JarvanModelInterface.Match.MatchList> {
    return await MatchMethods.getMatchList(
      this.wrapper, accountId, region);
  }
}
