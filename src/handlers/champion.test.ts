import { expect } from "chai";
import dotenv = require("dotenv");
import "mocha";

import JarvanScript from "../jarvanscript";
import JarvanEnum from "../classes/enums";

import { ChampionMethods } from "./champion";

dotenv.config();

const wrapper = new JarvanScript(process.env.RIOT_API_KEY as string, JarvanEnum.Regions.EUW, {});

beforeEach((done) => {
  setTimeout(() => {
    done();
  }, 500);
});

describe("ChampionRotationMethods", () => {
  it("should get data of the champion rotation", async () => {
    const cil = await ChampionMethods.getChampionRotation(wrapper);
    expect(cil.freeChampionsForNewPlayers[0].id).to.be.a("number");
    expect(cil.maximumNewPlayerLevel).to.be.a("number");
    expect(cil.freeChampions[0].id).to.be.a("number");
  });
});
