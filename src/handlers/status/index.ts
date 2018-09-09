import JarvanScript from "../../jarvanscript";
import { Methods, RegionManager, Regions, RequestManager } from "../../models";
import { Shard } from "./dto";
const methods = Methods.STATUS;

/**
 * Methods handling the LOL-STATUS-V3 endpoints
 */
export namespace StatusMethods {

  /**
   * Gets the status of a server
   *
   * @param wrapper - the wrapper
   * @param region - (optional) region
   */
  export async function getStatus(
    wrapper: JarvanScript,
    region: Regions = RegionManager.getInstance().getRegion(),
  ): Promise<Shard> {
    const url = methods.VALUE;
    const data = await RequestManager.getInstance()
      .getDynamicData(url, {}, region);

    return new Shard(
      JSON.parse(data), region, wrapper);
  }
}
