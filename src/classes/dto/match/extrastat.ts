import JarvanScript from "../../../jarvanscript";
import JarvanEnum from "../../enums";
import JarvanModelInterface from "../../interfaces";
import { DTO } from "../abstract/index";

export class ExtraStat extends DTO implements JarvanModelInterface.Match.ExtraStat {
  public id: number;

  public constructor(requestObject: any, region: JarvanEnum.Regions, wrapper: JarvanScript) {
    super(region, wrapper);

    this.id = requestObject;
  }
}
