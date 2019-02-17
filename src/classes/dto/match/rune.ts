import JarvanScript from "../../../jarvanscript";
import JarvanEnum from "../../enums";
import JarvanModelInterface from "../../interfaces";
import { DTO } from "../abstract/index";

export class Rune extends DTO implements JarvanModelInterface.Match.Rune {
  public id: number;
  public vars: Map<number, number>;

public constructor(requestObject: any, region: JarvanEnum.Regions, wrapper: JarvanScript) {
    super(region, wrapper);
    const {
      perk,
      var1,
      var2,
      var3,
    } = requestObject;

    this.id = perk;
    this.vars = new Map<number, number>();
    this.vars.set(1, var1).set(2, var2).set(3, var3);
  }
}
