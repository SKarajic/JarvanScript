import JarvanModelInterface from "../../interfaces";
import JarvanScript from "../../..";
import JarvanEnum from "../../enums";

import { ProfileIcon } from "./profileicon";
import { DTO } from "../abstract";

/**
 * Summoner
 */
export class Summoner extends DTO implements JarvanModelInterface.Summoner.Summoner {
  public readonly id: number;
  public readonly accountId: number;
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
