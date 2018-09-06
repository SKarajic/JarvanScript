/**
 * Summoner's Profile Icon
 */
export default class ProfileIcon {
  public readonly id: number;

  /**
   * creates a Profile Icon object
   *
   * @param id - the Id of the Profile Icon
   */
  public constructor(id) {
    this.id = id;
  }

  /**
   * gets the URL to the image of the Icon
   *
   * @param patch - patch of the icon
   */
  public getURL(patch: string = "latest") {
    return `https://cdn.communitydragon.org/${patch}/profile-icon/${this.id}`;
  }
}
