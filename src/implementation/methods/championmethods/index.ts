import { RequestManager, RegionManager } from "../../managers";
import { Methods, Regions } from '../../../enums'
import { RequestInfo } from "../../../interfaces";
const methods = Methods.CHAMPION;

export namespace ChampionMethods {

    /**
     * Returns a summary of all champions.
     * @param championId the ID of the champion (optional)
     * @param region the region of choice (optional)
     */
    export function getChampions(
        championId?: number, 
        region: Regions = RegionManager.getInstance().getRegion()
    ): Promise<any> {
        return new Promise((resolve, reject) => {  
            let url;
            if (championId != void 0) {
                url = methods.BY_CHAMPION_ID.VALUE;
            } else {
                url = methods.VALUE
            }
            RequestManager.getInstance().getDynamicData(url, {championId}, region)
            .then((data) => {
                resolve(JSON.parse(data));
            })
            .catch((err) => {
                reject(err);
            })
        });
    }
}
