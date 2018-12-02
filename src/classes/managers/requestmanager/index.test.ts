import { expect } from "chai";
import "mocha";

import { RequestManager } from ".";

describe("RequestManager", () => {
  it("should return an instance", () => {
    expect(RequestManager.getInstance()).to.be.an.instanceOf(RequestManager);
  });

  it("should throw an error trying to create a new instance", () => {
    expect(() => new RequestManager()).to.throw("Instantiation failed: Use the getInstance() method instead of new.");
  });
});
