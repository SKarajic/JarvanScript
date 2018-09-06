import { Methods, Regions } from "../../../enums";
import { IRequestInfo } from "../../../interfaces";
import { RegionManager, RequestManager } from "../../managers";
const methods = Methods.SUMMONER;

export namespace SummonerMethods {
  export function getSummonerByAccountId(
    accountId: number,
    region: Regions = RegionManager.getInstance().getRegion(),
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      const url = methods.BY_ACCOUNT_ID.VALUE;
      RequestManager.getInstance().getDynamicData(url, {accountId}, region)
        .then((data) => {
          resolve(JSON.parse(data));
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
    
  export function getSummonerById(
    summonerId: number,
    region: Regions = RegionManager.getInstance().getRegion(),
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      const url = methods.BY_SUMMONER_ID.VALUE;
      RequestManager.getInstance().getDynamicData(url, {summonerId}, region)
        .then((data) => {
          resolve(JSON.parse(data));
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
      
  export function getSummonerByName(
    summonerName: string,
    region: Regions = RegionManager.getInstance().getRegion(),
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      const url = methods.BY_SUMMONER_NAME.VALUE;
      RequestManager.getInstance().getDynamicData(url, {summonerName}, region)
        .then((data) => {
          resolve(JSON.parse(data));
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
      