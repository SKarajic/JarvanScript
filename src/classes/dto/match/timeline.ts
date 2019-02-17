import JarvanScript from "../../../jarvanscript";
import JarvanEnum from "../../enums";
import JarvanModelInterface from "../../interfaces";
import { DTO } from "../abstract/index";

export class Timeline extends DTO implements JarvanModelInterface.Match.Timeline {
  public role: string;
  public lane: string;
  public participantId: number;
  public xpPerMinDeltas: Map<string, number>;
  public goldPerMinDeltas: Map<string, number>;
  public creepsPerMinDeltas: Map<string, number>;
  public csDiffPerMinDeltas: Map<string, number>;
  public xpDiffPerMinDeltas: Map<string, number>;
  public damageTakenPerMinDeltas: Map<string, number>;
  public damageTakenDiffPerMinDeltas: Map<string, number>;

  public constructor(requestObject: any, region: JarvanEnum.Regions, wrapper: JarvanScript) {
    super(region, wrapper);
    const {
      role,
      lane,
      participantId,
      xpPerMinDeltas,
      goldPerMinDeltas,
      creepsPerMinDeltas,
      csDiffPerMinDeltas,
      xpDiffPerMinDeltas,
      damageTakenPerMinDeltas,
      damageTakenDiffPerMinDeltas,
    } = requestObject;

    this.role = role;
    this.lane = lane;
    this.participantId = participantId;
    this.xpPerMinDeltas = generateMap(xpPerMinDeltas);
    this.goldPerMinDeltas = generateMap(goldPerMinDeltas);
    this.creepsPerMinDeltas = generateMap(creepsPerMinDeltas);
    this.csDiffPerMinDeltas = generateMap(csDiffPerMinDeltas);
    this.xpDiffPerMinDeltas = generateMap(xpDiffPerMinDeltas);
    this.damageTakenPerMinDeltas = generateMap(damageTakenPerMinDeltas);
    this.damageTakenDiffPerMinDeltas = generateMap(damageTakenDiffPerMinDeltas);
  }
}

function generateMap(item: object): Map<string, number> {
  const map = new Map<string, number>();

  for (const key in item) {
    if (item.hasOwnProperty(key)) {
      map.set(key, item[key]);
    }
  }

  return map;
}
