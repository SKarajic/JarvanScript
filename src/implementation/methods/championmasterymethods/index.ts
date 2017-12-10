import { RequestManager, RegionManager } from "../../managers";
import { ChampionMastery } from './classes';
import { Methods, Regions } from '../../../enums'
import { RequestInfo } from "../../../interfaces";
const methods = Methods.CHAMPION_MASTERY;
const reqManager = RequestManager.getInstance();
const regManager = RegionManager.getInstance();

export namespace ChampionMasteryMethods {
    
    /**
     * Returns one or all Champion Masteries of a summoner.
     * @param summonerId the ID of the summoner
     * @param championId the ID of the champion (optional)
     * @param region the region of choice (optional)
     */
    export async function getChampionMasteries(
        summonerId: number, 
        championId?: number, 
        region: Regions = regManager.getRegion()
    ) : Promise<ChampionMastery[]> {
        let url;
        if (championId != void 0) {
            url = methods.CHAMPION_MASTERIES.BY_SUMMONER_ID.BY_CHAMPION_ID.VALUE;
        } else {
            url = methods.CHAMPION_MASTERIES.BY_SUMMONER_ID.VALUE;
        }
        let data = JSON.parse(await reqManager.getDynamicData(url, {summonerId, championId}, region));
        let championMasteryList: Array<ChampionMastery> = [];
        if (Array.isArray(data)) {
            data.forEach(element => championMasteryList.push(new ChampionMastery(element, region)));
        } else {
            championMasteryList.push(new ChampionMastery(data, region))
        }
        return championMasteryList;
    }
    
    /**
     * Returns the combined level of all the Champion Masteries of a summoner
     * @param summonerId the ID of the summoner
     * @param region the region of choice (optional)
     */
    export async function getChampionMasteryScore(
        summonerId: number,
        region: Regions = RegionManager.getInstance().getRegion()
    ): Promise<number> {
        let url = methods.SCORES.BY_SUMMONER_ID.VALUE;
        return parseInt(await RequestManager.getInstance().getDynamicData(url, {summonerId}, region));
    }
}
