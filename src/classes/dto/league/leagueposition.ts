import JarvanModelInterface from "../../interfaces";
import JarvanScript from "../../..";
import JarvanEnum from "../../enums";

import { MiniSeries } from "./miniseries";
import { DTO } from "../abstract";

export class LeaguePosition extends DTO implements JarvanModelInterface.League.LeaguePosition {
  public readonly rank: string;
  public readonly queueType: string;
  public readonly hotStreak: boolean;
  public readonly miniSeries: MiniSeries | null;
  public readonly wins: number;
  public readonly veteran: boolean;
  public readonly losses: number;
  public readonly freshBlood: boolean;
  public readonly leagueId: string;
  public readonly summonerName: string;
  public readonly inactive: boolean;
  public readonly summonerId: string;
  public readonly tier: string;
  public readonly leaguePoints: number;

  public constructor(requestObject: any, region: JarvanEnum.Regions, wrapper: JarvanScript) {
    super(region, wrapper);
    const {
      rank,
      queueType,
      hotStreak,
      miniSeries,
      wins,
      veteran,
      losses,
      freshBlood,
      leagueId,
      playerOrTeamName,
      inactive,
      playerOrTeamId,
      tier,
      leaguePoints,
    } = requestObject;

    this.rank = rank;
    this.queueType = queueType;
    this.hotStreak = hotStreak;
    this.miniSeries = miniSeries !== undefined ? new MiniSeries(miniSeries, region, this.wrapper) : null;
    this.wins = wins;
    this.veteran = veteran;
    this.losses = losses;
    this.freshBlood = freshBlood;
    this.leagueId = leagueId;
    this.summonerName = playerOrTeamName;
    this.inactive = inactive;
    this.summonerId = playerOrTeamId;
    this.tier = tier;
    this.leaguePoints = leaguePoints;
  }

  /**
   * gets the Summoner from the ChampionMastery
   */
  public async getSummoner(): Promise<JarvanModelInterface.Summoner.Summoner> {
    return (await this.wrapper.summoner.getSummonerById(this.summonerId));
  }
}
