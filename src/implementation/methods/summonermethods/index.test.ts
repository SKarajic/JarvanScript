import { expect } from "chai";
import "mocha";
import { SummonerMethods } from ".";
import { Regions } from "../../../enums/";
import { KeyManager, RegionManager } from "../../managers";

import dotenv = require("dotenv");
dotenv.config();

beforeEach(() => {
  RegionManager.getInstance().setRegion(Regions.EUW);
  KeyManager.getInstance().setKey(process.env.RIOT_API_KEY as string);
});

describe("SummonerMethods", () => {
  it("should get summoner by account id", (done) => {
    SummonerMethods.getSummonerByAccountId(219406964)
    .then((data) => {
      done();
    });
  });
  
  it("should get summoner by summoner id", (done) => {
    SummonerMethods.getSummonerById(69658457)
    .then((data) => {
      done();
    });
  });
  
  it("should get summoner by summoner name", (done) => {
    SummonerMethods.getSummonerByName("IAmTheWhite")
    .then((data) => {
      done();
    });
  });
});
