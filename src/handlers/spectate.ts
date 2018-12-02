import JarvanManager from "../classes/managers";
import JarvanEnum from "../classes/enums";

const methods = JarvanEnum.Methods.SPECTATOR;

export namespace SpectateMethods {

  /**
   * Gain spectating data of a summoner.
   * @param summonerId
   * @param region
   */
  export function spectateMatch(
    summonerId: string,
    region: JarvanEnum.Regions = JarvanManager.RegionManager.getInstance().getRegion(),
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      const url = methods.ACTIVE_GAMES.BY_SUMMONER_ID.VALUE;
      JarvanManager.RequestManager
        .getInstance()
        .getDynamicData(url, {summonerId}, region)
        .then((data) => {
          resolve(JSON.parse(data));
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  /**
   * Get all featured matches.
   * @param region
   */
  export function featuredMatches(
    region: JarvanEnum.Regions = JarvanManager.RegionManager.getInstance().getRegion(),
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      const url = methods.FEATURED_GAMES.VALUE;
      JarvanManager.RequestManager
        .getInstance()
        .getDynamicData(url, {}, region)
        .then((data) => {
          resolve(JSON.parse(data));
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
