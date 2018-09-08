import { JarvanScript } from "../..";
import { Methods, Queues, RegionManager, Regions, RequestManager } from "../../models";
import { LeagueList, LeaguePosition } from "./dto";

const methods = Methods.LEAGUE;
const regManager = RegionManager.getInstance();
const reqManager = RequestManager.getInstance();

/**
 * Methods handling the LEAGUE-V3 endpoints
 */
export namespace LeagueMethods {

  /**
   * Returns the challenger league.
   *
   * @param wrapper - the wrapper
   * @param queue - the type of ranked queue
   * @param region - (optional) the region of choice
   */
  export async function getChallengerLeague(
    wrapper: JarvanScript,
    queue: string,
    region: Regions = regManager.getRegion(),
  ): Promise<LeagueList>  {
    const url = methods.CHALLENGER_LEAGUES.BY_QUEUE.VALUE;
    let validQueue = false;

    for (const key in Queues) {
      if (Queues[key] === queue) {
        validQueue = true;
      }
    }

    if (validQueue) {
      const data = JSON.parse(await reqManager.getDynamicData(url, {queue}, region));
      return new LeagueList(data, region, wrapper);
    } else {
      throw new Error(queue + " is not a valid queue");
    }
  }

  /**
   * Returns the master league.
   *
   * @param wrapper - the wrapper
   * @param queue - the type of ranked queue
   * @param region - (optional) the region of choice
   */
  export async function getMasterLeague(
    wrapper: JarvanScript,
    queue: string,
    region: Regions = regManager.getRegion(),
  ): Promise<LeagueList> {
    const url = methods.MASTER_LEAGUES.BY_QUEUE.VALUE;
    let validQueue = false;

    for (const key in Queues) {
      if (Queues[key] === queue) {
        validQueue = true;
      }
    }

    if (validQueue) {
      const data = JSON.parse(await reqManager.getDynamicData(url, {queue}, region));
      return new LeagueList(data, region, wrapper);
    } else {
      throw new Error(queue + " is not a valid queue");
    }
  }

  /**
   * Gets all the ranks of a summoner.
   *
   * @param wrapper - the wrapper
   * @param summonerId - the ID of the summoner
   * @param region - (optional) the region of choice
   */
  export async function getRanks(
    wrapper: JarvanScript,
    summonerId: number,
    region: Regions = regManager.getRegion(),
  ): Promise<LeaguePosition[]> {
    const url = methods.POSITIONS.BY_SUMMONER_ID.VALUE;
    const data = JSON.parse(await reqManager.getDynamicData(url, {summonerId}, region));
    const positionList: LeaguePosition[] = [];
    data.forEach((element: any) => {
      positionList.push(new LeaguePosition(element, region, wrapper));
    });
    return positionList;
  }

  /**
   * Gets a League
   *
   * @param wrapper - the wrapper
   * @param leagueId - the ID of the league
   * @param region - (optional) the region of choice
   */
  export async function getLeague(
    wrapper: JarvanScript,
    leagueId: string,
    region: Regions = regManager.getRegion(),
  ): Promise<LeagueList> {
    const url = methods.LEAGUES.BY_LEAGUE_ID.VALUE;
    const data = JSON.parse(await reqManager.getDynamicData(url, {leagueId}, region));
    return new LeagueList(data, region, wrapper);
  }
}
