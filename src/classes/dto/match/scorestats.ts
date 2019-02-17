import JarvanScript from "../../../jarvanscript";
import JarvanEnum from "../../enums";
import JarvanModelInterface from "../../interfaces";
import { DTO } from "../abstract/index";

export class ScoreStats extends DTO implements JarvanModelInterface.Match.ScoreStats {
  public totalScoreRank: number;
  public totalPlayerScore: number;
  public combatPlayerScore: number;
  public objectivePlayerScore: number;
  public playerScores: Map<number, number>;

  public constructor(requestObject: any, region: JarvanEnum.Regions, wrapper: JarvanScript) {
    super(region, wrapper);
    const {
      playerScore0,
      playerScore1,
      playerScore2,
      playerScore3,
      playerScore4,
      playerScore5,
      playerScore6,
      playerScore7,
      playerScore8,
      playerScore9,
      totalScoreRank,
      totalPlayerScore,
      combatPlayerScore,
      objectivePlayerScore,
    } = requestObject;

    this.playerScores = (new Map<number, number>())
      .set(1, playerScore0)
      .set(2, playerScore1)
      .set(3, playerScore2)
      .set(4, playerScore3)
      .set(5, playerScore4)
      .set(6, playerScore5)
      .set(7, playerScore6)
      .set(8, playerScore7)
      .set(9, playerScore8)
      .set(10, playerScore9);

    this.totalScoreRank = totalScoreRank;
    this.totalPlayerScore = totalPlayerScore;
    this.combatPlayerScore = combatPlayerScore;
    this.objectivePlayerScore = objectivePlayerScore;
  }
}
