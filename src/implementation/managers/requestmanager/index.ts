import { Regions } from "../../../enums";
import { RegionManager } from "../regionmanager";

export class RequestManager {

    private static _instance: RequestManager = new RequestManager();

    /**
     * Instantiates the RequestManager singleton if it doesn't exist, else 
     * it throw an error telling to use the getInstance() method instead.
     */
    constructor() {
        if (RequestManager._instance) {
            throw new Error(
                "Instantiation failed: Use the " +
                "getInstance() method instead of new."
            );
        }
        RequestManager._instance = this;
    }

    /**
     * Gets the RequestManager singleton instance.
     */
    public static getInstance(): RequestManager
    {
        return RequestManager._instance;
    }

    public getDynamicData(
        url: string, 
        requestInfo?: object, 
        region: Regions = RegionManager.getInstance().getRegion()
    ) {
        
    }

    public getStaticData(
        url: string, 
        requestInfo?: object, 
        tags?: object, 
        byId: boolean = false, 
        region: Regions = RegionManager.getInstance().getRegion()
    ) {
        throw new Error('getStaticData is not implemented yet')
    }
}