import Axios from "axios";
import { KeyManager, RegionManager, Regions } from "../..";
import { IRequestInfo } from "../../../interfaces";

/**
 * A manager that manages the requests and rate limits
 */
export class RequestManager {

  /**
   * Gets the RequestManager singleton instance.
   */
  public static getInstance(): RequestManager {
    return RequestManager.instance;
  }

  private static instance: RequestManager = new RequestManager();

  /**
   * Instantiates the RequestManager singleton if it doesn't exist, else
   * it throw an error telling to use the getInstance() method instead.
   */
  constructor() {
    if (RequestManager.instance) {
      throw new Error(
        "Instantiation failed: Use the " +
        "getInstance() method instead of new.",
      );
    }
    RequestManager.instance = this;
  }

  public async getDynamicData(
    url: string,
    requestInfo: IRequestInfo,
    region: Regions,
  ): Promise<any|any[]> {
    try {
      url = url.replace("{region}", region);
      for (const key in requestInfo) {
        if ((requestInfo as any)[key]) {
          url = url.replace(`{${key}}`, (requestInfo as any)[key]);
        }
      }

      const { data } = await Axios.get(url, {
        headers: {
          "X-Riot-Token": KeyManager.getInstance().getKey(),
        },
      });

      return JSON.stringify(data);
    } catch (e) {
      if (e.response.status === 404) { return null; } else { throw e; }
    }
  }

  public getStaticData(
    url: string,
    requestInfo?: object,
    tags?: object,
    byId: boolean = false,
    region: Regions = RegionManager.getInstance().getRegion(),
  ) {
    throw new Error("getStaticData is not implemented yet");
  }
}
