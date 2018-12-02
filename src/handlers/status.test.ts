import { expect } from "chai";
import dotenv = require("dotenv");
import "mocha";

import JarvanManager from "../classes/managers";
import JarvanEnum from "../classes/enums";
import JarvanScript from "..";


import { StatusMethods } from "./status";

dotenv.config();

const wrapper = new JarvanScript(process.env.RIOT_API_KEY as string, JarvanEnum.Regions.EUW, {});

beforeEach(() => {
  JarvanManager.RegionManager.getInstance().setRegion(JarvanEnum.Regions.EUW);
  JarvanManager.KeyManager.getInstance().setKey(process.env.RIOT_API_KEY as string);
});

describe("StatusMethods", () => {
  it("should get status", async () => {
    const shard = await StatusMethods.getStatus(wrapper);
    expect(shard.regionTag).to.equal("eu");
  });
});
