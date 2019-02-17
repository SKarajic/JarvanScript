import { DamageDealtStats } from "./damagedealtstats";
import { DamageTakenStats } from "./damagetakenstats";
import { FirstStats } from "./firststats";
import { MiscStats } from "./miscstats";
import { ObjectiveStats } from "./objectivestats";
import { RunePage } from "./runepage";
import { ScoreStats } from "./scorestats";

export interface Stats {
  participantId: number;
  runePage: RunePage;

  win: boolean;

  trinket: number;
  items: Map<number, number>;

  kills: number;
  deaths: number;
  assists: number;
  champLevel: number;

  misc: MiscStats;
  first: FirstStats;
  scores: ScoreStats;
  objective: ObjectiveStats;
  damageTaken: DamageTakenStats;
  damageDealt: DamageDealtStats;
}
