import JarvanScript from "../../../jarvanscript";
import JarvanEnum from "../../enums";
import JarvanModelInterface from "../../interfaces";
import { DTO } from "../abstract/index";

import { Rune } from "./rune";

export class SecondaryTree extends DTO implements JarvanModelInterface.Match.SecondaryTree {
  public style: number;
  public rune1: Rune;
  public rune2: Rune;

  public constructor(requestObject: any, region: JarvanEnum.Regions, wrapper: JarvanScript) {
    super(region, wrapper);
    const {
      perkSubStyle,
      perk4,
      perk4Var1,
      perk4Var2,
      perk4Var3,
      perk5,
      perk5Var1,
      perk5Var2,
      perk5Var3,
    } = requestObject;

    this.style = perkSubStyle;

    this.rune1 = new Rune({
      perk: perk4,
      var1: perk4Var1,
      var2: perk4Var2,
      var3: perk4Var3,
    }, region, wrapper);

    this.rune2 = new Rune({
      perk: perk5,
      var1: perk5Var1,
      var2: perk5Var2,
      var3: perk5Var3,
    }, region, wrapper);
  }
}
