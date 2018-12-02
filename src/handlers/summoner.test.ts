import { expect } from "chai";
import "mocha";

import JarvanEnum from "../classes/enums";
import JarvanScript from "..";

import { SummonerMethods } from "./summoner";

import dotenv = require("dotenv");
dotenv.config();

const wrapper = new JarvanScript(process.env.RIOT_API_KEY as string, JarvanEnum.Regions.EUW, {});

describe("SummonerMethods", () => {
  it("should get summoner by account id", async () => {
    const summ = await SummonerMethods.getSummonerByAccountId(wrapper, 219406964);
    expect(summ.accountId).to.be.a("number");
    expect(summ.accountId).to.equal(219406964);
  });

  it("should get summoner by summoner id", async () => {
    const summ = await SummonerMethods.getSummonerById(wrapper, 69658457);
    expect(summ.id).to.be.a("number");
    expect(summ.id).to.equal(69658457);
  });

  it("should get summoner by summoner name", async () => {
    const summ = await SummonerMethods.getSummonerByName(wrapper, "IAmTheWhite");
    expect(summ.name).to.be.a("string");
    expect(summ.id).to.equal(69658457);
  });
});
