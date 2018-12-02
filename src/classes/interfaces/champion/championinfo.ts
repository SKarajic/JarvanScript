/**
 * General Champion status info
 */
export interface ChampionInfo {
  readonly rankedEnabled: boolean;
  readonly customBotEnabled: boolean;
  readonly coopBotEnabled: boolean;
  readonly active: boolean;
  readonly freeToPlay: boolean;
  readonly id: number;
}