import JarvanEnum from "../classes/enums";
import JarvanModelInterface from "../classes/interfaces";
import JarvanScript from "../jarvanscript";

import { StatusMethods } from "../handlers/index";

/**
 * Status Wrapper
 */
export class StatusWrapper implements JarvanModelInterface.Wrapper.StatusWrapper {
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
    region?: JarvanEnum.Regions,
  ): Promise<JarvanModelInterface.Status.Shard> {
    return await StatusMethods.getStatus(
      this.wrapper, region);
  }
}
