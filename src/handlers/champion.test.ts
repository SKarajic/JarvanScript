import { expect } from "chai";
import dotenv = require("dotenv");
import "mocha";

import JarvanScript from "..";
import JarvanEnum from "../classes/enums";

import { ChampionMethods } from "./champion";

dotenv.config();

const wrapper = new JarvanScript(process.env.RIOT_API_KEY as string, JarvanEnum.Regions.EUW, {});

beforeEach(function (done) {
  setTimeout(function(){
    done();
  }, 500);
});

describe("ChampionInfoMethods", () => {
  it("should get data of all champions", async () => {
    const cil = await ChampionMethods.getChampionsInfo(wrapper);
    expect(cil[0].id).to.be.a("number");
  });

  it("should get data of champion with id 7", async () => {
    const cil = await ChampionMethods.getChampionsInfo(wrapper, 7);
    expect(cil[0].id).to.be.a("number");
  });
});
