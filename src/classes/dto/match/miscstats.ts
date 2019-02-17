import JarvanScript from "../../../jarvanscript";
import JarvanEnum from "../../enums";
import JarvanModelInterface from "../../interfaces";
import { DTO } from "../abstract/index";

export class MiscStats extends DTO implements JarvanModelInterface.Match.MiscStats {
  public totalHeal: number;
  public killingSprees: number;
  public totalUnitsHealed: number;
  public largestKillingSpree: number;
  public largestCriticalStrike: number;
  public longestTimeSpentLiving: number;
  public totalTimeCrowdControlDealt: number;

  public constructor(requestObject: any, region: JarvanEnum.Regions, wrapper: JarvanScript) {
    super(region, wrapper);
    const {
      totalHeal,
      killingSprees,
      totalUnitsHealed,
      largestKillingSpree,
      largestCriticalStrike,
      longestTimeSpentLiving,
      totalTimeCrowdControlDealt,
    } = requestObject;

    this.totalHeal = totalHeal;
    this.killingSprees = killingSprees;
    this.totalUnitsHealed = totalUnitsHealed;
    this.largestKillingSpree = largestKillingSpree;
    this.largestCriticalStrike = largestCriticalStrike;
    this.longestTimeSpentLiving = longestTimeSpentLiving;
    this.totalTimeCrowdControlDealt = totalTimeCrowdControlDealt;
  }
}
