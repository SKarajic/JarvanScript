import { RequestManager, RegionManager } from "../../managers";
import { Methods, Regions } from '../../../enums';
import { RequestInfo } from "../../../interfaces";
import { ChampionInfo } from './classes';
const methods = Methods.CHAMPION;
const reqManager = RequestManager.getInstance();
const regManager = RegionManager.getInstance();

export namespace ChampionMethods {

    /**
     * Returns information of one or all champions.
     * @param championId the ID of the champion (optional)
     * @param region the region of choice (optional)
     */
    export async function getChampions(
        championId?: number, 
        region: Regions = regManager.getRegion()
    ): Promise<ChampionInfo[]> {
        let url;
        if (championId != void 0) {
            url = methods.BY_CHAMPION_ID.VALUE;
        } else {
            url = methods.VALUE
        }
        let data = JSON.parse(await reqManager.getDynamicData(url, {championId}, region));
        let championList: ChampionInfo[] = [];
        if (data.champions) {
            data.champions.forEach((element: any) => championList.push(new ChampionInfo(element, region)));
        } else {
            championList.push(new ChampionInfo(data, region))
        }
        return championList;
    }
}
