import "mocha";

import JarvanManager from "../classes/managers";
import JarvanEnum from "../classes/enums";

import { MatchMethods } from "./match";

import dotenv = require("dotenv");
dotenv.config();

beforeEach(() => {
  JarvanManager.RegionManager.getInstance().setRegion(JarvanEnum.Regions.EUW);
  JarvanManager.KeyManager.getInstance().setKey(process.env.RIOT_API_KEY as string);
});

describe("MatchMethods", () => {
  it("should get matchlist of summoner", (done) => {
    MatchMethods.getMatchList(219406964)
    .then((data) => {
      done();
    });
  });

  it("should get recent matchlist of summoner", (done) => {
    MatchMethods.getMatchList(219406964)
    .then((data) => {
      done();
    });
  });

  it("should get match info of one of the matches of summoner", (done) => {
    MatchMethods.getMatchList(219406964)
    .then((data) => MatchMethods.getMatchInfo(data.matches[0].gameId))
    .then((data) => {
      done();
    });
  });

  it("should get match timeline of one of the matches of summoner", (done) => {
    MatchMethods.getMatchList(219406964)
    .then((data) => MatchMethods.getMatchTimeline(data.matches[0].gameId))
    .then((data) => {
      done();
    });
  });
});
