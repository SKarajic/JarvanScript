import { Regions } from "../../enums";

export abstract class AbstractMethodClass {
  
  protected region: Regions;
  
  constructor(region: any) {
    this.region = region as Regions;
  }
  
  public toJSON() {
    const copy = Object.assign({}, this, {region: null});
  }
}
