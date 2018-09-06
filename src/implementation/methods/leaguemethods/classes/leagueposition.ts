import { Regions } from "../../../../enums";
import JarvanScript from "../../../jarvanscript";
import { AbstractMethodClass } from "../../abstractmethodclass";
import MiniSeries from "./miniseries";

export default class LeaguePosition extends AbstractMethodClass {
  public rank: string;
  public queueType: string;
  public hotStreak: boolean;
  public miniSeries: MiniSeries | null;
  public wins: number;
  public veteran: boolean;
  public losses: number;
  public freshBlood: boolean;
  public leagueId: string;
  public playerOrTeamName: string;
  public inactive: boolean;
  public playerOrTeamId: string;
  public tier: string;
  public leaguePoints: number;

  constructor(requestObject: any, region: Regions, wrapper: JarvanScript) {
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
    this.playerOrTeamName = playerOrTeamName;
    this.inactive = inactive;
    this.playerOrTeamId = playerOrTeamId;
    this.tier = tier;
    this.leaguePoints = leaguePoints;
  }
}
