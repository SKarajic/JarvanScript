import { Regions } from "../classes/enums/regions";

/**
 * The TypeScript Riot API wrapper
 */
export default class JarvanScript {
    public championMastery: ChampionMasteryWrapper;
    public champion: ChampionWrapper;
    public league: LeagueWrapper;
    public match: MatchWrapper;
    public summoner: SummonerWrapper;
    public status: StatusWrapper;
    /**
     * creates a new wrapper instance
     *
     * @param key - the API key
     * @param region - the default region
     * @param config - the configuration
     */
    constructor(key: string, region: Regions, config?: object);
}
