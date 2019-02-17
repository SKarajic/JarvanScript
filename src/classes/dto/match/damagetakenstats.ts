import JarvanScript from "../../../jarvanscript";
import JarvanEnum from "../../enums";
import JarvanModelInterface from "../../interfaces";
import { DTO } from "../abstract/index";

export class DamageTakenStats extends DTO implements JarvanModelInterface.Match.DamageTakenStats {
  public trueDamageTaken: number;
  public totalDamageTaken: number;
  public magicalDamageTaken: number;
  public physicalDamageTaken: number;
  public damageSelfMitigated: number;

  public constructor(requestObject: any, region: JarvanEnum.Regions, wrapper: JarvanScript) {
    super(region, wrapper);
    const {
      trueDamageTaken,
      totalDamageTaken,
      magicalDamageTaken,
      physicalDamageTaken,
      damageSelfMitigated,
    } = requestObject;

    this.trueDamageTaken = trueDamageTaken;
    this.totalDamageTaken = totalDamageTaken;
    this.magicalDamageTaken = magicalDamageTaken;
    this.physicalDamageTaken = physicalDamageTaken;
    this.damageSelfMitigated = damageSelfMitigated;
  }
}
