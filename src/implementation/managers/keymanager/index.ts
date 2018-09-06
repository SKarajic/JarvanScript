export class KeyManager {
  
  /**
   * Gets the KeyManager singleton instance.
   */
  public static getInstance(): KeyManager {
    return KeyManager.instance;
  }
  
  private static instance: KeyManager = new KeyManager();
  private key: string = "";
  
  /**
   * Instantiates the KeyManager singleton if it doesn't exist, else
   * it throw an error telling to use the getInstance() method instead.
   */
  constructor() {
    if (KeyManager.instance) {
      throw new Error(
        "Instantiation failed: Use the " +
        "getInstance() method instead of new.",
        );
      }
      KeyManager.instance = this;
    }
    
    /**
     * Sets the Riot API key.
     * @param key Riot API key
     */
    public setKey(key: string): void {
      this.key = key;
    }
    
    /**
     * Gets the Riot API key.
     */
    public getKey(): string {
      return this.key;
    }
  }
  