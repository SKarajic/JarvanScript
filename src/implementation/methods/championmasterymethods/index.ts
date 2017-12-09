import { RequestManager, RegionManager } from "../../managers";
import { Methods, Regions } from '../../../enums'
import { RequestInfo } from "../../../interfaces";
const methods = Methods.CHAMPION_MASTERY;

export namespace ChampionMasteryMethods {

    /**
     * Returns one or all Champion Masteries of a summoner.
     * @param summonerId the ID of the summoner
     * @param championId the ID of the champion (optional)
     * @param region the region of choice (optional)
     */
    export function getChampionMasteries(
        summonerId: number, 
        championId?: number, 
        region: Regions = RegionManager.getInstance().getRegion()
    ): Promise<any> {
        return new Promise((resolve, reject) => {  
            let url;
            if (championId != void 0) {
                url = methods.CHAMPION_MASTERIES.BY_SUMMONER_ID.BY_CHAMPION_ID.VALUE;
            } else {
                url = methods.CHAMPION_MASTERIES.BY_SUMMONER_ID.VALUE;
            }
            RequestManager.getInstance().getDynamicData(url, {summonerId, championId}, region)
            .then((data) => {
                resolve(data);
            })
            .catch((err) => {
                reject(err);
            })
        })
    }

    /**
     * Returns the combined level of all the Champion Masteries of a summoner
     * @param summonerId the ID of the summoner
     * @param region the region of choice (optional)
     */
    export function getChampionMasteryScore(
        summonerId: number,
        region: Regions = RegionManager.getInstance().getRegion()
    ): Promise<number> {
        return new Promise((resolve, reject) => {
            let url = methods.SCORES.BY_SUMMONER_ID.VALUE;
            RequestManager.getInstance().getDynamicData(url, {summonerId}, region)
            .then((data) => {
                resolve(parseInt(data));
            })
            .catch((err) => {
                reject(err);
            })
        })
    }
}
