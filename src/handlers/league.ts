import JarvanModelInterface from "../classes/interfaces";
import JarvanManager from "../classes/managers";
import JarvanEnum from "../classes/enums";
import JarvanDTO from "../classes/dto";
import JarvanScript from "..";

const methods = JarvanEnum.Methods.LEAGUE;
const regManager = JarvanManager.RegionManager.getInstance();
const reqManager = JarvanManager.RequestManager.getInstance();

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
    region: JarvanEnum.Regions = regManager.getRegion(),
  ): Promise<JarvanModelInterface.League.LeagueList>  {
    const url = methods.CHALLENGER_LEAGUES.BY_QUEUE.VALUE;
    let validQueue = false;

    for (const key in JarvanEnum.Queues) {
      if (JarvanEnum.Queues[key] === queue) {
        validQueue = true;
      }
    }

    if (validQueue) {
      const data = JSON.parse(await reqManager.getDynamicData(url, {queue}, region));
      return new JarvanDTO.League.LeagueList(data, region, wrapper);
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
    region: JarvanEnum.Regions = regManager.getRegion(),
  ): Promise<JarvanModelInterface.League.LeagueList> {
    const url = methods.MASTER_LEAGUES.BY_QUEUE.VALUE;
    let validQueue = false;

    for (const key in JarvanEnum.Queues) {
      if (JarvanEnum.Queues[key] === queue) {
        validQueue = true;
      }
    }

    if (validQueue) {
      const data = JSON.parse(await reqManager.getDynamicData(url, {queue}, region));
      return new JarvanDTO.League.LeagueList(data, region, wrapper);
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
    summonerId: string,
    region: JarvanEnum.Regions = regManager.getRegion(),
  ): Promise<JarvanModelInterface.League.LeaguePosition[]> {
    const url = methods.POSITIONS.BY_SUMMONER_ID.VALUE;
    const data = JSON.parse(await reqManager.getDynamicData(url, {summonerId}, region));
    const positionList: JarvanDTO.League.LeaguePosition[] = [];
    data.forEach((element: any) => {
      positionList.push(new JarvanDTO.League.LeaguePosition(element, region, wrapper));
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
    region: JarvanEnum.Regions = regManager.getRegion(),
  ): Promise<JarvanModelInterface.League.LeagueList> {
    const url = methods.LEAGUES.BY_LEAGUE_ID.VALUE;
    const data = JSON.parse(await reqManager.getDynamicData(url, {leagueId}, region));
    return new JarvanDTO.League.LeagueList(data, region, wrapper);
  }
}
