import { RequestManager, RegionManager } from "../../managers";
import { Methods, Regions, Queues } from '../../../enums'
import { RequestInfo } from "../../../interfaces";
const methods = Methods.LEAGUE;

export namespace LeagueMethods {

    /**
     * Returns the challenger league.
     * @param queue the type of ranked queue
     * @param region the region of choice (optional)
     */
    export function getChallengerLeague(
        queue: string,
        region: Regions = RegionManager.getInstance().getRegion()
    ): Promise<any>  {
        return new Promise((resolve, reject) => {
            let url = methods.CHALLENGER_LEAGUES.BY_QUEUE.VALUE
            let validQueue = false;

            for (const key in Queues) {
                if (Queues[key] == queue) {
                    validQueue = true;
                }
            }

            if (validQueue) {
                RequestManager.getInstance().getDynamicData(url, {queue}, region)
                .then((data) => {
                    resolve(data);
                })
                .catch((err) => {
                    reject(err);
                })
            } else {
                reject(new Error(queue + ' is not a valid queue'));
            }
        }); 
    }
    
    /**
     * Returns the master league.
     * @param queue the type of ranked queue
     * @param region the region of choice (optional)
     */
    export function getMasterLeague(
        queue: string,
        region: Regions = RegionManager.getInstance().getRegion()
    ): Promise<any> {
        return new Promise((resolve, reject) => {
            let url = methods.MASTER_LEAGUES.BY_QUEUE.VALUE
            let validQueue = false;

            for (const key in Queues) {
                if (Queues[key] == queue) {
                    validQueue = true;
                }
            }

            if (validQueue) {
                RequestManager.getInstance().getDynamicData(url, {queue}, region)
                .then((data) => {
                    resolve(JSON.parse(data));
                })
                .catch((err) => {
                    reject(err);
                })
            } else {
                reject(new Error(queue + ' is not a valid queue'));
            }
        }); 
    }

    /**
     * Gets all the ranks of a summoner.
     * @param summonerId the ID of the summoner
     * @param region the region of choice (optional)
     */
    export function getRanks(
        summonerId: number,
        region: Regions = RegionManager.getInstance().getRegion()
    ): Promise<any> {
        return new Promise((resolve, reject) => {
            let url = methods.POSITIONS.BY_SUMMONER_ID.VALUE
            RequestManager.getInstance().getDynamicData(url, {summonerId}, region)
            .then((data) => {
                resolve(JSON.parse(data));
            })
            .catch((err) => {
                reject(err);
            })
        }); 
    }

    export function getLeague(
        leagueId: string,
        region: Regions = RegionManager.getInstance().getRegion()
    ): Promise<any> {
        return new Promise((resolve, reject) => {
            let url = methods.LEAGUES.BY_LEAGUE_ID.VALUE;
            RequestManager.getInstance().getDynamicData(url, {leagueId}, region)
            .then((data) => {
                resolve(JSON.parse(data));
            })
            .catch((err) => {
                reject(err);
            })
        }); 
    }
}
