import { expect } from "chai";
import dotenv = require("dotenv");
import "mocha";

import JarvanEnum from "../classes/enums";
import JarvanScript from "..";

import { ChampionMasteryMethods } from "./championmastery";

dotenv.config();

const wrapper = new JarvanScript(process.env.RIOT_API_KEY as string, JarvanEnum.Regions.EUW, {});

describe("ChampionMasteryMethods", () => {
  it("should get champion masteries of summoner", async () => {
    const cm = await ChampionMasteryMethods.getChampionMasteries(wrapper, 69658457);
    expect(cm[0].id).to.be.a("number");
  });

  it("should get champion masteries of summoner with champion id 7", async () => {
    const cm = await ChampionMasteryMethods.getChampionMasteries(wrapper, 69658457, 7);
    expect(cm[0].id).to.equal(7);
  });

  it("should get the total amount of points of summoner", async () => {
    const level = await ChampionMasteryMethods.getChampionMasteryScore(69658457);
    expect(level).to.be.a("number");
  });

  it("should get summoner from champion masteries", async () => {
    const cm = await ChampionMasteryMethods.getChampionMasteries(wrapper, 69658457);
    const summ = await cm[0].getSummoner();
    expect(cm[0].id).to.be.a("number");
    expect(summ.id).to.equal(69658457);
    expect(summ.id).to.be.a("number");
  });
});
