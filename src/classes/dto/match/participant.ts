import JarvanScript from "../../../jarvanscript";
import JarvanEnum from "../../enums";
import JarvanModelInterface from "../../interfaces";
import { DTO } from "../abstract/index";

import { Player } from "./player";
import { Stats } from "./stats";
import { Timeline } from "./timeline";

export class Participant extends DTO implements JarvanModelInterface.Match.Participant {
  public stats: Stats;
  public teamId: number;
  public player: Player;
  public spells: Map<number, number>;
  public timeline: Timeline;
  public championId: number;
  public participantId: number;
  public highestAchievedSeasonTier: string;

  public constructor(requestObject: any, region: JarvanEnum.Regions, wrapper: JarvanScript) {
    super(region, wrapper);
    const {
      stats,
      teamId,
      player,
      spell1Id,
      spell2Id,
      timeline,
      championId,
      participantId,
      highestAchievedSeasonTier,
    } = requestObject;

    this.teamId = teamId;
    this.stats = new Stats(stats, region, wrapper);
    this.player = new Player(player, region, wrapper);

    this.spells = new Map();
    this.spells.set(1, spell1Id);
    this.spells.set(2, spell2Id);

    this.championId = championId;
    this.participantId = participantId;
    this.timeline = new Timeline(timeline, region, wrapper);
    this.highestAchievedSeasonTier = highestAchievedSeasonTier;
  }
}
