import { 
    ChampionMasteryMethods,
    ChampionMethods,
    LeagueMethods,
    MatchMethods,
    SpectateMethods,
    StaticMethods,
    SummonerMethods,
} from '../methods';
import { KeyManager, RegionManager } from "../managers";
import { Regions, Methods } from "../../enums";

export default class JarvanScript {
    public championMastery = ChampionMasteryMethods;
    public champion = ChampionMethods;
    public league = LeagueMethods;
    public match = MatchMethods;
    public spectate = SpectateMethods;
    public static = StaticMethods;
    public summoner = SummonerMethods;
    
    constructor(key: string, region: (string|Regions) = Regions.EUW, config: object) {
        KeyManager.getInstance().setKey(key);
        RegionManager.getInstance().setRegion(region);
    }
}