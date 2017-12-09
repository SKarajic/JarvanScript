import { RegionManager } from "../../managers";
import { RequestManager } from '../../managers/requestmanager';
import { Methods, Regions } from '../../../enums'
import { RequestInfo } from "../../../interfaces/requestinfo";

const methods = Methods.CHAMPION_MASTERY;

export namespace ChampionMasteryMethods {
    export function getChampionMasteries(
        summonerId: number, 
        championId?: number, 
        region: Regions = RegionManager.getInstance().getRegion()
    ): Promise<any> {
        return new Promise((resolve, reject) => {  
            let url;
            if (championId != void 0) {
                url = methods
                        .CHAMPION_MASTERIES
                        .BY_SUMMONER_ID
                        .BY_CHAMPION_ID
                        .VALUE;
            } else {
                url = methods.
                        CHAMPION_MASTERIES
                        .BY_SUMMONER_ID
                        .VALUE;
            }
            RequestManager.getInstance().getDynamicData(
                url, 
                {summonerId, championId}, 
                region
            )
            .then((data) => {
                resolve(data);
            })
            .catch((err) => {
                reject(err);
            })
        })
    }
    export function getChampionMasteryScores(summonerId: number) {}
}
