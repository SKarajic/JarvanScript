import { expect } from "chai";
import dotenv = require("dotenv");
import "mocha";

import { StatusMethods } from ".";
import { JarvanScript } from "../..";
import { KeyManager, RegionManager, Regions } from "../../models";

dotenv.config();

const wrapper = new JarvanScript(process.env.RIOT_API_KEY as string, Regions.EUW, {});

beforeEach(() => {
  RegionManager.getInstance().setRegion(Regions.EUW);
  KeyManager.getInstance().setKey(process.env.RIOT_API_KEY as string);
});

describe("StatusMethods", () => {
  it("should get status", async () => {
    const shard = await StatusMethods.getStatus(wrapper);
    expect(shard.regionTag).to.equal("eu");
  });
});
