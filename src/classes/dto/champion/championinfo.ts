import JarvanModelInterface from "../../interfaces";
import JarvanScript from "../../..";
import JarvanEnum from "../../enums";

import { DTO } from "../abstract";

/**
 * General Champion status info
 */
export class ChampionInfo extends DTO implements JarvanModelInterface.Champion.ChampionInfo {
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
  public constructor(requestObject: any, region: JarvanEnum.Regions, wrapper: JarvanScript) {
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
