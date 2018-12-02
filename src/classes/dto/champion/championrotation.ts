import JarvanModelInterface from "../../interfaces";
import JarvanScript from "../../..";
import JarvanEnum from "../../enums";

import { RotationChampion } from "./rotationchampion";
import { DTO } from "../abstract";

/**
 * Champion Rotation
 */
export class ChampionRotation extends DTO implements JarvanModelInterface.Champion.ChampionRotation {
  public readonly freeChampions: JarvanModelInterface.Champion.RotationChampion[];
  public readonly freeChampionsForNewPlayers: JarvanModelInterface.Champion.RotationChampion[];
  public readonly maximumNewPlayerLevel: number;

  /**
   * Creates a Champion Rotation object
   *
   * @param requestObject
   * @param region
   * @param wrapper
   */
  public constructor(
    requestObject: any, 
    region: JarvanEnum.Regions, 
    wrapper: JarvanScript
  ) {
    super(region, wrapper);
    const {
      freeChampionIds,
      freeChampionIdsForNewPlayers,
      maxNewPlayerLevel,
    } = requestObject;

    this.maximumNewPlayerLevel = maxNewPlayerLevel;
    this.freeChampionsForNewPlayers = freeChampionIdsForNewPlayers.map(id => new RotationChampion(id))
    this.freeChampions = freeChampionIds.map(id => new RotationChampion(id))
  }
}
