import JarvanScript from "../../../jarvanscript";
import JarvanEnum from "../../enums";
import JarvanModelInterface from "../../interfaces";
import { DTO } from "../abstract/index";

export class MatchReference extends DTO implements JarvanModelInterface.Match.MatchReference {
  public role: string;
  public lane: string;
  public matchId: number;
  public queueId: number;
  public seasonId: number;
  public timestamp: number;
  public platformId: string;
  public championId: number;

  public constructor(requestObject: any, region: JarvanEnum.Regions, wrapper: JarvanScript) {
    super(region, wrapper);
    const {
      role,
      lane,
      queue,
      gameId,
      season,
      champion,
      timestamp,
      platformId,
    } = requestObject;

    this.role = role;
    this.lane = lane;
    this.queueId = queue;
    this.matchId = gameId;
    this.seasonId = season;
    this.timestamp = timestamp;
    this.championId = champion;
    this.platformId = platformId;
  }
}
