import JarvanScript from "../../../jarvanscript";
import JarvanEnum from "../../enums";
import JarvanModelInterface from "../../interfaces";
import { DTO } from "../abstract";

export class MatchReference extends DTO implements JarvanModelInterface.Match.MatchReference {
  public platformId: string;
  public championId: number;
  public gameId: any;
  public queueId: number;
  public seasonId: number;
  public timestamp: any;
  public role: string;
  public lane: string;

  public constructor(requestObject: any, region: JarvanEnum.Regions, wrapper: JarvanScript) {
    super(region, wrapper);
    const {
      platformId,
      timestamp,
      champion,
      season,
      gameId,
      queue,
      role,
      lane,
    } = requestObject;

    this.platformId = platformId;
    this.championId = champion;
    this.timestamp = timestamp;
    this.seasonId = season;
    this.queueId = queue;
    this.gameId = gameId;
    this.role = role;
    this.lane = lane;
  }
}
