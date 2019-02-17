import JarvanScript from "../../../jarvanscript";
import JarvanEnum from "../../enums";
import JarvanModelInterface from "../../interfaces";
import { DTO } from "../abstract/index";

export class TeamBan extends DTO implements JarvanModelInterface.Match.TeamBan {
  public pickTurn: number;
  public championId: number;

  public constructor(requestObject: any, region: JarvanEnum.Regions, wrapper: JarvanScript) {
    super(region, wrapper);
    const {
      pickTurn,
      championId,
    } = requestObject;

    this.pickTurn = pickTurn;
    this.championId = championId;
  }
}
