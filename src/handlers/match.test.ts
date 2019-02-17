import { expect } from "chai";
import "mocha";

import JarvanEnum from "../classes/enums";
import JarvanManager from "../classes/managers";
import JarvanScript from "../jarvanscript";

import { MatchMethods } from "./match";

import dotenv = require("dotenv");
dotenv.config();

const wrapper = new JarvanScript(process.env.RIOT_API_KEY as string, JarvanEnum.Regions.EUW, {});

beforeEach(() => {
  JarvanManager.RegionManager.getInstance().setRegion(JarvanEnum.Regions.EUW);
  JarvanManager.KeyManager.getInstance().setKey(process.env.RIOT_API_KEY as string);
});

describe("MatchMethods", () => {
  it("should get matchlist of summoner", async () => {
    const matchList = await MatchMethods.getMatchList(wrapper, "aZkB1Uo_IAKjX2dwqzwOyC0gouGTz8PQ_mBsY7JEaXaOwcY");
    expect(matchList.startIndex).to.equal(0);
    expect(matchList.endIndex).to.equal(100);
    expect(matchList.matches.length).to.equal(100);
  });

  it("should get match info of one of the matches of summoner", async () => {
    const matchList = await MatchMethods.getMatchList(wrapper, "aZkB1Uo_IAKjX2dwqzwOyC0gouGTz8PQ_mBsY7JEaXaOwcY");
    const match = await MatchMethods.getMatch(wrapper, matchList.matches[0].gameId);
    expect(match.gameId).to.equal(matchList.matches[0].gameId);
  });

  it("should get match timeline of one of the matches of summoner", (done) => {
    MatchMethods.getMatchList(wrapper, "aZkB1Uo_IAKjX2dwqzwOyC0gouGTz8PQ_mBsY7JEaXaOwcY")
    .then((data) => MatchMethods.getMatchTimeline(data.matches[0].gameId))
    .then((data) => {
      done();
    });
  });
});
