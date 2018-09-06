import { expect } from "chai";
import "mocha";
import { ChampionMasteryMethods } from ".";
import { Regions } from "../../../enums/";
import { KeyManager, RegionManager } from "../../managers";

import dotenv = require("dotenv");
dotenv.config();

beforeEach(() => {
  RegionManager.getInstance().setRegion(Regions.EUW);
  KeyManager.getInstance().setKey(process.env.RIOT_API_KEY as string);
});

describe("ChampionMasteryMethods", () => {
  it("should get champion masteries of summoner", async () => {
    const cm = await ChampionMasteryMethods.getChampionMasteries(69658457);
    expect(cm[0].id).to.be.a("number");
  });
  
  it("should get champion masteries of summoner with champion id 7", async () => {
    const cm = await ChampionMasteryMethods.getChampionMasteries(69658457, 7);
    expect(cm[0].id).to.equal(7);
  });
  
  it("should get the total amount of points of summoner", async () => {
    const level = await ChampionMasteryMethods.getChampionMasteryScore(69658457);
    expect(level).to.be.a("number");
  });
});
