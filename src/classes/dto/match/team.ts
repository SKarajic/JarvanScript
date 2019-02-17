import JarvanScript from "../../../jarvanscript";
import JarvanEnum from "../../enums";
import JarvanModelInterface from "../../interfaces";
import { DTO } from "../abstract/index";

import { TeamBan } from "./ban";

export class Team extends DTO implements JarvanModelInterface.Match.Team {
  public win: string;
  public bans: TeamBan[];
  public teamId: number;
  public firstBlood: boolean;
  public firstTower: boolean;
  public firstBaron: boolean;
  public baronKills: number;
  public towerKills: number;
  public dragonKills: number;
  public firstDragon: boolean;
  public vilemawKills: number;
  public firstInhibitor: boolean;
  public inhibitorKills: number;
  public firstRiftHerald: boolean;
  public riftHeraldKills: number;
  public dominionVictoryScore: number;

  public constructor(requestObject: any, region: JarvanEnum.Regions, wrapper: JarvanScript) {
    super(region, wrapper);
    const {
      win,
      bans,
      teamId,
      firstBlood,
      firstTower,
      firstBaron,
      baronKills,
      towerKills,
      dragonKills,
      firstDragon,
      vilemawKills,
      firstInhibitor,
      inhibitorKills,
      firstRiftHerald,
      riftHeraldKills,
      dominionVictoryScore,
    } = requestObject;

    this.win = win;
    this.bans = bans.map((ban) => new TeamBan(ban, region, wrapper));
    this.teamId = teamId;
    this.firstBlood = firstBlood;
    this.firstTower = firstTower;
    this.firstBaron = firstBaron;
    this.baronKills = baronKills;
    this.towerKills = towerKills;
    this.dragonKills = dragonKills;
    this.firstDragon = firstDragon;
    this.vilemawKills = vilemawKills;
    this.firstInhibitor = firstInhibitor;
    this.inhibitorKills = inhibitorKills;
    this.firstRiftHerald = firstRiftHerald;
    this.riftHeraldKills = riftHeraldKills;
    this.dominionVictoryScore = dominionVictoryScore;
  }
}
