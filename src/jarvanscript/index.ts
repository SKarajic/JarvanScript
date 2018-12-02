import JarvanManager from "../classes/managers";
import JarvanEnum from "../classes/enums";

import {
  MatchMethods,
  SpectateMethods,
  StaticMethods,
} from "../handlers";
import {
  ChampionMasteryWrapper,
  ChampionWrapper,
  LeagueWrapper,
  StatusWrapper,
  SummonerWrapper,
} from "../wrappers";

/**
 * The TypeScript Riot API wrapper
 */
export default class JarvanScript {
  public championMastery: ChampionMasteryWrapper;
  public champion: ChampionWrapper;
  public league: LeagueWrapper;
  public match = MatchMethods;
  public spectate = SpectateMethods;
  public static = StaticMethods;
  public summoner: SummonerWrapper;
  public status: StatusWrapper;

  /**
   * creates a new wrapper instance
   *
   * @param key - the API key
   * @param region - the region
   * @param config - the configuration
   */
  constructor(key: string, region: JarvanEnum.Regions, config: object) {
    JarvanManager.KeyManager.getInstance().setKey(key);
    JarvanManager.RegionManager.getInstance().setRegion(region);

    this.championMastery = new ChampionMasteryWrapper(this);
    this.champion = new ChampionWrapper(this);
    this.summoner = new SummonerWrapper(this);
    this.league = new LeagueWrapper(this);
    this.status = new StatusWrapper(this);
  }
}
