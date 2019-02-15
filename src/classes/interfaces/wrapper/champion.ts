import { Regions } from "../../enums/regions";
import { ChampionRotation } from "../champion/index";

/**
 * Champion Wrapper
 */
export interface ChampionWrapper {

  /**
   * Gets the current Champion Rotation
   *
   * @param region - (optional) region
   */
  getChampionsInfo(
    region?: Regions,
  ): Promise<ChampionRotation>;
}
