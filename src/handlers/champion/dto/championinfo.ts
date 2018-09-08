import { JarvanScript } from "../../..";
import { Regions } from "../../../models";
import { AbstractMethodClass } from "../../abstractmethod";

/**
 * General Champion status info
 */
export default class ChampionInfo extends AbstractMethodClass {
  public rankedEnabled: boolean;
  public customBotEnabled: boolean;
  public coopBotEnabled: boolean;
  public active: boolean;
  public freeToPlay: boolean;
  public id: number;

  /**
   * Creates a ChampionInfo object
   *
   * @param requestObject
   * @param region
   * @param wrapper
   */
  constructor(requestObject: any, region: Regions, wrapper: JarvanScript) {
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
