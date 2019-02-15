import { Queues } from "../../enums/queues";
import { Regions } from "../../enums/regions";
import { LeagueList, LeaguePosition } from "../league/index";

/**
 * League Wrapper
 */
export interface LeagueWrapper {
  /**
   * Gets the challenger ladder
   *
   * @param queue - queue
   * @param region - (optional) region
   */
  getChallengerLeague(
    queue: Queues,
    region?: Regions,
  ): Promise<LeagueList>;

  /**
   * Gets the master ladder
   *
   * @param queue - queue
   * @param region - (optional) region
   */
  getMasterLeague(
    queue: Queues,
    region?: Regions,
  ): Promise<LeagueList>;

  /**
   * Gets the ladder of a league
   *
   * @param leagueId - ID of the league
   * @param region - (optional) region
   */
  getLeague(
    leagueId: string,
    region?: Regions,
  ): Promise<LeagueList>;

  /**
   * Gets the ranks of a summoner
   *
   * @param summonerId - ID of the summoner in question
   * @param region - (optional) region
   */
  getRanks(
    summonerId: string,
    region?: Regions,
  ): Promise<LeaguePosition[]>;
}
