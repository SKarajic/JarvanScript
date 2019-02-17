import { Player } from "./player";
import { Stats } from "./stats";
import { Timeline } from "./timeline";

export interface Participant {
  stats: Stats;
  teamId: number;
  player: Player;
  spells: Map<number, number>;
  timeline: Timeline;
  championId: number;
  participantId: number;
  highestAchievedSeasonTier: string;
}
