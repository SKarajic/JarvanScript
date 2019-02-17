import JarvanScript from "../../../jarvanscript";
import JarvanEnum from "../../enums";
import JarvanModelInterface from "../../interfaces";
import { DTO } from "../abstract/index";

import { ExtraStat } from "./extrastat";
import { PrimaryTree } from "./primarytree";
import { SecondaryTree } from "./secondarytree";

export class RunePage extends DTO implements JarvanModelInterface.Match.RunePage {
  public primary: PrimaryTree;
  public secondary: SecondaryTree;
  public stats: Map<number, ExtraStat>;

  public constructor(requestObject: any, region: JarvanEnum.Regions, wrapper: JarvanScript) {
    super(region, wrapper);

    const {
      statPerk0,
      statPerk1,
      statPerk2,
    } = requestObject;

    this.primary =  new PrimaryTree(requestObject, region, wrapper);
    this.secondary = new SecondaryTree(requestObject, region, wrapper);

    this.stats = (new Map<number, ExtraStat>())
      .set(1, new ExtraStat(statPerk0, region, wrapper))
      .set(2, new ExtraStat(statPerk1, region, wrapper))
      .set(3, new ExtraStat(statPerk2, region, wrapper));
  }
}
