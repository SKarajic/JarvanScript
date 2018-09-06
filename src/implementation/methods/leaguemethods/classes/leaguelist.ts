import { Regions } from "../../../../enums";
import { AbstractMethodClass } from "../../abstractmethodclass";
import LeagueItem from "./leagueitem";

export default class LeagueList extends AbstractMethodClass {
  public leagueId: string;
  public tier: string;
  public entries:	LeagueItem[];
  public queue: string;
  public name: string;
  
  constructor(requestObject: any, region: Regions) {
    super(region);
    const {
      pleagueId,
      tier,
      entries,
      queue,
      name,
    } = requestObject;
    
    const objectEntries: LeagueItem[] = [];
    entries.forEach((entry: any) => {
      objectEntries.push(new LeagueItem(entry, region));
    });
    this.leagueId = pleagueId;
    this.tier = tier;
    this.entries = objectEntries;
    this.queue = queue;
    this.name = name;
  }
}
