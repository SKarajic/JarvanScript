import JarvanModelInterface from "../../interfaces";

/**
 * Summoner's Profile Icon
 */
export class ProfileIcon implements JarvanModelInterface.Summoner.ProfileIcon {
  public readonly id: number;

  /**
   * Creates a Profile Icon object
   *
   * @param id - the Id of the Profile Icon
   */
  public constructor(id) {
    this.id = id;
  }

  /**
   * Gets the URL to the image of the Icon
   *
   * @param patch - (optional) patch of the icon
   */
  public getURL(patch: string = "latest") {
    return `https://cdn.communitydragon.org/${patch}/profile-icon/${this.id}`;
  }
}
