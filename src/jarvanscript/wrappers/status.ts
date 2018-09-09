import JarvanScript from "..";
import { Regions } from "../..";
import { Shard, StatusMethods } from "../../handlers";

/**
 * Status Wrapper
 */
export default class StatusWrapper {
  private wrapper: JarvanScript;

  /**
   * Creates a Status Wrapper
   *
   * @param wrapper - the JarvanScript wrapper
   */
  public constructor(wrapper: JarvanScript) {
    this.wrapper = wrapper;
  }

  /**
   * Gets the status of a server
   *
   * @param region - (optional) region
   */
  public async getStatus(region?: Regions): Promise<Shard> {
    return await StatusMethods.getStatus(
      this.wrapper, region);
  }
}
