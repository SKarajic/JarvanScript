import { Regions } from "../../../../enums";
import JarvanScript from "../../../jarvanscript";
import { AbstractMethodClass } from "../../abstractmethodclass";

export default class MiniSeries extends AbstractMethodClass {
  public wins: number;
  public losses: number;
  public target: number;
  public progress: string;

  constructor(requestObject: any, region: Regions, wrapper: JarvanScript) {
    super(region, wrapper);
    const {
      wins,
      losses,
      target,
      progress,
    } = requestObject;

    this.wins = wins;
    this.losses = losses;
    this.target = target;
    this.progress = progress;
  }
}
