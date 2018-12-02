import JarvanModelInterface from "../../interfaces";
import JarvanScript from "../../..";
import JarvanEnum from "../../enums";

import { LeagueItem } from "./leagueitem";
import { DTO } from "../abstract";

export class LeagueList extends DTO implements JarvanModelInterface.League.LeagueList {
  public readonly leagueId: string;
  public readonly tier: string;
  public readonly entries:	LeagueItem[];
  public readonly queue: string;
  public readonly name: string;

  public constructor(requestObject: any, region: JarvanEnum.Regions, wrapper: JarvanScript) {
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