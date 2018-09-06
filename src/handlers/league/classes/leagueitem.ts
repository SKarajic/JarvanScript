import JarvanScript from "../../../jarvanscript";
import { Regions } from "../../../models/enums";
import { AbstractMethodClass } from "../../abstractmethod";
import MiniSeries from "./miniseries";

export default class LeagueItem extends AbstractMethodClass {
  public rank: string;
  public hotStreak: boolean;
  public miniSeries?: MiniSeries | null;
  public wins: number;
  public veteran: boolean;
  public losses: number;
  public freshBlood: boolean;
  public playerOrTeamName: string;
  public inactive: boolean;
  public playerOrTeamId: string;
  public leaguePoints: number;

  constructor(requestObject: any, region: Regions, wrapper: JarvanScript) {
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
    this.playerOrTeamName = playerOrTeamName;
    this.inactive = inactive;
    this.playerOrTeamId = playerOrTeamId;
    this.leaguePoints = leaguePoints;
  }
}
