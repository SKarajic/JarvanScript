import JarvanScript from "../../../jarvanscript";
import JarvanEnum from "../../enums";
import JarvanModelInterface from "../../interfaces";
import { DTO } from "../abstract/index";

export class DamageDealtStats extends DTO implements JarvanModelInterface.Match.DamageDealtStats {
  public trueDamageDealt: number;
  public totalDamageDealt: number;
  public magicDamageDealt: number;
  public physicalDamageDealt: number;
  public trueDamageDealtToChampions: number;
  public totalDamageDealtToChampions: number;
  public magicDamageDealtToChampions: number;
  public physicalDamageDealtToChampions: number;

  public constructor(requestObject: any, region: JarvanEnum.Regions, wrapper: JarvanScript) {
    super(region, wrapper);
    const {
      trueDamageDealt,
      totalDamageDealt,
      magicDamageDealt,
      physicalDamageDealt,
      trueDamageDealtToChampions,
      totalDamageDealtToChampions,
      magicDamageDealtToChampions,
      physicalDamageDealtToChampions,
    } = requestObject;

    this.trueDamageDealt = trueDamageDealt;
    this.totalDamageDealt = totalDamageDealt;
    this.magicDamageDealt = magicDamageDealt;
    this.physicalDamageDealt = physicalDamageDealt;
    this.trueDamageDealtToChampions = trueDamageDealtToChampions;
    this.totalDamageDealtToChampions = totalDamageDealtToChampions;
    this.magicDamageDealtToChampions = magicDamageDealtToChampions;
    this.physicalDamageDealtToChampions = physicalDamageDealtToChampions;
  }
}
