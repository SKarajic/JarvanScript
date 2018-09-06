import JarvanScript from "../../../jarvanscript";
import { Regions } from "../../../models/enums";
import { AbstractMethodClass } from "../../abstractmethod";
import LeagueItem from "./leagueitem";

export default class LeagueList extends AbstractMethodClass {
  public leagueId: string;
  public tier: string;
  public entries:	LeagueItem[];
  public queue: string;
  public name: string;

  constructor(requestObject: any, region: Regions, wrapper: JarvanScript) {
    super(region, wrapper);
    const {
      pleagueId,
      tier,
      entries,
      queue,
      name,
    } = requestObject;

    const objectEntries: LeagueItem[] = [];
    entries.forEach((entry: any) => {
      objectEntries.push(new LeagueItem(entry, region, this.wrapper));
    });
    this.leagueId = pleagueId;
    this.tier = tier;
    this.entries = objectEntries;
    this.queue = queue;
    this.name = name;
  }
}
