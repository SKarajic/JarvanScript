import { RequestManager, RegionManager } from "../../managers";
import { Methods, Regions, Queues } from '../../../enums'
import { RequestInfo } from "../../../interfaces";
const methods = Methods.MATCH;

export namespace MatchMethods {
    export function getMatchList(
        accountId: number, 
        region: Regions = RegionManager.getInstance().getRegion()
    ): Promise<any> {
        return new Promise((resolve, reject) => {  
            let url = methods.MATCH_LISTS.BY_ACCOUNT_ID.VALUE;
            RequestManager.getInstance().getDynamicData(url, {accountId}, region)
            .then((data) => {
                resolve(JSON.parse(data));
            })
            .catch((err) => {
                reject(err);
            })
        });
    }
    
    export function getMatchInfo(
        matchId: number, 
        tournamentCode?: any,
        region: Regions = RegionManager.getInstance().getRegion()
    ) {
        return new Promise((resolve, reject) => {  
            let url = methods.MATCHES.BY_MATCH_ID.VALUE;
            if (tournamentCode != void 0) {
                url = methods.MATCHES.BY_MATCH_ID.BY_TOURNAMENT_CODE.VALUE;
            }
            RequestManager.getInstance().getDynamicData(url, {matchId, tournamentCode}, region)
            .then((data) => {
                resolve(JSON.parse(data));
            })
            .catch((err) => {
                reject(err);
            })
        });
    }

    export function getTournamentMatchIds(
        tournamentCode: any,
        region: Regions = RegionManager.getInstance().getRegion()
    ) {
        return new Promise((resolve, reject) => {  
            let url = methods.MATCHES.BY_TOURNAMENT_CODE.VALUE;
            RequestManager.getInstance().getDynamicData(url, {tournamentCode}, region)
            .then((data) => {
                resolve(JSON.parse(data));
            })
            .catch((err) => {
                reject(err);
            })
        });
    }

    export function getMatchTimeline(
        matchId: number, 
        region: Regions = RegionManager.getInstance().getRegion()
    ) {
        return new Promise((resolve, reject) => {  
            let url = methods.TIMELINES.BY_MATCH_ID.VALUE;
            
            RequestManager.getInstance().getDynamicData(url, {matchId}, region)
            .then((data) => {
                resolve(JSON.parse(data));
            })
            .catch((err) => {
                reject(err);
            })
        });
    }
    
}
