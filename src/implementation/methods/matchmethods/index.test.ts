import { expect } from "chai";
import "mocha";
import { MatchMethods } from ".";
import { Regions } from "../../../enums/";
import { KeyManager, RegionManager } from "../../managers";

require("dotenv").config();

beforeEach(() => {
    RegionManager.getInstance().setRegion(Regions.EUW);
    KeyManager.getInstance().setKey(process.env.RIOT_API_KEY as string);
});

describe("MatchMethods", () => {
    it("should get matchlist of summoner", (done) => {
        MatchMethods.getMatchList(219406964)
            .then((data) => {
                done();
            })
            .catch((err) => console.log(err));
    });

    it("should get recent matchlist of summoner", (done) => {
        MatchMethods.getMatchList(219406964)
            .then((data) => {
                done();
            })
            .catch((err) => console.log(err));
    });

    it("should get match info of one of the matches of summoner", (done) => {
        MatchMethods.getMatchList(219406964)
            .then((data) => MatchMethods.getMatchInfo(data.matches[0].gameId))
            .then((data) => {
                done();
            })
            .catch((err) => console.log(err));
    });

    it("should get match timeline of one of the matches of summoner", (done) => {
        MatchMethods.getMatchList(219406964)
            .then((data) => MatchMethods.getMatchTimeline(data.matches[0].gameId))
            .then((data) => {
                done();
            })
            .catch((err) => console.log(err));
    });
});
