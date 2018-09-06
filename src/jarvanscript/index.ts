import {
  MatchMethods,
  SpectateMethods,
  StaticMethods,
} from "../handlers";
import { KeyManager, RegionManager, Regions } from "../models";
import {
  ChampionMasteryWrapper,
  ChampionWrapper,
  LeagueWrapper,
  SummonerWrapper,
} from "./wrappers";

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

  /**
   * creates a new wrapper instance
   *
   * @param key - the API key
   * @param region - the region
   * @param config - the configuration
   */
  constructor(key: string, region: Regions, config: object) {
    KeyManager.getInstance().setKey(key);
    RegionManager.getInstance().setRegion(region);

    this.championMastery = new ChampionMasteryWrapper(this);
    this.champion = new ChampionWrapper(this);
    this.summoner = new SummonerWrapper(this);
    this.league = new LeagueWrapper(this);
  }
}
