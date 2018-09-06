import { JarvanScript } from "../..";
import { LeagueList, LeagueMethods, LeaguePosition } from "../../handlers";
import { Queues, Regions } from "../../models";

/**
 * League Wrapper
 */
export default class LeagueWrapper {
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
    queue: Queues,
    region?: Regions): Promise<LeagueList> {
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
    queue: Queues,
    region?: Regions): Promise<LeagueList> {
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
    region?: Regions): Promise<LeagueList> {
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
    summonerId: number,
    region?: Regions): Promise<LeaguePosition[]> {
    return await LeagueMethods.getRanks(
      this.wrapper, summonerId, region);
  }
}
