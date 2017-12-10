import { RequestManager, RegionManager } from "../../managers";
import { Methods, Regions } from '../../../enums'
import { RequestInfo } from "../../../interfaces";
const methods = Methods.STATUS;

export namespace StatusMethods {
    export function getStatus(
        region: Regions = RegionManager.getInstance().getRegion()
    ): Promise<any> {
        return new Promise((resolve, reject) => {  
            let url = methods.VALUE;
            RequestManager.getInstance().getDynamicData(url, {}, region)
            .then((data) => {
                resolve(JSON.parse(data));
            })
            .catch((err) => {
                reject(err);
            })
        });
    }
}
