import "should";
import status from "../src/index.js";

describe("HTTP Status Classes", function () {
  it("should return code range", function () {
    status.classes.INFORMATIONAL.should.eql("1xx");
  });

  it("should return code", function () {
    status.classes["1xx"].should.eql("Informational");
  });

  it("should return code name", function () {
    status.classes["1xx_NAME"].should.eql("INFORMATIONAL");
  });

  it("should return code message", function () {
    status.classes["1xx_MESSAGE"].should.eql(
      "Indicates an interim response for communicating connection status or request progress prior to completing the requested action and sending a final response.",
    );
  });
});
