import JarvanScript from "../../../jarvanscript";
import JarvanEnum from "../../enums";
import JarvanModelInterface from "../../interfaces";
import { DTO } from "../abstract/index";

import { DamageDealtStats } from "./damagedealtstats";
import { DamageTakenStats } from "./damagetakenstats";
import { FirstStats } from "./firststats";
import { MinionStats } from "./minionstats";
import { MiscStats } from "./miscstats";
import { MultiKillStats } from "./multikillstats";
import { ObjectiveStats } from "./objectivestats";
import { RunePage } from "./runepage";
import { ScoreStats } from "./scorestats";

export class Stats extends DTO implements JarvanModelInterface.Match.Stats {
  public win: boolean;
  public kills: number;
  public deaths: number;
  public assists: number;
  public trinket: number;
  public runePage: RunePage;
  public champLevel: number;
  public participantId: number;
  public items: Map<number, number>;

  public misc: MiscStats;
  public first: FirstStats;
  public scores: ScoreStats;
  public minion: MinionStats;
  public objective: ObjectiveStats;
  public multikill: MultiKillStats;
  public damageTaken: DamageTakenStats;
  public damageDealt: DamageDealtStats;

  public constructor(requestObject: any, region: JarvanEnum.Regions, wrapper: JarvanScript) {
    super(region, wrapper);
    const {
      participantId,
      win,
      item0,
      item1,
      item2,
      item3,
      item4,
      item5,
      item6,
      kills,
      deaths,
      assists,
      champLevel,
    } = requestObject;

    this.win = win;
    this.kills = kills;
    this.deaths = deaths;
    this.assists = assists;
    this.champLevel = champLevel;
    this.participantId = participantId;
    this.runePage = new RunePage(requestObject, region, wrapper);

    this.items = (new Map<number, number>())
      .set(1, item0)
      .set(2, item1)
      .set(3, item2)
      .set(4, item3)
      .set(5, item4)
      .set(6, item5);
    this.trinket = item6;

    this.misc = new MiscStats(requestObject, region, wrapper);
    this.first = new FirstStats(requestObject, region, wrapper);
    this.scores = new ScoreStats(requestObject, region, wrapper);
    this.minion = new MinionStats(requestObject, region, wrapper);
    this.objective = new ObjectiveStats(requestObject, region, wrapper);
    this.multikill = new MultiKillStats(requestObject, region, wrapper);
    this.damageTaken = new DamageTakenStats(requestObject, region, wrapper);
    this.damageDealt = new DamageDealtStats(requestObject, region, wrapper);
  }
}
