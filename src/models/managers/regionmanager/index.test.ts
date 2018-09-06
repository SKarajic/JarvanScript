import { expect } from "chai";
import "mocha";
import { RegionManager, Regions } from "../..";

describe("RegionManager", () => {
  it("should return an instance", () => {
    expect(RegionManager.getInstance()).to.be.an.instanceOf(RegionManager);
  });

  it("should throw an error trying to create a new instance", () => {
    expect(() => new RegionManager()).to.throw("Instantiation failed: Use the getInstance() method instead of new.");
  });

  it("should get and set the region using an enum", () => {
    const rm = RegionManager.getInstance();
    rm.setRegion(Regions.EUW);

    expect(rm.getRegion()).to.equal(Regions.EUW);
  });

  it("should get and set the region using a string", () => {
    const rm = RegionManager.getInstance();
    rm.setRegion("eun1");

    expect(rm.getRegion()).to.equal(Regions.EUNE);
  });

  it("should throw an error for setting an invalid region", () => {
    expect(() => RegionManager.getInstance().setRegion("eun2")).to.throw("The region parameter does not equal an actual region. Please change the value to match or use a value that is part of the Regions enum.");
  });
});
