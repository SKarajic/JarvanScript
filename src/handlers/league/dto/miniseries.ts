import { JarvanScript } from "../../..";
import { Regions } from "../../../models";
import { AbstractMethodClass } from "../../abstractmethod";

export default class MiniSeries extends AbstractMethodClass {
  public readonly wins: number;
  public readonly losses: number;
  public readonly target: number;
  public readonly progress: string;

  public constructor(requestObject: any, region: Regions, wrapper: JarvanScript) {
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
