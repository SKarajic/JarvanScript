import { ProfileIcon } from "./profileicon";

/**
 * Summoner
 */
export interface Summoner {
  readonly id: string;
  readonly accountId: string;
  readonly name: string;
  readonly profileIcon: ProfileIcon;
  readonly level: number;
  readonly revisionDate: Date;
}
