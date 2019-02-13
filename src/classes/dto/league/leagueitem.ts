import JarvanScript from "../../../jarvanscript";
import JarvanEnum from "../../enums";
import JarvanModelInterface from "../../interfaces";

import { DTO } from "../abstract";
import { MiniSeries } from "./miniseries";

export class LeagueItem extends DTO implements JarvanModelInterface.League.LeagueItem {
  public readonly rank: string;
  public readonly hotStreak: boolean;
  public readonly miniSeries?: MiniSeries | null;
  public readonly wins: number;
  public readonly veteran: boolean;
  public readonly losses: number;
  public readonly freshBlood: boolean;
  public readonly summonerName: string;
  public readonly inactive: boolean;
  public readonly summonerId: string;
  public readonly leaguePoints: number;

  public constructor(requestObject: any, region: JarvanEnum.Regions, wrapper: JarvanScript) {
    super(region, wrapper);
    const {
      rank,
      hotStreak,
      miniSeries,
      wins,
      veteran,
      losses,
      freshBlood,
      playerOrTeamName,
      inactive,
      playerOrTeamId,
      leaguePoints,
    } = requestObject;

    this.rank = rank;
    this.hotStreak = hotStreak;
    this.miniSeries = miniSeries !== undefined ? new MiniSeries(miniSeries, region, this.wrapper) : null;
    this.wins = wins;
    this.veteran = veteran;
    this.losses = losses;
    this.freshBlood = freshBlood;
    this.summonerName = playerOrTeamName;
    this.inactive = inactive;
    this.summonerId = playerOrTeamId;
    this.leaguePoints = leaguePoints;
  }

  /**
   * gets the Summoner from the ChampionMastery
   */
  public async getSummoner(): Promise<JarvanModelInterface.Summoner.Summoner> {
    return (await this.wrapper.summoner.getSummonerById(this.summonerId));
  }
}
