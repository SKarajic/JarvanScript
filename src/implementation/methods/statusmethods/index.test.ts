import { expect } from "chai";
import "mocha";
import { StatusMethods } from ".";
import { Regions } from "../../../enums/";
import { KeyManager, RegionManager } from "../../managers";

import dotenv = require("dotenv");
dotenv.config();

beforeEach(() => {
    RegionManager.getInstance().setRegion(Regions.EUW);
    KeyManager.getInstance().setKey(process.env.RIOT_API_KEY as string);
});

describe("StatusMethods", () => {
    it("should get status", (done) => {
        StatusMethods.getStatus()
            .then((data) => {
                done();
            });
    });
});
