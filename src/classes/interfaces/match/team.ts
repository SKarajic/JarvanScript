import { TeamBan } from "./ban";

export interface Team {
  win: boolean;
  bans: TeamBan[];
  teamId: number;
  firstBlood: boolean;
  firstTower: boolean;
  firstBaron: boolean;
  baronKills: number;
  towerKills: number;
  dragonKills: number;
  firstDragon: boolean;
  vilemawKills: number;
  firstInhibitor: boolean;
  inhibitorKills: number;
  firstRiftHerald: boolean;
  riftHeraldKills: number;
  dominionVictoryScore: number;
}
