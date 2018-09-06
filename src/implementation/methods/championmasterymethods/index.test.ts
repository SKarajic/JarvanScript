import { expect } from "chai";
import "mocha";
import { ChampionMasteryMethods } from ".";
import { Regions } from "../../../enums/";
import { KeyManager, RegionManager } from "../../managers";
import { ChampionMastery } from "./classes";

require("dotenv").config();

beforeEach(() => {
    RegionManager.getInstance().setRegion(Regions.EUW);
    KeyManager.getInstance().setKey(process.env.RIOT_API_KEY as string);
});

describe("ChampionMasteryMethods", () => {
    it("should get champion masteries of summoner", async () => {
        try {
            const cm = await ChampionMasteryMethods.getChampionMasteries(69658457);
            expect(cm[0].id).to.be.a("number");
        } catch (err) {
            console.log(err);
        }
    });

    it("should get champion masteries of summoner with champion id 7", async () => {
        try {
            const cm = await ChampionMasteryMethods.getChampionMasteries(69658457, 7);
            expect(cm[0].id).to.equal(7);
        } catch (err) {
            console.log(err);
        }
    });

    it("should get the total amount of points of summoner", async () => {
        try {
            const level = await ChampionMasteryMethods.getChampionMasteryScore(69658457);
            expect(level).to.be.a("number");
        } catch (err) {
            console.log(err);
        }
    });
});
