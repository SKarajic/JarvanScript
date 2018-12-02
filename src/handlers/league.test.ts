import { expect } from "chai";
import "mocha";

import JarvanEnum from "../classes/enums";
import JarvanScript from "..";

import { LeagueMethods } from "./league";

import dotenv = require("dotenv");
dotenv.config();

const wrapper = new JarvanScript(process.env.RIOT_API_KEY as string, JarvanEnum.Regions.EUW, {});

describe("LeagueMethods", () => {
  it("should get the challenger solo queue league", async () => {
    const ladder = await LeagueMethods.getChallengerLeague(wrapper, "RANKED_SOLO_5x5");
    expect(ladder.name).to.be.a("string");
  });

  it("should get the master solo queue league", async () => {
    const ladder = await LeagueMethods.getMasterLeague(wrapper, "RANKED_SOLO_5x5");
    expect(ladder.name).to.be.a("string");
  });

  it("should get the ranks of a summoner", async () => {
    const leaguePositions = await LeagueMethods.getRanks(wrapper, 69658457);
    expect(leaguePositions[0].leagueId).to.be.a("string");
  });

  it("should get the league of a summoner", async () => {
    const leaguePositions = await LeagueMethods.getRanks(wrapper, 69658457);
    const leagueList = await LeagueMethods.getLeague(wrapper, leaguePositions[0].leagueId);

    expect(leaguePositions[0].leagueId).to.be.a("string");
    expect(leagueList.name).to.be.a("string");
  });
});
