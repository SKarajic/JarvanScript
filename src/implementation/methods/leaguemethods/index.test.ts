import { expect } from "chai";
import "mocha";
import { LeagueMethods } from ".";
import { Regions } from "../../../enums/";
import { KeyManager, RegionManager } from "../../managers";

require("dotenv").config();

beforeEach(() => {
    RegionManager.getInstance().setRegion(Regions.EUW);
    KeyManager.getInstance().setKey(process.env.RIOT_API_KEY as string);
});

describe("LeagueMethods", () => {
    it("should get the challenger solo queue league", async () => {
        try {
            const ladder = await LeagueMethods.getChallengerLeague("RANKED_SOLO_5x5");
            expect(ladder.name).to.be.a("string");
        } catch (err) {
            console.log(err);
        }
    });

    it("should get the master solo queue league", async () => {
        try {
            const ladder = await LeagueMethods.getMasterLeague("RANKED_SOLO_5x5");
            expect(ladder.name).to.be.a("string");
        } catch (err) {
            console.log(err);
        }
    });

    it("should get the ranks of a summoner", async () => {
        try {
            const leaguePositions = await LeagueMethods.getRanks(69658457);
            expect(leaguePositions[0].leagueId).to.be.a("string");
        } catch (err) {
            console.log(err);
        }
    });

    it("should get the league of a summoner", async () => {
        try {
            const leaguePositions = await LeagueMethods.getRanks(69658457);
            const leagueList = await LeagueMethods.getLeague(leaguePositions[0].leagueId);

            expect(leaguePositions[0].leagueId).to.be.a("string");
            expect(leagueList.name).to.be.a("string");
        } catch (err) {
            console.log(err);
        }
    });
});
