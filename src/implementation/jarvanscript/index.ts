import { Regions } from "../../enums";
import { KeyManager, RegionManager } from "../managers";
import {
  ChampionMasteryMethods,
  ChampionMethods,
  LeagueMethods,
  MatchMethods,
  SpectateMethods,
  StaticMethods,
  SummonerMethods,
} from "../methods";

export default class JarvanScript {
  public championMastery = ChampionMasteryMethods;
  public champion = ChampionMethods;
  public league = LeagueMethods;
  public match = MatchMethods;
  public spectate = SpectateMethods;
  public static = StaticMethods;
  public summoner = SummonerMethods;
  
  constructor(key: string, region: Regions|string = Regions.EUW, config: object) {
    KeyManager.getInstance().setKey(key);
    RegionManager.getInstance().setRegion(region);
  }
}
