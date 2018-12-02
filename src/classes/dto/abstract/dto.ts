import JarvanScript from '../../..'
import JarvanEnum from '../../enums'

export abstract class DTO {

  protected region: JarvanEnum.Regions;
  protected wrapper: JarvanScript;

  constructor(region: JarvanEnum.Regions | string, wrapper: JarvanScript) {
    this.region = region as JarvanEnum.Regions;
    this.wrapper = wrapper;
  }

  public toJSON() {
    const copy = Object.assign({}, this);
    delete copy.wrapper;
    delete copy.region;
    return copy;
  }
}