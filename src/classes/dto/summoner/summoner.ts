import JarvanScript from "../../../jarvanscript";
import JarvanEnum from "../../enums";
import JarvanModelInterface from "../../interfaces";

import { DTO } from "../abstract/index";
import { ProfileIcon } from "./profileicon";

/**
 * Summoner
 */
export class Summoner extends DTO implements JarvanModelInterface.Summoner.Summoner {
  public readonly id: string;
  public readonly accountId: string;
  public readonly name: string;
  public readonly profileIcon: ProfileIcon;
  public readonly level: number;
  public readonly revisionDate: Date;

  /**
   * Creates a Summoner
   *
   * @param requestObject
   * @param region
   * @param wrapper
   */
  public constructor(requestObject: any, region: JarvanEnum.Regions, wrapper: JarvanScript) {
    super(region, wrapper);
    const {
      id,
      name,
      accountId,
      revisionDate,
      profileIconId,
      summonerLevel,
    } = requestObject;

    this.id = id;
    this.name = name;
    this.level = summonerLevel;
    this.accountId = accountId;
    this.revisionDate = new Date(revisionDate);
    this.profileIcon = new ProfileIcon(profileIconId);
  }
}
