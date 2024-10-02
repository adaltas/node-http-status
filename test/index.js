import status from "../lib/index.js";
import cloudflare from "../lib/cloudflare.js";
import iis from "../lib/iis.js";
import nginx from "../lib/nginx.js";
import unofficial from "../lib/unofficial.js";

const getDigit = (ntn, number) => {
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

  it("should return correct code class for all code numbers", function () {
    function isValidStatus(statusKey, statusValue, objectToCheck) {
      if (typeof statusValue === "object") {
        for (let [k, v] of Object.entries(statusValue)) {
          isValidStatus(k, v, statusValue);
        }
      }
      if (typeof statusValue === "number") {
        const firstDigit = getDigit(2, statusValue);
        objectToCheck[`${statusValue}_CLASS`].should.eql(`${firstDigit}xx`);
      }
    }
    for (let [k, v] of Object.entries(status)) {
      isValidStatus(k, v, status);
    }
  });
});

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

describe("extra", function () {
  it("export classes", function () {
    status.classes.should.be.an.Object();
  });

  it("export unofficial", function () {
    status.extra.unofficial.should.be.an.Object();
  });

  it("merge with unofficial", function () {
    unofficial.OK.should.eql(200);
    unofficial.CHECKPOINT.should.eql(103);
  });

  it("export iis", function () {
    status.extra.iis.should.be.an.Object();
  });

  it("merge with iis", function () {
    iis.OK.should.eql(200);
    iis.LOGIN_TIME_OUT.should.eql(440);
  });

  it("export nginx", function () {
    status.extra.nginx.should.be.an.Object();
  });

  it("merge with nginx", function () {
    nginx.OK.should.eql(200);
    nginx.NO_RESPONSE.should.eql(444);
  });

  it("export cloudflare", function () {
    status.extra.cloudflare.should.be.an.Object();
  });

  it("merge with cloudflare", function () {
    cloudflare.OK.should.eql(200);
    cloudflare.UNKNOWN_ERROR.should.eql(520);
  });
});
