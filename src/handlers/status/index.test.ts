import "mocha";
import { StatusMethods } from ".";
import { Regions } from "../../models/enums";
import { KeyManager, RegionManager } from "../../models/managers";

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
