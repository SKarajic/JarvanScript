import { ChampionInfo, Summoner } from "../..";
import { JarvanScript } from "../../..";
import { Regions } from "../../../models";
import { AbstractMethodClass } from "../../abstractmethod";

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
   * Creates a ChampionMastery object
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
   * Gets the ChampionInfo from the ChampionMastery
   */
  public async getChampionInfo(): Promise<ChampionInfo> {
    return (await this.wrapper.champion.getChampionsInfo(this.id))[0];
  }

  /**
   * Gets the Summoner from the ChampionMastery
   */
  public async getSummoner(): Promise<Summoner> {
    return (await this.wrapper.summoner.getSummonerById(this.summonerId));
  }
}
