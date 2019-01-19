import "mocha";

import JarvanEnum from "../classes/enums";
import JarvanManager from "../classes/managers";

import { SpectateMethods } from "./spectate";

import dotenv = require("dotenv");
dotenv.config();

beforeEach(() => {
  JarvanManager.RegionManager.getInstance().setRegion(JarvanEnum.Regions.EUW);
  JarvanManager.KeyManager.getInstance().setKey(process.env.RIOT_API_KEY as string);
});

describe("SpectateMethods", () => {
  it("should get spectator data of a summoner", (done) => {
    SpectateMethods.spectateMatch("tu4I5AhSHMeBKthXHTs396jAdVSTHtrYdktyow1rwOICvAk")
    .then((data) => {
      done();
    });
  });

  it("should get featured matches", (done) => {
    SpectateMethods.featuredMatches()
    .then((data) => {
      done();
    });
  });
});
