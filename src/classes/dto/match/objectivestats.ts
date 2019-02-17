import JarvanScript from "../../../jarvanscript";
import JarvanEnum from "../../enums";
import JarvanModelInterface from "../../interfaces";
import { DTO } from "../abstract/index";

export class ObjectiveStats extends DTO implements JarvanModelInterface.Match.ObjectiveStats {
  public goldSpent: number;
  public goldEarned: number;
  public visionScore: number;
  public turretKills: number;
  public wardsPlaced: number;
  public wardsKilled: number;
  public inhibitorKills: number;
  public timeCCingOthers: number;
  public damageDealtToTurrets: number;
  public sightWardsBoughtInGame: number;
  public damageDealtToObjectives: number;
  public visionWardsBoughtInGame: number;

  public constructor(requestObject: any, region: JarvanEnum.Regions, wrapper: JarvanScript) {
    super(region, wrapper);
    const {
      visionScore,
      goldEarned,
      goldSpent,
      turretKills,
      wardsPlaced,
      wardsKilled,
      inhibitorKills,
      timeCCingOthers,
      damageDealtToTurrets,
      sightWardsBoughtInGame,
      damageDealtToObjectives,
      visionWardsBoughtInGame,
    } = requestObject;

    this.goldSpent = goldSpent;
    this.goldEarned = goldEarned;
    this.wardsPlaced = wardsPlaced;
    this.wardsKilled = wardsKilled;
    this.visionScore = visionScore;
    this.turretKills = turretKills;
    this.inhibitorKills = inhibitorKills;
    this.timeCCingOthers = timeCCingOthers;
    this.damageDealtToTurrets = damageDealtToTurrets;
    this.sightWardsBoughtInGame = sightWardsBoughtInGame;
    this.damageDealtToObjectives = damageDealtToObjectives;
    this.visionWardsBoughtInGame = visionWardsBoughtInGame;
  }
}
