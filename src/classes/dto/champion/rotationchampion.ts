import JarvanModelInterface from "../../interfaces";

/**
 * Rotation Champion
 */
export class RotationChampion implements JarvanModelInterface.Champion.RotationChampion {
  public readonly id: number;

  /**
   * Creates a RotationChampion object
   *
   * @param id
   */
  public constructor(id: number) {
    this.id = id;
  }
}
