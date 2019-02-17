import JarvanScript from "../../../jarvanscript";
import JarvanEnum from "../../enums";
import JarvanModelInterface from "../../interfaces";
import { DTO } from "../abstract/index";

export class MinionStats extends DTO implements JarvanModelInterface.Match.MinionStats {
  public totalMinionsKilled: number;
  public neutralMinionsKilled: number;
  public neutralMinionsKilledTeamJungle: number;
  public neutralMinionsKilledEnemyJungle: number;

  public constructor(requestObject: any, region: JarvanEnum.Regions, wrapper: JarvanScript) {
    super(region, wrapper);
    const {
      totalMinionsKilled,
      neutralMinionsKilled,
      neutralMinionsKilledTeamJungle,
      neutralMinionsKilledEnemyJungle,
    } = requestObject;

    this.totalMinionsKilled = totalMinionsKilled;
    this.neutralMinionsKilled = neutralMinionsKilled;
    this.neutralMinionsKilledTeamJungle = neutralMinionsKilledTeamJungle;
    this.neutralMinionsKilledEnemyJungle = neutralMinionsKilledEnemyJungle;
  }
}
