import { Regions } from "../../enums";
import { KeyManager, RegionManager } from "../managers";
import {
  LeagueMethods,
  MatchMethods,
  SpectateMethods,
  StaticMethods,
  SummonerMethods,
} from "../methods";
import { ChampionMasteryWrapper, ChampionWrapper } from "../wrappers";

/**
 * The TypeScript Riot API wrapper
 */
export default class JarvanScript {
  public championMastery: ChampionMasteryWrapper;
  public champion: ChampionWrapper;
  public league = LeagueMethods;
  public match = MatchMethods;
  public spectate = SpectateMethods;
  public static = StaticMethods;
  public summoner = SummonerMethods;

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
  }
}
