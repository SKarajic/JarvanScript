import { RunePage } from "./runepage";

export interface Stats {
  participantId: number;
  runePage: RunePage;

  win: boolean;

  trinket: number;
  items: Map<number, number>;

  kills: number;
  deaths: number;
  assists: number;

  largestKillingSpree: number;
  largestMultiKill: number;
  killingSprees: number;
  longestTimeSpentLiving: number;
  doubleKills: number;
  tripleKills: number;
  quadraKills: number;
  pentaKills: number;
  unrealKills: number;
  totalDamageDealt: number;
  magicDamageDealt: number;
  physicalDamageDealt: number;
  trueDamageDealt: number;
  largestCriticalStrike: number;
  totalDamageDealtToChampions: number;
  magicDamageDealtToChampions: number;
  physicalDamageDealtToChampions: number;
  trueDamageDealtToChampions: number;
  totalHeal: number;
  totalUnitsHealed: number;
  damageSelfMitigated: number;
  damageDealtToObjectives: number;
  damageDealtToTurrets: number;
  visionScore: number;
  timeCCingOthers: number;
  totalDamageTaken: number;
  magicalDamageTaken: number;
  physicalDamageTaken: number;
  trueDamageTaken: number;
  goldEarned: number;
  goldSpent: number;
  turretKills: number;
  inhibitorKills: number;
  totalMinionsKilled: number;
  neutralMinionsKilled: number;
  neutralMinionsKilledTeamJungle: number;
  neutralMinionsKilledEnemyJungle: number;
  totalTimeCrowdControlDealt: number;
  champLevel: number;
  visionWardsBoughtInGame: number;
  sightWardsBoughtInGame: number;
  wardsPlaced: number;
  wardsKilled: number;
  firstBloodKill: boolean;
  firstBloodAssist: boolean;
  firstTowerKill: boolean;
  firstTowerAssist: boolean;
  firstInhibitorKill: boolean;
  firstInhibitorAssist: boolean;
  combatPlayerScore: number;
  objectivePlayerScore: number;
  totalPlayerScore: number;
  totalScoreRank: number;
  playerScore0: number;
  playerScore1: number;
  playerScore2: number;
  playerScore3: number;
  playerScore4: number;
  playerScore5: number;
  playerScore6: number;
  playerScore7: number;
  playerScore8: number;
  playerScore9: number;
}
