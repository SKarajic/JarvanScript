import JarvanScript from "../../../jarvanscript";
import JarvanEnum from "../../enums";
import JarvanModelInterface from "../../interfaces";
import { DTO } from "../abstract/index";

export class FirstStats extends DTO implements JarvanModelInterface.Match.FirstStats {
  public firstBloodKill: boolean;
  public firstBloodAssist: boolean;
  public firstTowerKill: boolean;
  public firstTowerAssist: boolean;
  public firstInhibitorKill: boolean;
  public firstInhibitorAssist: boolean;

  public constructor(requestObject: any, region: JarvanEnum.Regions, wrapper: JarvanScript) {
    super(region, wrapper);
    const {
      firstBloodKill,
      firstBloodAssist,
      firstTowerKill,
      firstTowerAssist,
      firstInhibitorKill,
      firstInhibitorAssist,
    } = requestObject;

    this.firstBloodKill = firstBloodKill;
    this.firstTowerKill = firstTowerKill;
    this.firstBloodAssist = firstBloodAssist;
    this.firstTowerAssist = firstTowerAssist;
    this.firstInhibitorKill = firstInhibitorKill;
    this.firstInhibitorAssist = firstInhibitorAssist;
  }
}
