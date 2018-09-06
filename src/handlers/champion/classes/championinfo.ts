import JarvanScript from "../../../jarvanscript";
import { Regions } from "../../../models/enums";
import { AbstractMethodClass } from "../../abstractmethod";

export default class ChampionInfo extends AbstractMethodClass {
  public rankedEnabled: boolean;
  public customBotEnabled: boolean;
  public coopBotEnabled: boolean;
  public active: boolean;
  public freeToPlay: boolean;
  public id: number;

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
