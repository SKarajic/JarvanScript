export class CacheManager {

    /**
     * Gets the CacheManager singleton instance.
     */
    public static getInstance(): CacheManager {
        return CacheManager.instance;
    }

    private static instance: CacheManager = new CacheManager();

    /**
     * Instantiates the CacheManager singleton if it doesn't exist, else
     * it throw an error telling to use the getInstance() method instead.
     */
    constructor() {
        if (CacheManager.instance) {
            throw new Error(
                "Instantiation failed: Use the " +
                "getInstance() method instead of new.",
            );
        }
        CacheManager.instance = this;
    }
}
