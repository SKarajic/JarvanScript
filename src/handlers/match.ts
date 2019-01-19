import JarvanScript from "..";
import JarvanDTO from "../classes/dto";
import JarvanEnum from "../classes/enums";
import JarvanModelInterface from "../classes/interfaces";
import JarvanManager from "../classes/managers";

const methods = JarvanEnum.Methods.MATCH;

export namespace MatchMethods {
  export async function getMatchList(
    wrapper: JarvanScript,
    accountId: string,
    region: JarvanEnum.Regions = JarvanManager.RegionManager.getInstance().getRegion(),
  ): Promise<JarvanModelInterface.Match.MatchList> {
    const url = methods.MATCH_LISTS.BY_ACCOUNT_ID.VALUE;
    const data = JSON.parse(await JarvanManager.RequestManager.getInstance()
      .getDynamicData(url, {accountId}, region));

    return new JarvanDTO.Match.MatchList(data, region, wrapper);
  }

  export function getMatchInfo(
    matchId: number,
    tournamentCode?: any,
    region: JarvanEnum.Regions = JarvanManager.RegionManager.getInstance().getRegion(),
  ) {
    return new Promise((resolve, reject) => {
      let url = methods.MATCHES.BY_MATCH_ID.VALUE;
      if (tournamentCode !== void 0) {
        url = methods.MATCHES.BY_MATCH_ID.BY_TOURNAMENT_CODE.VALUE;
      }
      JarvanManager.RequestManager
        .getInstance()
        .getDynamicData(url, {matchId, tournamentCode}, region)
        .then((data) => {
          resolve(JSON.parse(data));
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  export function getTournamentMatchIds(
    tournamentCode: any,
    region: JarvanEnum.Regions = JarvanManager.RegionManager.getInstance().getRegion(),
  ) {
    return new Promise((resolve, reject) => {
      const url = methods.MATCHES.BY_TOURNAMENT_CODE.VALUE;
      JarvanManager.RequestManager
        .getInstance()
        .getDynamicData(url, {tournamentCode}, region)
        .then((data) => {
          resolve(JSON.parse(data));
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  export function getMatchTimeline(
    matchId: number,
    region: JarvanEnum.Regions = JarvanManager.RegionManager.getInstance().getRegion(),
  ) {
    return new Promise((resolve, reject) => {
      const url = methods.TIMELINES.BY_MATCH_ID.VALUE;
      JarvanManager.RequestManager
        .getInstance()
        .getDynamicData(url, {matchId}, region)
        .then((data) => {
          resolve(JSON.parse(data));
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
