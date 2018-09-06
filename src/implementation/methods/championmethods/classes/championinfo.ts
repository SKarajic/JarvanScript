import { Regions } from "../../../../enums";
import { AbstractMethodClass } from "../../abstractmethodclass";

export default class ChampionInfo extends AbstractMethodClass {
    public rankedEnabled: boolean;
    public customBotEnabled: boolean;
    public coopBotEnabled: boolean;
    public active: boolean;
    public freeToPlay: boolean;
    public id: number;

    constructor(requestObject: any, region: Regions) {
        super(region);
        const {
            rankedPlayEnabled,
            botEnabled,
            botMmEnabled,
            active,
            freeToPlay,
            id,
        } = requestObject;

        this.rankedEnabled = rankedPlayEnabled;
        this.customBotEnabled = botEnabled;
        this.coopBotEnabled = botMmEnabled;
        this.freeToPlay = freeToPlay;
        this.active = active;
        this.id = id;
    }
}
