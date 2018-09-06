import { Regions } from "../../../../enums";
import { AbstractMethodClass } from "../../abstractmethodclass";

export default class ChampionMastery extends AbstractMethodClass {
    public chestGranted: boolean;
    public level: number;
    public points: number;
    public id: number;
    public summonerId: number;
    public pointsUntilNextLevel: number;
    public pointsSinceLastLevel: number;
    public lastPlayTime: number;

    constructor(requestObject: any, region: Regions) {
        super(region);
        const {
            chestGranted,
            championLevel,
            championPoints,
            championId,
            playerId,
            championPointsUntilNextLevel,
            championPointsSinceLastLevel,
            lastPlayTime,
        } = requestObject;

        this.pointsUntilNextLevel = championPointsUntilNextLevel;
        this.pointsSinceLastLevel = championPointsSinceLastLevel;
        this.lastPlayTime = lastPlayTime;
        this.chestGranted = chestGranted;
        this.points = championPoints;
        this.summonerId = playerId;
        this.level = championLevel;
        this.id = championId;
    }
}
