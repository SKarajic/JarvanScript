import { Regions } from "../classes/enums/regions";

/**
 * The TypeScript Riot API wrapper
 */
export default class JarvanScript {
    championMastery: ChampionMasteryWrapper;
    champion: ChampionWrapper;
    league: LeagueWrapper;
    match: MatchWrapper;
    summoner: SummonerWrapper;
    status: StatusWrapper;
    /**
     * creates a new wrapper instance
     *
     * @param key - the API key
     * @param region - the default region
     * @param config - the configuration
     */
    constructor(key: string, region: Regions, config?: object);
}
