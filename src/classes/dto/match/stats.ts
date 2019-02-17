import JarvanScript from "../../../jarvanscript";
import JarvanEnum from "../../enums";
import JarvanModelInterface from "../../interfaces";
import { DTO } from "../abstract/index";

import { RunePage } from "./runepage";

export class Stats extends DTO implements JarvanModelInterface.Match.Stats {
  public participantId: number;
  public runePage: RunePage;

  public win: boolean;

  public trinket: number;
  public items: Map<number, number>;

  public kills: number;
  public deaths: number;
  public assists: number;

  public largestKillingSpree: number;
  public largestMultiKill: number;
  public killingSprees: number;
  public longestTimeSpentLiving: number;
  public doubleKills: number;
  public tripleKills: number;
  public quadraKills: number;
  public pentaKills: number;
  public unrealKills: number;
  public totalDamageDealt: number;
  public magicDamageDealt: number;
  public physicalDamageDealt: number;
  public trueDamageDealt: number;
  public largestCriticalStrike: number;
  public totalDamageDealtToChampions: number;
  public magicDamageDealtToChampions: number;
  public physicalDamageDealtToChampions: number;
  public trueDamageDealtToChampions: number;
  public totalHeal: number;
  public totalUnitsHealed: number;
  public damageSelfMitigated: number;
  public damageDealtToObjectives: number;
  public damageDealtToTurrets: number;
  public visionScore: number;
  public timeCCingOthers: number;
  public totalDamageTaken: number;
  public magicalDamageTaken: number;
  public physicalDamageTaken: number;
  public trueDamageTaken: number;
  public goldEarned: number;
  public goldSpent: number;
  public turretKills: number;
  public inhibitorKills: number;
  public totalMinionsKilled: number;
  public neutralMinionsKilled: number;
  public neutralMinionsKilledTeamJungle: number;
  public neutralMinionsKilledEnemyJungle: number;
  public totalTimeCrowdControlDealt: number;
  public champLevel: number;
  public visionWardsBoughtInGame: number;
  public sightWardsBoughtInGame: number;
  public wardsPlaced: number;
  public wardsKilled: number;
  public firstBloodKill: boolean;
  public firstBloodAssist: boolean;
  public firstTowerKill: boolean;
  public firstTowerAssist: boolean;
  public firstInhibitorKill: boolean;
  public firstInhibitorAssist: boolean;
  public combatPlayerScore: number;
  public objectivePlayerScore: number;
  public totalPlayerScore: number;
  public totalScoreRank: number;
  public playerScore0: number;
  public playerScore1: number;
  public playerScore2: number;
  public playerScore3: number;
  public playerScore4: number;
  public playerScore5: number;
  public playerScore6: number;
  public playerScore7: number;
  public playerScore8: number;
  public playerScore9: number;

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
      largestKillingSpree,
      largestMultiKill,
      killingSprees,
      longestTimeSpentLiving,
      doubleKills,
      tripleKills,
      quadraKills,
      pentaKills,
      unrealKills,
      totalDamageDealt,
      magicDamageDealt,
      physicalDamageDealt,
      trueDamageDealt,
      largestCriticalStrike,
      totalDamageDealtToChampions,
      magicDamageDealtToChampions,
      physicalDamageDealtToChampions,
      trueDamageDealtToChampions,
      totalHeal,
      totalUnitsHealed,
      damageSelfMitigated,
      damageDealtToObjectives,
      damageDealtToTurrets,
      visionScore,
      timeCCingOthers,
      totalDamageTaken,
      magicalDamageTaken,
      physicalDamageTaken,
      trueDamageTaken,
      goldEarned,
      goldSpent,
      turretKills,
      inhibitorKills,
      totalMinionsKilled,
      neutralMinionsKilled,
      neutralMinionsKilledTeamJungle,
      neutralMinionsKilledEnemyJungle,
      totalTimeCrowdControlDealt,
      champLevel,
      visionWardsBoughtInGame,
      sightWardsBoughtInGame,
      wardsPlaced,
      wardsKilled,
      firstBloodKill,
      firstBloodAssist,
      firstTowerKill,
      firstTowerAssist,
      firstInhibitorKill,
      firstInhibitorAssist,
      combatPlayerScore,
      objectivePlayerScore,
      totalPlayerScore,
      totalScoreRank,
      playerScore0,
      playerScore1,
      playerScore2,
      playerScore3,
      playerScore4,
      playerScore5,
      playerScore6,
      playerScore7,
      playerScore8,
      playerScore9,
    } = requestObject;

    this.participantId = participantId;
    this.runePage = new RunePage(requestObject, region, wrapper);

    this.win = win;

    this.items = (new Map<number, number>())
      .set(1, item0)
      .set(2, item1)
      .set(3, item2)
      .set(4, item3)
      .set(5, item4)
      .set(6, item5);
    this.trinket = item6;

    this.kills = kills;
    this.deaths = deaths;
    this.assists = assists;
    this.largestKillingSpree = largestKillingSpree;
    this.largestMultiKill = largestMultiKill;
    this.killingSprees = killingSprees;
    this.longestTimeSpentLiving = longestTimeSpentLiving;
    this.doubleKills = doubleKills;
    this.tripleKills = tripleKills;
    this.quadraKills = quadraKills;
    this.pentaKills = pentaKills;
    this.unrealKills = unrealKills;
    this.totalDamageDealt = totalDamageDealt;
    this.magicDamageDealt = magicDamageDealt;
    this.physicalDamageDealt = physicalDamageDealt;
    this.trueDamageDealt = trueDamageDealt;
    this.largestCriticalStrike = largestCriticalStrike;
    this.totalDamageDealtToChampions = totalDamageDealtToChampions;
    this.magicDamageDealtToChampions = magicDamageDealtToChampions;
    this.physicalDamageDealtToChampions = physicalDamageDealtToChampions;
    this.trueDamageDealtToChampions = trueDamageDealtToChampions;
    this.totalHeal = totalHeal;
    this.totalUnitsHealed = totalUnitsHealed;
    this.damageSelfMitigated = damageSelfMitigated;
    this.damageDealtToObjectives = damageDealtToObjectives;
    this.damageDealtToTurrets = damageDealtToTurrets;
    this.visionScore = visionScore;
    this.timeCCingOthers = timeCCingOthers;
    this.totalDamageTaken = totalDamageTaken;
    this.magicalDamageTaken = magicalDamageTaken;
    this.physicalDamageTaken = physicalDamageTaken;
    this.trueDamageTaken = trueDamageTaken;
    this.goldEarned = goldEarned;
    this.goldSpent = goldSpent;
    this.turretKills = turretKills;
    this.inhibitorKills = inhibitorKills;
    this.totalMinionsKilled = totalMinionsKilled;
    this.neutralMinionsKilled = neutralMinionsKilled;
    this.neutralMinionsKilledTeamJungle = neutralMinionsKilledTeamJungle;
    this.neutralMinionsKilledEnemyJungle = neutralMinionsKilledEnemyJungle;
    this.totalTimeCrowdControlDealt = totalTimeCrowdControlDealt;
    this.champLevel = champLevel;
    this.visionWardsBoughtInGame = visionWardsBoughtInGame;
    this.sightWardsBoughtInGame = sightWardsBoughtInGame;
    this.wardsPlaced = wardsPlaced;
    this.wardsKilled = wardsKilled;
    this.firstBloodKill = firstBloodKill;
    this.firstBloodAssist = firstBloodAssist;
    this.firstTowerKill = firstTowerKill;
    this.firstTowerAssist = firstTowerAssist;
    this.firstInhibitorKill = firstInhibitorKill;
    this.firstInhibitorAssist = firstInhibitorAssist;
    this.combatPlayerScore = combatPlayerScore;
    this.objectivePlayerScore = objectivePlayerScore;
    this.totalPlayerScore = totalPlayerScore;
    this.totalScoreRank = totalScoreRank;
    this.playerScore0 = playerScore0;
    this.playerScore1 = playerScore1;
    this.playerScore2 = playerScore2;
    this.playerScore3 = playerScore3;
    this.playerScore4 = playerScore4;
    this.playerScore5 = playerScore5;
    this.playerScore6 = playerScore6;
    this.playerScore7 = playerScore7;
    this.playerScore8 = playerScore8;
    this.playerScore9 = playerScore9;
  }
}
