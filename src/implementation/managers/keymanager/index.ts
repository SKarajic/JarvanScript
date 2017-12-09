export class KeyManager {
    
    private static _instance: KeyManager = new KeyManager();
    private _key: string = '';
    
    /**
    * Instantiates the KeyManager singleton if it doesn't exist, else 
    * it throw an error telling to use the getInstance() method instead.
    */
    constructor() {
        if (KeyManager._instance) {
            throw new Error(
                "Instantiation failed: Use the " +
                "getInstance() method instead of new."
            );
        }
        KeyManager._instance = this;
    }
    
    /**
     * Gets the KeyManager singleton instance.
     */
    public static getInstance(): KeyManager
    {
        return KeyManager._instance;
    }
    
    /**
     * Sets the Riot API key.
     * @param key Riot API key
     */
    public setKey(key: string): void
    {
        this._key = key;
    }

    /**
     * Gets the Riot API key.
     */
    public getKey(): string
    {
        return this._key;
    }
}