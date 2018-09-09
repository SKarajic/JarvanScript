import { JarvanScript } from "../../..";
import { Regions } from "../../../models";
import { AbstractMethodClass } from "../../abstractmethod";

/**
 * General Champion status info
 */
export default class ChampionInfo extends AbstractMethodClass {
  public readonly rankedEnabled: boolean;
  public readonly customBotEnabled: boolean;
  public readonly coopBotEnabled: boolean;
  public readonly active: boolean;
  public readonly freeToPlay: boolean;
  public readonly id: number;

  /**
   * Creates a ChampionInfo object
   *
   * @param requestObject
   * @param region
   * @param wrapper
   */
  public constructor(requestObject: any, region: Regions, wrapper: JarvanScript) {
    super(region, wrapper);
    const {
      rankedPlayEnabled,
      botEnabled,
      botMmEnabled,
      active,
      freeToPlay,
      id,
    } = requestObject;

    this.rankedEnabled = rankedPlayEnabled;
    this.customBotEnabled = botEnabled;
    this.coopBotEnabled = botMmEnabled;
    this.freeToPlay = freeToPlay;
    this.active = active;
    this.id = id;
  }
}
