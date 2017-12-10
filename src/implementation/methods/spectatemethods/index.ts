import { RequestManager, RegionManager } from "../../managers";
import { Methods, Regions } from '../../../enums'
import { RequestInfo } from "../../../interfaces";
const methods = Methods.SPECTATOR;

export namespace SpectateMethods {

    /**
     * Gain spectating data of a summoner.
     * @param summonerId 
     * @param region 
     */
    export function spectateMatch(
        summonerId: number, 
        region: Regions = RegionManager.getInstance().getRegion()
    ): Promise<any> {
        return new Promise((resolve, reject) => {  
            let url = methods.ACTIVE_GAMES.BY_SUMMONER_ID.VALUE;
            RequestManager.getInstance().getDynamicData(url, {summonerId}, region)
            .then((data) => {
                resolve(JSON.parse(data));
            })
            .catch((err) => {
                reject(err);
            })
        });
    }

    /**
     * Get all featured matches.
     * @param region 
     */
    export function featuredMatches(
        region: Regions = RegionManager.getInstance().getRegion()
    ): Promise<any> {
        return new Promise((resolve, reject) => {  
            let url = methods.FEATURED_GAMES.VALUE;
            RequestManager.getInstance().getDynamicData(url, {}, region)
            .then((data) => {
                resolve(JSON.parse(data));
            })
            .catch((err) => {
                reject(err);
            })
        });
    }
}
