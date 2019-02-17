export interface ScoreStats {
  totalScoreRank: number;
  totalPlayerScore: number;
  combatPlayerScore: number;
  objectivePlayerScore: number;
  playerScores: Map<number, number>;
}
