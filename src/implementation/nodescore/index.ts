import { Regions, Methods } from "../enums";
import { KeyManager } from "../managers/keymanager/index";
import { RegionManager } from "../managers/regionmanager/index";

export default class NodeScore {
    constructor(key: string, region: Regions|string = Regions.EUW, config: object) {
        KeyManager.getInstance().setKey(key);
        RegionManager.getInstance().setRegion(region);
    }

    
}