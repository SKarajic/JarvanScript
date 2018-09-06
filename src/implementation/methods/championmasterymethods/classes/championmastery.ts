import { ChampionInfo, Summoner } from "../..";
import { Regions } from "../../../../enums";
import JarvanScript from "../../../jarvanscript";
import { AbstractMethodClass } from "../../abstractmethodclass";

/**
 * Summoner's mastery in a Champion
 */
export default class ChampionMastery extends AbstractMethodClass {
  public readonly chestGranted: boolean;
  public readonly level: number;
  public readonly points: number;
  public readonly id: number;
  public readonly summonerId: number;
  public readonly pointsUntilNextLevel: number;
  public readonly pointsSinceLastLevel: number;
  public readonly lastPlayTime: number;

  /**
   * creates a ChampionMastery object
   *
   * @param requestObject
   * @param region
   * @param wrapper
   */
  constructor(requestObject: any, region: Regions, wrapper: JarvanScript) {
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
   * gets the ChampionInfo from the ChampionMastery
   */
  public async getChampionInfo(): Promise<ChampionInfo> {
    return (await this.wrapper.champion.getChampions(this.id))[0];
  }

  /**
   * gets the Summoner from the ChampionMastery
   */
  public async getSummoner(): Promise<Summoner> {
    return (await this.wrapper.summoner.getSummonerById(this.summonerId));
  }
}
