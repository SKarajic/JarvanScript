import { Regions } from "../../enums/regions";
import { Shard } from "../status/index";

/**
 * Status Wrapper
 */
export interface StatusWrapper {
  /**
   * Gets the status of a server
   *
   * @param region - (optional) region
   */
  getStatus(
    region?: Regions,
  ): Promise<Shard>;
}
