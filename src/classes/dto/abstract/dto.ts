import JarvanScript from "../../../jarvanscript";
import JarvanEnum from "../../enums";

export abstract class DTO {

  protected region: JarvanEnum.Regions;
  protected wrapper: JarvanScript;

  constructor(region: JarvanEnum.Regions | string, wrapper: JarvanScript) {
    this.region = region as JarvanEnum.Regions;
    this.wrapper = wrapper;
  }

  public toJSON() {
    const copy = Object.assign({}, this) as any;
    delete copy.wrapper;
    delete copy.region;

    for (const key in this) {
      if (this.hasOwnProperty(key)) {
        if (this[key] instanceof Map) {
          copy[key] = mapToObj(this[key]);
        }
      }
    }
    return copy;
  }
}

function mapToObj(map: any) {
  const obj = {};

  map.forEach((val, key) => {
    obj[key] = val;
  });

  return obj;
}
