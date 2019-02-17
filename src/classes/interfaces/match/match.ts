import { Participant } from "./participant";
import { Team } from "./team";

export interface Match {
  id: number;
  teams: Team[];
  mapId: number;
  queueId: number;
  seasonId: number;
  gameMode: string;
  gameType: string;
  platformId: string;
  gameVersion: string;
  gameCreation: number;
  gameDuration: number;
  participants: Participant[];
}
