import "mocha";
import { SummonerMethods } from ".";
import { JarvanScript } from "../..";
import { Regions } from "../../models";

import dotenv = require("dotenv");
dotenv.config();

const wrapper = new JarvanScript(process.env.RIOT_API_KEY as string, Regions.EUW, {});

describe("SummonerMethods", () => {
  it("should get summoner by account id", (done) => {
    SummonerMethods.getSummonerByAccountId(wrapper, 219406964)
    .then((data) => {
      done();
    });
  });

  it("should get summoner by summoner id", (done) => {
    SummonerMethods.getSummonerById(wrapper, 69658457)
    .then((data) => {
      done();
    });
  });

  it("should get summoner by summoner name", (done) => {
    SummonerMethods.getSummonerByName(wrapper, "IAmTheWhite")
    .then((data) => {
      done();
    });
  });
});
