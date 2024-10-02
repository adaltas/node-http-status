import "should";
import status from "../src/index.js";

const getDigit = (ntn: number, number: number): number => {
  return Math.floor((number / Math.pow(10, ntn)) % 10);
};

describe("HTTP Status Codes", function () {
  it("should return code number", function () {
    status.CREATED.should.eql(201);
  });

  it("should return code", function () {
    status[201].should.eql("Created");
  });

  it("should return code name", function () {
    status["201_NAME"].should.eql("CREATED");
  });

  it("should return code message", function () {
    status["201_MESSAGE"].should.eql(
      "The request has been fulfilled, resulting in the creation of a new resource.",
    );
  });

  it("should return code class", function () {
    status["201_CLASS"].should.eql("2xx");
  });

  type StatusObject = {
    [key: string]: number | string | StatusObject;
  };

  it("should return correct code class for all code numbers", function () {
    function isValidStatus(
      statusKey: string,
      statusValue: number | string | StatusObject,
      objectToCheck: StatusObject,
    ) {
      if (typeof statusValue === "object") {
        for (const [k, v] of Object.entries(statusValue)) {
          isValidStatus(k, v, statusValue);
        }
      }
      if (typeof statusValue === "number") {
        const firstDigit = getDigit(2, statusValue);
        const classKey = `${statusValue}_CLASS` as keyof typeof objectToCheck;
        const classValue = objectToCheck[classKey];
        classValue.should.eql(`${firstDigit}xx`);
      }
    }
    for (const [k, v] of Object.entries(status)) {
      isValidStatus(k, v, status);
    }
  });
});
