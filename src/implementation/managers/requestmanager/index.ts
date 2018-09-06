import { Regions } from "../../../enums";
import { IRequestInfo } from "../../../interfaces";
import { KeyManager } from "../keymanager";
import { RegionManager } from "../regionmanager";
const request = require("request");

export class RequestManager {

    /**
     * Gets the RequestManager singleton instance.
     */
    public static getInstance(): RequestManager {
        return RequestManager._instance;
    }

    private static _instance: RequestManager = new RequestManager();

    /**
     * Instantiates the RequestManager singleton if it doesn't exist, else
     * it throw an error telling to use the getInstance() method instead.
     */
    constructor() {
        if (RequestManager._instance) {
            throw new Error(
                "Instantiation failed: Use the " +
                "getInstance() method instead of new.",
            );
        }
        RequestManager._instance = this;
    }

    public getDynamicData(
        url: string,
        requestInfo: IRequestInfo,
        region: Regions,
    ): Promise<any|any[]> {
        return new Promise((resolve, reject) => {
            url = url.replace("{region}", region);
            for (const key in requestInfo) {
                if ((requestInfo as any)[key]) {
                    url = url.replace(`{${key}}`, (requestInfo as any)[key]);
                }
            }

            const options = {
                url,
                headers: {
                    "X-Riot-Token": KeyManager.getInstance().getKey(),
                },
            };

            request(options, (error: any, response: any, body: any) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(body);
                }
            });
        });
    }

    public getStaticData(
        url: string,
        requestInfo?: object,
        tags?: object,
        byId: boolean = false,
        region: Regions = RegionManager.getInstance().getRegion(),
    ) {
        throw new Error("getStaticData is not implemented yet");
    }
}
