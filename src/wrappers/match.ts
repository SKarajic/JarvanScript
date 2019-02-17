import JarvanEnum from "../classes/enums";
import JarvanModelInterface from "../classes/interfaces";
import JarvanScript from "../jarvanscript";

import { MatchMethods } from "../handlers/index";

/**
 * Match Wrapper
 */
export class MatchWrapper implements JarvanModelInterface.Wrapper.MatchWrapper {
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

  /**
   * Gets the Match by MatchID
   *
   * @param matchId - matchID of the match in question
   * @param region - (optional) region
   */
  public async getMatch(
    matchId: number,
    region?: JarvanEnum.Regions,
  ): Promise<JarvanModelInterface.Match.Match> {
    return await MatchMethods.getMatch(
      this.wrapper, matchId, region);
  }
}
