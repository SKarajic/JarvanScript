export interface Timeline {
  role: string;
  lane: string;
  participantId: number;
  xpPerMinDeltas: Map<string, number>;
  goldPerMinDeltas: Map<string, number>;
  creepsPerMinDeltas: Map<string, number>;
  csDiffPerMinDeltas: Map<string, number>;
  xpDiffPerMinDeltas: Map<string, number>;
  damageTakenPerMinDeltas: Map<string, number>;
  damageTakenDiffPerMinDeltas: Map<string, number>;
}
