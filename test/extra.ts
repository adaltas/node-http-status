import "should";
import status from "../src/index.js";
import cloudflare from "../src/cloudflare.js";
import iis from "../src/iis.js";
import nginx from "../src/nginx.js";
import unofficial from "../src/unofficial.js";

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
