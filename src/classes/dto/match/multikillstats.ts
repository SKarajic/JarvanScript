import JarvanScript from "../../../jarvanscript";
import JarvanEnum from "../../enums";
import JarvanModelInterface from "../../interfaces";
import { DTO } from "../abstract/index";

export class MultiKillStats extends DTO implements JarvanModelInterface.Match.MultiKillStats {
  public hexaKills: number;
  public pentaKills: number;
  public quadraKills: number;
  public tripleKills: number;
  public doubleKills: number;

  public constructor(requestObject: any, region: JarvanEnum.Regions, wrapper: JarvanScript) {
    super(region, wrapper);
    const {
      doubleKills,
      tripleKills,
      quadraKills,
      pentaKills,
      unrealKills,
    } = requestObject;

    this.hexaKills = unrealKills;
    this.pentaKills = pentaKills;
    this.quadraKills = quadraKills;
    this.tripleKills = tripleKills;
    this.doubleKills = doubleKills;
  }
}
