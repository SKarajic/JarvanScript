import { JarvanScript } from "../..";
import { Methods, RegionManager, Regions, RequestManager } from "../../models";
import { Summoner } from "./dto";

const methods = Methods.SUMMONER;

export namespace SummonerMethods {
  export async function getSummonerByAccountId(
    wrapper: JarvanScript,
    accountId: number,
    region: Regions = RegionManager.getInstance().getRegion()): Promise<Summoner> {
    const url = methods.BY_ACCOUNT_ID.VALUE;
    const data = await RequestManager.getInstance()
      .getDynamicData(url, {accountId}, region);

    return new Summoner(data, region, wrapper);
  }

  export async function getSummonerById(
    wrapper: JarvanScript,
    summonerId: number,
    region: Regions = RegionManager.getInstance().getRegion()): Promise<Summoner> {
    const url = methods.BY_SUMMONER_ID.VALUE;
    const data = JSON.parse(await RequestManager.getInstance()
      .getDynamicData(url, {summonerId}, region));

    return new Summoner(data, region, wrapper);
  }

  export async function getSummonerByName(
    wrapper: JarvanScript,
    summonerName: string,
    region: Regions = RegionManager.getInstance().getRegion()): Promise<Summoner> {
    const url = methods.BY_SUMMONER_NAME.VALUE;
    const data = await RequestManager.getInstance()
      .getDynamicData(url, {summonerName}, region);

    return new Summoner(data, region, wrapper);
  }
}
