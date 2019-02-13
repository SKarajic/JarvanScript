import { expect } from "chai";
import "mocha";

import JarvanScript from "../jarvanscript";
import JarvanEnum from "../classes/enums";

import { LeagueMethods } from "./league";

import dotenv = require("dotenv");
dotenv.config();

const wrapper = new JarvanScript(process.env.RIOT_API_KEY as string, JarvanEnum.Regions.EUW, {});

describe("LeagueMethods", () => {
  it("should get the challenger solo queue league", async () => {
    const ladder = await LeagueMethods.getChallengerLeague(wrapper, "RANKED_SOLO_5x5");
    expect(ladder.tier).to.equal("CHALLENGER");
  });

  it("should get the grand master solo queue league", async () => {
    const ladder = await LeagueMethods.getGrandMasterLeague(wrapper, "RANKED_SOLO_5x5");
    expect(ladder.name).to.be.a("string");
  });

  it("should get the master solo queue league", async () => {
    const ladder = await LeagueMethods.getMasterLeague(wrapper, "RANKED_SOLO_5x5");
    expect(ladder.name).to.be.a("string");
  });

  it("should get the ranks of a summoner", async () => {
    const leaguePositions = await LeagueMethods.getRanks(wrapper, "tu4I5AhSHMeBKthXHTs396jAdVSTHtrYdktyow1rwOICvAk");
    expect(leaguePositions[0].leagueId).to.be.a("string");
  });

  it("should get the league of a summoner", async () => {
    const leaguePositions = await LeagueMethods.getRanks(wrapper, "tu4I5AhSHMeBKthXHTs396jAdVSTHtrYdktyow1rwOICvAk");
    const leagueList = await LeagueMethods.getLeague(wrapper, leaguePositions[0].leagueId);

    expect(leaguePositions[0].leagueId).to.be.a("string");
    expect(leagueList.name).to.be.a("string");
  });
});
