/**
 * Summoner's Profile Icon
 */
export interface ProfileIcon {
  readonly id: number;
  getURL(patch: string): string;
}
