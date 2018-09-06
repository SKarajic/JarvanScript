import { expect } from "chai";
import "mocha";
import { SpectateMethods } from ".";
import { Regions } from "../../../enums/";
import { KeyManager, RegionManager } from "../../managers";

require("dotenv").config();

beforeEach(() => {
    RegionManager.getInstance().setRegion(Regions.EUW);
    KeyManager.getInstance().setKey(process.env.RIOT_API_KEY as string);
});

describe("SpectateMethods", () => {
    it("should get spectator data of a summoner", (done) => {
        SpectateMethods.spectateMatch(69658457)
            .then((data) => {
                done();
            })
            .catch((err) => console.log(err));
    });

    it("should get featured matches", (done) => {
        SpectateMethods.featuredMatches()
            .then((data) => {
                done();
            })
            .catch((err) => console.log(err));
    });
});
