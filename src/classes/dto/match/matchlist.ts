import JarvanScript from "../../../jarvanscript";
import JarvanEnum from "../../enums";
import JarvanModelInterface from "../../interfaces";
import { DTO } from "../abstract/index";

import { MatchReference } from "./matchreference";

export class MatchList extends DTO implements JarvanModelInterface.Match.MatchList {
  public matches: MatchReference[];
  public startIndex: number;
  public endIndex: number;
  public totalGames: number;

  public constructor(requestObject: any, region: JarvanEnum.Regions, wrapper: JarvanScript) {
    super(region, wrapper);
    const {
      totalGames,
      startIndex,
      endIndex,
      matches,
    } = requestObject;

    this.matches = matches.map((match) => new MatchReference(match, region, this.wrapper));
    this.totalGames = totalGames;
    this.startIndex = startIndex;
    this.endIndex = endIndex;
  }
}
