import { Methods, Regions } from "../../models/enums";
import { RegionManager, RequestManager } from "../../models/managers";
const methods = Methods.STATUS;

export namespace StatusMethods {
  export function getStatus(
    region: Regions = RegionManager.getInstance().getRegion(),
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      const url = methods.VALUE;
      RequestManager.getInstance().getDynamicData(url, {}, region)
        .then((data) => {
          resolve(JSON.parse(data));
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}