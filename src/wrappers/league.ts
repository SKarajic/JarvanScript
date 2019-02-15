import JarvanEnum from "../classes/enums";
import JarvanModelInterface from "../classes/interfaces";
import JarvanScript from "../jarvanscript";

import { LeagueMethods } from "../handlers/index";

/**
 * League Wrapper
 */
export class LeagueWrapper implements JarvanModelInterface.Wrapper.LeagueWrapper {
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
   * Gets the challenger ladder
   *
   * @param queue - queue
   * @param region - (optional) region
   */
  public async getChallengerLeague(
    queue: JarvanEnum.Queues,
    region?: JarvanEnum.Regions,
  ): Promise<JarvanModelInterface.League.LeagueList> {
    return await LeagueMethods.getChallengerLeague(
      this.wrapper, queue, region);
  }

  /**
   * Gets the master ladder
   *
   * @param queue - queue
   * @param region - (optional) region
   */
  public async getMasterLeague(
    queue: JarvanEnum.Queues,
    region?: JarvanEnum.Regions,
  ): Promise<JarvanModelInterface.League.LeagueList> {
    return await LeagueMethods.getMasterLeague(
      this.wrapper, queue, region);
  }

  /**
   * Gets the ladder of a league
   *
   * @param leagueId - ID of the league
   * @param region - (optional) region
   */
  public async getLeague(
    leagueId: string,
    region?: JarvanEnum.Regions,
  ): Promise<JarvanModelInterface.League.LeagueList> {
    return await LeagueMethods.getLeague(
      this.wrapper, leagueId, region);
  }

  /**
   * Gets the ranks of a summoner
   *
   * @param summonerId - ID of the summoner in question
   * @param region - (optional) region
   */
  public async getRanks(
    summonerId: string,
    region?: JarvanEnum.Regions,
  ): Promise<JarvanModelInterface.League.LeaguePosition[]> {
    return await LeagueMethods.getRanks(
      this.wrapper, summonerId, region);
  }
}
