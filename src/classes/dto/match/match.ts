import JarvanScript from "../../../jarvanscript";
import JarvanEnum from "../../enums";
import JarvanModelInterface from "../../interfaces";
import { DTO } from "../abstract/index";

import { Participant } from "./participant";
import { Team } from "./team";

export class Match extends DTO implements JarvanModelInterface.Match.Match {
  public teams: Team[];
  public mapId: number;
  public gameId: number;
  public queueId: number;
  public seasonId: number;
  public gameMode: string;
  public gameType: string;
  public platformId: string;
  public gameVersion: string;
  public gameCreation: number;
  public gameDuration: number;
  public participants: Participant[];

  public constructor(requestObject: any, region: JarvanEnum.Regions, wrapper: JarvanScript) {
    super(region, wrapper);
    const {
      teams,
      mapId,
      gameId,
      queueId,
      seasonId,
      gameMode,
      gameType,
      platformId,
      gameVersion,
      gameCreation,
      gameDuration,
      participants,
      participantIdentities,
    } = requestObject;

    const fullParticipants = participants.map((participant) => {
      participant.player = participantIdentities.find(
        ({ participantId }) => participantId === participant.participantId,
      ).player;

      return participant;
    });

    this.teams = teams.map((team) => new Team(team, region, wrapper));
    this.mapId = mapId;
    this.gameId = gameId;
    this.queueId = queueId;
    this.seasonId = seasonId;
    this.gameMode = gameMode;
    this.gameType = gameType;
    this.platformId = platformId;
    this.gameVersion = gameVersion;
    this.gameCreation = gameCreation;
    this.gameDuration = gameDuration;
    this.participants = fullParticipants.map(
      (participant) => new Participant(participant, region, wrapper),
    );
  }
}
