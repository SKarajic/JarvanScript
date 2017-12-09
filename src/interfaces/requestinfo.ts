import { Queues } from "../enums";

export interface RequestInfo {  
    byAccountId?: number,
    byChampionId?: number,
    byItemId?: number,
    byLeagueId?: number,
    byMasteryId?: number,
    byMatchId?: number,
    byQueue?: string|Queues,
    byRuneId?: number,
    bySummonerId?: number,
    bySummonerName?: string,
    bySummonerSpellId: number
}