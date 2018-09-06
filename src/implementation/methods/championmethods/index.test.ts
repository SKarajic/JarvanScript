import { expect } from "chai";
import "mocha";
import { ChampionMethods } from ".";
import { Regions } from "../../../enums/";
import { KeyManager, RegionManager } from "../../managers";

import dotenv = require("dotenv");
dotenv.config();

beforeEach(() => {
    RegionManager.getInstance().setRegion(Regions.EUW);
    KeyManager.getInstance().setKey(process.env.RIOT_API_KEY as string);
});

describe("ChampionMethods", () => {
    it("should get data of all champions", async () => {
        const cil = await ChampionMethods.getChampions();
        expect(cil[0].id).to.be.a("number");
    });

    it("should get data of champion with id 7", async () => {
        const cil = await ChampionMethods.getChampions(7);
        expect(cil[0].id).to.be.a("number");
    });
});
