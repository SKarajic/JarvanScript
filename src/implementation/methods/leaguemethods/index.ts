import { RequestManager, RegionManager } from "../../managers";
import { Methods, Regions, Queues } from '../../../enums'
import { RequestInfo } from "../../../interfaces";
import { LeagueList, LeaguePosition } from './classes';
const methods = Methods.LEAGUE;
const regManager = RegionManager.getInstance();
const reqManager = RequestManager.getInstance();

export namespace LeagueMethods {

    /**
     * Returns the challenger league.
     * @param queue the type of ranked queue
     * @param region the region of choice (optional)
     */
    export async function getChallengerLeague(
        queue: string,
        region: Regions = regManager.getRegion()
    ): Promise<LeagueList>  {
        let url = methods.CHALLENGER_LEAGUES.BY_QUEUE.VALUE
        let validQueue = false;

        for (const key in Queues) {
            if (Queues[key] == queue) {
                validQueue = true;
            }
        }

        if (validQueue) {
            let data = JSON.parse(await reqManager.getDynamicData(url, {queue}, region));
            return new LeagueList(data, region);
        } else {
            throw new Error(queue + ' is not a valid queue');
        }
    }
    
    /**
     * Returns the master league.
     * @param queue the type of ranked queue
     * @param region the region of choice (optional)
     */
    export async function getMasterLeague(
        queue: string,
        region: Regions = regManager.getRegion()
    ): Promise<LeagueList> {
        let url = methods.MASTER_LEAGUES.BY_QUEUE.VALUE
        let validQueue = false;

        for (const key in Queues) {
            if (Queues[key] == queue) {
                validQueue = true;
            }
        }

        if (validQueue) {
            let data = JSON.parse(await reqManager.getDynamicData(url, {queue}, region));
            return new LeagueList(data, region);
        } else {
            throw new Error(queue + ' is not a valid queue');
        }
    }

    /**
     * Gets all the ranks of a summoner.
     * @param summonerId the ID of the summoner
     * @param region the region of choice (optional)
     */
    export async function getRanks(
        summonerId: number,
        region: Regions = regManager.getRegion()
    ): Promise<LeaguePosition[]> {
        let url = methods.POSITIONS.BY_SUMMONER_ID.VALUE;
        let data = JSON.parse(await reqManager.getDynamicData(url, {summonerId}, region));
        let positionList: LeaguePosition[] = [];
        data.forEach((element: any) => {
            positionList.push(new LeaguePosition(element, region));
        });
        return positionList;
    }

    export async function getLeague(
        leagueId: string,
        region: Regions = regManager.getRegion()
    ): Promise<LeagueList> {
        let url = methods.LEAGUES.BY_LEAGUE_ID.VALUE;
        let data = JSON.parse(await reqManager.getDynamicData(url, {leagueId}, region));
        return new LeagueList(data, region);
    }
}
