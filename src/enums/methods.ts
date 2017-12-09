const Methods = {
    CHAMPION_MASTERY: {
        CHAMPION_MASTERIES: {
            BY_SUMMONER_ID: {
                VALUE: "https://{region}.api.riotgames.com/lol/champion-mastery/v3/champion-masteries/by-summoner/{summonerId}",
                BY_CHAMPION_ID: {
                    VALUE: "https://{region}.api.riotgames.com/lol/champion-mastery/v3/champion-masteries/by-summoner/{summonerId}/by-champion/{championId}"
                }
            }
        },
        SCORES: {
            BY_SUMMONER_ID: {
                VALUE: "https://{region}.api.riotgames.com/lol/champion-mastery/v3/scores/by-summoner/{summonerId}"
            }
        },
    },
    CHAMPION: {
        VALUE: "https://{region}.api.riotgames.com/lol/platform/v3/champions",
        BY_CHAMPION_ID: {
            VALUE: "https://{region}.api.riotgames.com/lol/platform/v3/champions/{championId}"
        }
    },
    LEAGUE: {
        CHALLENGER_LEAGUES: {
            BY_QUEUE: {
                VALUE: "https://{region}.api.riotgames.com/lol/league/v3/challengerleagues/by-queue/{queue}"
            }
        },
        MASTER_LEAGUES: {
            BY_QUEUE: {
                VALUE: "https://{region}.api.riotgames.com/lol/league/v3/masterleagues/by-queue/{queue}"
            }
        },
        LEAGUES: {
            BY_LEAGUE_ID: {
                VALUE: "https://{region}.api.riotgames.com/lol/league/v3/leagues/{leagueId}"
            }
        },
        POSITIONS: {
            BY_SUMMONER_ID: {
                VALUE: "https://{region}.api.riotgames.com/lol/league/v3/positions/by-summoner/{summonerId}"
            }
        },
    },
    STATIC_DATA: {
        CHAMPIONS: {
            VALUE: "https://{region}.api.riotgames.com/lol/static-data/v3/champions",
            BY_CHAMPION_ID: {
                VALUE: "https://{region}.api.riotgames.com/lol/static-data/v3/champions/{championId}"
            }
        },
        ITEMS: {
            VALUE: "https://{region}.api.riotgames.com/lol/static-data/v3/items",
            BY_ITEM_ID: {
                VALUE: "https://{region}.api.riotgames.com/lol/static-data/v3/items/{itemId}"
            }
        },
        LANGUAGE_STRINGS: {
            VALUE: "https://{region}.api.riotgames.com/lol/static-data/v3/language-strings"
        },
        LANGUAGES: {
            VALUE: "https://{region}.api.riotgames.com/lol/static-data/v3/languages"
        },
        MAPS: {
            VALUE: "https://{region}.api.riotgames.com/lol/static-data/v3/maps"
        },
        MASTERIES: {
            VALUE: "https://{region}.api.riotgames.com/lol/static-data/v3/masteries",
            BY_MASTERY_ID: {
                VALUE: "https://{region}.api.riotgames.com/lol/static-data/v3/masteries/{masteryId}"
            }
        },
        PROFILE_ICONS: {
            VALUE: "https://{region}.api.riotgames.com/lol/static-data/v3/profile-icons"
        },
        REALMS: {
            VALUE: "https://{region}.api.riotgames.com/lol/static-data/v3/realms"
        },
        RUNES: {
            VALUE: "https://{region}.api.riotgames.com/lol/static-data/v3/runes",
            BY_RUNE_ID: {
                VALUE: "https://{region}.api.riotgames.com/lol/static-data/v3/runes/{id}"
            }
        },
        SUMMONER_SPELLS: {
            VALUE: "https://{region}.api.riotgames.com/lol/static-data/v3/summoner-spells",
            BY_SUMMONER_SPELL_ID: {
                VALUE: "https://{region}.api.riotgames.com/lol/static-data/v3/summoner-spells/{summonerSpellId}"
            }
        },
        VERSIONS: {
            VALUE: "https://{region}.api.riotgames.com/lol/static-data/v3/versions"
        },
    },
    STATUS: {
        VALUE: "https://{region}.api.riotgames.com/lol/status/v3/shard-data"
    },
    MATCH: {
        MATCHES: {
            BY_MATCH_ID: {
                VALUE: "https://{region}.api.riotgames.com/lol/match/v3/matches/by-tournament-code/{tournamentCode}/ids"
            }
        },
        MATCH_LISTS: {
            BY_ACCOUNT_ID: {
                VALUE: "https://{region}.api.riotgames.com/lol/match/v3/matchlists/by-account/{accountId}",
                RECENT: {
                    VALUE: "https://{region}.api.riotgames.com/lol/match/v3/matchlists/by-account/{accountId}/recent"
                }
            }
        },
        TIMELINES: {
            BY_MATCH_ID: {
                VALUE: "https://{region}.api.riotgames.com/lol/match/v3/timelines/by-match/{matchId}"
            }
        },
    },
    SPECTATOR: {
        ACTIVE_GAMES: {
            BY_SUMMONER_ID: {
                VALUE: "https://{region}.api.riotgames.com/lol/spectator/v3/active-games/by-summoner/{summonerId}"
            }
        },
        FEATURED_GAMES: {
            VALUE: "https://{region}.api.riotgames.com/lol/spectator/v3/featured-games"
        },
    },
    SUMMONER: {
        BY_SUMMONER_ID: {
            VALUE: "https://{region}.api.riotgames.com/lol/summoner/v3/summoners/{summonerId}"
        },
        BY_SUMMONER_NAME: {
            VALUE: "https://{region}.api.riotgames.com/lol/summoner/v3/summoners/by-name/{summonerName}"
        },
        BY_ACCOUNT_ID: {
            VALUE: " https://{region}.api.riotgames.com/lol/summoner/v3/summoners/by-account/{accountId}"
        },
    },
}
export default Methods;
