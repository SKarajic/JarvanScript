import JarvanScript from "../../../jarvanscript";
import JarvanEnum from "../../enums";
import JarvanModelInterface from "../../interfaces";

import { DTO } from "../abstract/index";

export class MiniSeries extends DTO implements JarvanModelInterface.League.MiniSeries {
  public readonly wins: number;
  public readonly losses: number;
  public readonly target: number;
  public readonly progress: string;

  public constructor(requestObject: any, region: JarvanEnum.Regions, wrapper: JarvanScript) {
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
