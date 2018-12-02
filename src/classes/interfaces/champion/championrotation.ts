import { RotationChampion } from "./rotationchampion";

/**
 * Champion Rotation
 */
export interface ChampionRotation {
  readonly freeChampions: RotationChampion[];
  readonly freeChampionsForNewPlayers: RotationChampion[];
  readonly maximumNewPlayerLevel: number;
}
