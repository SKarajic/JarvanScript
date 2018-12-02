import JarvanModelInterface from "../classes/interfaces";
import JarvanEnum from "../classes/enums";
import JarvanScript from "..";

import { StatusMethods } from "../handlers";

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
  public async getStatus(
    region?: JarvanEnum.Regions
  ): Promise<JarvanModelInterface.Status.Shard> {
    return await StatusMethods.getStatus(
      this.wrapper, region);
  }
}
