import { Queues } from "../enums";

export interface RequestInfo {  
    accountId?: number,
    championId?: number,
    itemId?: number,
    leagueId?: number,
    masteryId?: number,
    matchId?: number,
    queue?: string|Queues,
    runeId?: number,
    summonerId?: number,
    summonerName?: string,
    summonerSpellId?: number
}