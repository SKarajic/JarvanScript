import JarvanScript from "../jarvanscript";
import { Regions } from "../models/enums";

export abstract class AbstractMethodClass {

  protected readonly region: Regions;
  protected readonly wrapper: JarvanScript;

  constructor(region: Regions | string, wrapper: JarvanScript) {
    this.region = region as Regions;
    this.wrapper = wrapper;
  }

  public toJSON() {
    const copy = Object.assign({}, this, {region: null});
  }
}
