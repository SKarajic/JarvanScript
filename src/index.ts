import DTO from "./classes/dto";
import JarvanScript from "./jarvanscript";

import * as Queues from "./classes/enums/queues";
import * as Regions from "./classes/enums/regions";

module.exports = {
  Champion: DTO.Champion,
  ChampionMastery: DTO.ChampionMastery,
  DTO,
  League: DTO.League,
  Match: DTO.Match,
  Queues: Queues.Queues,
  Regions: Regions.Regions,
  Status: DTO.Status,
  Summoner: DTO.Summoner,
  default: JarvanScript,
};
