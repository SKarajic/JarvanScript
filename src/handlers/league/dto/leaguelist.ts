import { JarvanScript } from "../../..";
import { Regions } from "../../../models";
import { AbstractMethodClass } from "../../abstractmethod";
import LeagueItem from "./leagueitem";

export default class LeagueList extends AbstractMethodClass {
  public readonly leagueId: string;
  public readonly tier: string;
  public readonly entries:	LeagueItem[];
  public readonly queue: string;
  public readonly name: string;

  public constructor(requestObject: any, region: Regions, wrapper: JarvanScript) {
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
