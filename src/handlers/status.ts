import JarvanModelInterface from "../classes/interfaces";
import JarvanManager from "../classes/managers";
import JarvanEnum from "../classes/enums";
import JarvanDTO from "../classes/dto";
import JarvanScript from "..";

const methods = JarvanEnum.Methods.STATUS;

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
    region: JarvanEnum.Regions = JarvanManager.RegionManager.getInstance().getRegion(),
  ): Promise<JarvanModelInterface.Status.Shard> {
    const url = methods.VALUE;
    const data = await JarvanManager.RequestManager.getInstance()
      .getDynamicData(url, {}, region);

    return new JarvanDTO.Status.Shard(
      JSON.parse(data), region, wrapper);
  }
}
