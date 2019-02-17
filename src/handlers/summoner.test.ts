import { expect } from "chai";
import "mocha";

import JarvanEnum from "../classes/enums";
import JarvanScript from "../jarvanscript";

import { SummonerMethods } from "./summoner";

import dotenv = require("dotenv");
dotenv.config();

const wrapper = new JarvanScript(process.env.RIOT_API_KEY as string, JarvanEnum.Regions.EUW, {});

describe("SummonerMethods", () => {
  it("should get summoner by account id", async () => {
    const summ = await SummonerMethods.getSummonerByAccountId(wrapper, "aZkB1Uo_IAKjX2dwqzwOyC0gouGTz8PQ_mBsY7JEaXaOwcY");
    expect(summ.accountId).to.be.a("string");
    expect(summ.accountId).to.equal("aZkB1Uo_IAKjX2dwqzwOyC0gouGTz8PQ_mBsY7JEaXaOwcY");
  });

  it("should get summoner by summoner id", async () => {
    const summ = await SummonerMethods.getSummonerById(wrapper, "tu4I5AhSHMeBKthXHTs396jAdVSTHtrYdktyow1rwOICvAk");
    expect(summ.id).to.be.a("string");
    expect(summ.id).to.equal("tu4I5AhSHMeBKthXHTs396jAdVSTHtrYdktyow1rwOICvAk");
  });

  it("should get summoner by summoner name", async () => {
    const summ = await SummonerMethods.getSummonerByName(wrapper, "IAmTheWhite");
    expect(summ.name).to.be.a("string");
    expect(summ.id).to.equal("tu4I5AhSHMeBKthXHTs396jAdVSTHtrYdktyow1rwOICvAk");
  });
});
