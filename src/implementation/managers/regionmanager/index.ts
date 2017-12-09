import { Regions } from "../../enums";

export class RegionManager {
    
    private static _instance: RegionManager = new RegionManager();
    private _region: Regions;
    
    /**
    * Instantiates the RegionManager singleton if it doesn't exist, else 
    * it throw an error telling to use the getInstance() method instead.
    */
    constructor() {
        if (RegionManager._instance) {
            throw new Error(
                "Instantiation failed: Use the " +
                "getInstance() method instead of new."
            );
        }
        RegionManager._instance = this;
    }

    /**
     * Gets the RegionManager singleton instance.
     */
    public static getInstance(): RegionManager
    {
        return RegionManager._instance;
    }
    
    /**
     * sets the region using either a string or a value from the Regions enum.
     * @param region either a string containing the region value 
     * or a value from the enum Regions. the string can be the
     * following values:
     * - "euw1" (Europe West)
     * - "eun1" (Europe East)
     * - "tr1" (Turkey)
     * - "na1" (North America)
     * - "la1" (Latin America North)
     * - "la2" (Latin America South)
     * - "br1" (Brasil)
     * - "oc1" (Oceania)
     * - "jp1" (Japan)
     * - "kr" (South Korea)
     * - "ru" (Russia)
     */
    public setRegion(region: Regions|string): void
    {
        for (const key in Regions) {
            if (Regions[key] == region) {
                this._region = <Regions> Regions[key];
                return;
            }
        }
        throw new Error(
            "The region parameter does not equal an actual region. " +
            "Please change the value to match or use a value that " +
            "is part of the Regions enum."
        )
    }

    /**
     * Gets the region that is a value of the Regions enum. 
     */
    public getRegion(): Regions
    {
        return this._region;
    }
}