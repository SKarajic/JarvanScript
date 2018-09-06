import JarvanScript from "../../../jarvanscript";
import { Regions } from "../../../models/enums";
import { AbstractMethodClass } from "../../abstractmethod";
import ProfileIcon from "./profileicon";

/**
 * Summoner
 */
export default class Summoner extends AbstractMethodClass {
  public readonly id: number;
  public readonly accountId: number;
  public readonly name: string;
  public readonly profileIcon: ProfileIcon;
  public readonly level: number;
  public readonly revisionDate: Date;

  /**
   * creates a Summoner
   *
   * @param requestObject
   * @param region
   * @param wrapper
   */
  public constructor(requestObject: any, region: Regions, wrapper: JarvanScript) {
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
