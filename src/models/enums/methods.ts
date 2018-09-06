const Methods = {
  CHAMPION: {
    BY_CHAMPION_ID: {
      VALUE: "https://{region}.api.riotgames.com/lol/platform/v3/champions/{championId}",
    },
    VALUE: "https://{region}.api.riotgames.com/lol/platform/v3/champions",
  },
  CHAMPION_MASTERY: {
    CHAMPION_MASTERIES: {
      BY_SUMMONER_ID: {
        BY_CHAMPION_ID: {
          VALUE: "https://{region}.api.riotgames.com/lol/champion-mastery/v3/champion-masteries/by-summoner/{summonerId}/by-champion/{championId}",
        },
        VALUE: "https://{region}.api.riotgames.com/lol/champion-mastery/v3/champion-masteries/by-summoner/{summonerId}",
      },
    },
    SCORES: {
      BY_SUMMONER_ID: {
        VALUE: "https://{region}.api.riotgames.com/lol/champion-mastery/v3/scores/by-summoner/{summonerId}",
      },
    },
  },
  LEAGUE: {
    CHALLENGER_LEAGUES: {
      BY_QUEUE: {
        VALUE: "https://{region}.api.riotgames.com/lol/league/v3/challengerleagues/by-queue/{queue}",
      },
    },
    LEAGUES: {
      BY_LEAGUE_ID: {
        VALUE: "https://{region}.api.riotgames.com/lol/league/v3/leagues/{leagueId}",
      },
    },
    MASTER_LEAGUES: {
      BY_QUEUE: {
        VALUE: "https://{region}.api.riotgames.com/lol/league/v3/masterleagues/by-queue/{queue}",
      },
    },
    POSITIONS: {
      BY_SUMMONER_ID: {
        VALUE: "https://{region}.api.riotgames.com/lol/league/v3/positions/by-summoner/{summonerId}",
      },
    },
  },
  MATCH: {
    MATCHES: {
      BY_MATCH_ID: {
        BY_TOURNAMENT_CODE: {
          VALUE: "https://{region}.api.riotgames.com/lol/match/v3/matches/{matchId}/by-tournament-code/{tournamentCode}",
        },
        VALUE: "https://{region}.api.riotgames.com/lol/match/v3/matches/{matchId}",
      },
      BY_TOURNAMENT_CODE: {
        VALUE: "https://{region}.api.riotgames.com/lol/match/v3/matches/by-tournament-code/{tournamentCode}/ids",
      },
    },
    MATCH_LISTS: {
      BY_ACCOUNT_ID: {
        RECENT: {
          VALUE: "https://{region}.api.riotgames.com/lol/match/v3/matchlists/by-account/{accountId}/recent",
        },
        VALUE: "https://{region}.api.riotgames.com/lol/match/v3/matchlists/by-account/{accountId}",
      },
    },
    TIMELINES: {
      BY_MATCH_ID: {
        VALUE: "https://{region}.api.riotgames.com/lol/match/v3/timelines/by-match/{matchId}",
      },
    },
  },
  SPECTATOR: {
    ACTIVE_GAMES: {
      BY_SUMMONER_ID: {
        VALUE: "https://{region}.api.riotgames.com/lol/spectator/v3/active-games/by-summoner/{summonerId}",
      },
    },
    FEATURED_GAMES: {
      VALUE: "https://{region}.api.riotgames.com/lol/spectator/v3/featured-games",
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
      VALUE: " https://{region}.api.riotgames.com/lol/summoner/v3/summoners/by-account/{accountId}",
    },
    BY_SUMMONER_ID: {
      VALUE: "https://{region}.api.riotgames.com/lol/summoner/v3/summoners/{summonerId}",
    },
    BY_SUMMONER_NAME: {
      VALUE: "https://{region}.api.riotgames.com/lol/summoner/v3/summoners/by-name/{summonerName}",
    },
  },
};
export default Methods;
