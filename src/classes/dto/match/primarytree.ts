import JarvanScript from "../../../jarvanscript";
import JarvanEnum from "../../enums";
import JarvanModelInterface from "../../interfaces";
import { DTO } from "../abstract/index";

import { Rune } from "./rune";

export class PrimaryTree extends DTO implements JarvanModelInterface.Match.PrimaryTree {
  public keystone: Rune;
  public style: number;
  public rune1: Rune;
  public rune2: Rune;
  public rune3: Rune;

  public constructor(requestObject: any, region: JarvanEnum.Regions, wrapper: JarvanScript) {
    super(region, wrapper);
    const {
      perkPrimaryStyle,
      perk0,
      perk0Var1,
      perk0Var2,
      perk0Var3,
      perk1,
      perk1Var1,
      perk1Var2,
      perk1Var3,
      perk2,
      perk2Var1,
      perk2Var2,
      perk2Var3,
      perk3,
      perk3Var1,
      perk3Var2,
      perk3Var3,
    } = requestObject;

    this.style = perkPrimaryStyle;
    this.keystone = new Rune({
      perk: perk0,
      var1: perk0Var1,
      var2: perk0Var2,
      var3: perk0Var3,
    }, region, wrapper);

    this.rune1 = new Rune({
      perk: perk1,
      var1: perk1Var1,
      var2: perk1Var2,
      var3: perk1Var3,
    }, region, wrapper);

    this.rune2 = new Rune({
      perk: perk2,
      var1: perk2Var1,
      var2: perk2Var2,
      var3: perk2Var3,
    }, region, wrapper);

    this.rune3 = new Rune({
      perk: perk3,
      var1: perk3Var1,
      var2: perk3Var2,
      var3: perk3Var3,
    }, region, wrapper);
  }
}
