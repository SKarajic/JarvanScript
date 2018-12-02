import JarvanModelInterface from "../../interfaces";
import JarvanScript from "../../..";
import JarvanEnum from "../../enums";

import { DTO } from "../abstract";

/**
 * Summoner's mastery in a Champion
 */
export class ChampionMastery extends DTO implements JarvanModelInterface.ChampionMastery.ChampionMastery {
  public readonly chestGranted: boolean;
  public readonly level: number;
  public readonly points: number;
  public readonly id: number;
  public readonly summonerId: number;
  public readonly pointsUntilNextLevel: number;
  public readonly pointsSinceLastLevel: number;
  public readonly lastPlayTime: number;

  /**
   * Creates a ChampionMastery object
   *
   * @param requestObject
   * @param region
   * @param wrapper
   */
  public constructor(requestObject: any, region: JarvanEnum.Regions, wrapper: JarvanScript) {
    super(region, wrapper);
    const {
      chestGranted,
      championLevel,
      championPoints,
      championId,
      playerId,
      championPointsUntilNextLevel,
      championPointsSinceLastLevel,
      lastPlayTime,
    } = requestObject;

    this.pointsUntilNextLevel = championPointsUntilNextLevel;
    this.pointsSinceLastLevel = championPointsSinceLastLevel;
    this.lastPlayTime = lastPlayTime;
    this.chestGranted = chestGranted;
    this.points = championPoints;
    this.summonerId = playerId;
    this.level = championLevel;
    this.id = championId;
  }

  /**
   * Gets the Summoner from the ChampionMastery
   */
  public async getSummoner(): Promise<JarvanModelInterface.Summoner.Summoner> {
    return (await this.wrapper.summoner.getSummonerById(this.summonerId));
  }
}
