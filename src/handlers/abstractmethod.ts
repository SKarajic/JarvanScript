import { JarvanScript } from "..";
import { Regions } from "../models";

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
