import { JarvanScript } from "..";
import { Regions } from "../models";

export abstract class AbstractMethodClass {

  protected region: Regions;
  protected wrapper: JarvanScript;

  constructor(region: Regions | string, wrapper: JarvanScript) {
    this.region = region as Regions;
    this.wrapper = wrapper;
  }

  public toJSON() {
    const copy = Object.assign({}, this);
    delete copy.wrapper;
    delete copy.region;
    return copy;
  }
}
