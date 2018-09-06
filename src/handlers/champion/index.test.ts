import { expect } from "chai";
import "mocha";
import { ChampionMethods } from "./";
import { Regions } from "../../models";

import dotenv = require("dotenv");
import JarvanScript from "../../jarvanscript";
dotenv.config();

const wrapper = new JarvanScript(process.env.RIOT_API_KEY as string, Regions.EUW, {});

describe("ChampionMethods", () => {
  it("should get data of all champions", async () => {
    const cil = await ChampionMethods.getChampions(wrapper);
    expect(cil[0].id).to.be.a("number");
  });

  it("should get data of champion with id 7", async () => {
    const cil = await ChampionMethods.getChampions(wrapper, 7);
    expect(cil[0].id).to.be.a("number");
  });
});
