export const Methods = {
  CHAMPION: {
    VALUE: "https://{region}.api.riotgames.com/lol/platform/v3/champion-rotations",
  },
  CHAMPION_MASTERY: {
    CHAMPION_MASTERIES: {
      BY_SUMMONER_ID: {
        BY_CHAMPION_ID: {
          VALUE: "https://{region}.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/{summonerId}/by-champion/{championId}",
        },
        VALUE: "https://{region}.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/{summonerId}",
      },
    },
    SCORES: {
      BY_SUMMONER_ID: {
        VALUE: "https://{region}.api.riotgames.com/lol/champion-mastery/v4/scores/by-summoner/{summonerId}",
      },
    },
  },
  LEAGUE: {
    CHALLENGER_LEAGUES: {
      BY_QUEUE: {
        VALUE: "https://{region}.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/{queue}",
      },
    },
    LEAGUES: {
      BY_LEAGUE_ID: {
        VALUE: "https://{region}.api.riotgames.com/lol/league/v4/leagues/{leagueId}",
      },
    },
    MASTER_LEAGUES: {
      BY_QUEUE: {
        VALUE: "https://{region}.api.riotgames.com/lol/league/v4/masterleagues/by-queue/{queue}",
      },
    },
    POSITIONS: {
      BY_SUMMONER_ID: {
        VALUE: "https://{region}.api.riotgames.com/lol/league/v4/positions/by-summoner/{summonerId}",
      },
    },
  },
  MATCH: {
    MATCHES: {
      BY_MATCH_ID: {
        BY_TOURNAMENT_CODE: {
          VALUE: "https://{region}.api.riotgames.com/lol/match/v4/matches/{matchId}/by-tournament-code/{tournamentCode}",
        },
        VALUE: "https://{region}.api.riotgames.com/lol/match/v4/matches/{matchId}",
      },
      BY_TOURNAMENT_CODE: {
        VALUE: "https://{region}.api.riotgames.com/lol/match/v4/matches/by-tournament-code/{tournamentCode}/ids",
      },
    },
    MATCH_LISTS: {
      BY_ACCOUNT_ID: {
        RECENT: {
          VALUE: "https://{region}.api.riotgames.com/lol/match/v4/matchlists/by-account/{accountId}/recent",
        },
        VALUE: "https://{region}.api.riotgames.com/lol/match/v4/matchlists/by-account/{accountId}",
      },
    },
    TIMELINES: {
      BY_MATCH_ID: {
        VALUE: "https://{region}.api.riotgames.com/lol/match/v4/timelines/by-match/{matchId}",
      },
    },
  },
  SPECTATOR: {
    ACTIVE_GAMES: {
      BY_SUMMONER_ID: {
        VALUE: "https://{region}.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/{summonerId}",
      },
    },
    FEATURED_GAMES: {
      VALUE: "https://{region}.api.riotgames.com/lol/spectator/v4/featured-games",
    },
  },
  STATIC_DATA: {
    CHAMPIONS: {
      BY_CHAMPION_ID: {
        VALUE: "https://{region}.api.riotgames.com/lol/static-data/v3/champions/{championId}",
      },
      VALUE: "https://{region}.api.riotgames.com/lol/static-data/v3/champions",
    },
    ITEMS: {
      BY_ITEM_ID: {
        VALUE: "https://{region}.api.riotgames.com/lol/static-data/v3/items/{itemId}",
      },
      VALUE: "https://{region}.api.riotgames.com/lol/static-data/v3/items",
    },
    LANGUAGES: {
      VALUE: "https://{region}.api.riotgames.com/lol/static-data/v3/languages",
    },
    LANGUAGE_STRINGS: {
      VALUE: "https://{region}.api.riotgames.com/lol/static-data/v3/language-strings",
    },
    MAPS: {
      VALUE: "https://{region}.api.riotgames.com/lol/static-data/v3/maps",
    },
    MASTERIES: {
      BY_MASTERY_ID: {
        VALUE: "https://{region}.api.riotgames.com/lol/static-data/v3/masteries/{masteryId}",
      },
      VALUE: "https://{region}.api.riotgames.com/lol/static-data/v3/masteries",
    },
    PROFILE_ICONS: {
      VALUE: "https://{region}.api.riotgames.com/lol/static-data/v3/profile-icons",
    },
    REALMS: {
      VALUE: "https://{region}.api.riotgames.com/lol/static-data/v3/realms",
    },
    RUNES: {
      BY_RUNE_ID: {
        VALUE: "https://{region}.api.riotgames.com/lol/static-data/v3/runes/{id}",
      },
      VALUE: "https://{region}.api.riotgames.com/lol/static-data/v3/runes",
    },
    SUMMONER_SPELLS: {
      BY_SUMMONER_SPELL_ID: {
        VALUE: "https://{region}.api.riotgames.com/lol/static-data/v3/summoner-spells/{summonerSpellId}",
      },
      VALUE: "https://{region}.api.riotgames.com/lol/static-data/v3/summoner-spells",
    },
    VERSIONS: {
      VALUE: "https://{region}.api.riotgames.com/lol/static-data/v3/versions",
    },
  },
  STATUS: {
    VALUE: "https://{region}.api.riotgames.com/lol/status/v3/shard-data",
  },
  SUMMONER: {
    BY_ACCOUNT_ID: {
      VALUE: " https://{region}.api.riotgames.com/lol/summoner/v4/summoners/by-account/{accountId}",
    },
    BY_SUMMONER_ID: {
      VALUE: "https://{region}.api.riotgames.com/lol/summoner/v4/summoners/{summonerId}",
    },
    BY_SUMMONER_NAME: {
      VALUE: "https://{region}.api.riotgames.com/lol/summoner/v4/summoners/by-name/{summonerName}",
    },
  },
};
