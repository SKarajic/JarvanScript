import { Summoner } from "../..";
import { JarvanScript } from "../../..";
import { Regions } from "../../../models";
import { AbstractMethodClass } from "../../abstractmethod";
import MiniSeries from "./miniseries";

export default class LeaguePosition extends AbstractMethodClass {
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
  public readonly summonerId: number;
  public readonly tier: string;
  public readonly leaguePoints: number;

  public constructor(requestObject: any, region: Regions, wrapper: JarvanScript) {
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
    this.summonerId = parseInt(playerOrTeamId, undefined);
    this.tier = tier;
    this.leaguePoints = leaguePoints;
  }

  /**
   * gets the Summoner from the ChampionMastery
   */
  public async getSummoner(): Promise<Summoner> {
    return (await this.wrapper.summoner.getSummonerById(this.summonerId));
  }
}
