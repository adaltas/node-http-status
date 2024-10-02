import "should";
import status from "../src/index.js";

import {
  HttpStatus,
  HttpStatusClasses,
  HttpStatusUnofficial,
  HttpStatusIis,
  HttpStatusNginx,
  HttpStatusCloudflare,
} from "../src/index.js";

describe("Types", function () {
  describe("CommonJS", function () {
    it("first level properties", function () {
      const number = status.CONTINUE;
      const code: string = status[number] as string;
      code.should.eql("Continue");
      const name: string = status[`${number}_NAME`] as string;
      name.should.eql("CONTINUE");
      const message: string = status[`${number}_MESSAGE`] as string;
      message.should.eql(
        "The server has received the request headers and the client should proceed to send the request body.",
      );
      const clazz: string = status[`${number}_CLASS`] as string;
      clazz.should.eql("1xx");
    });

    // it("undefined status codes", function () {
    //   const undefinedStatusCode = 777;
    //   const code: string = typeof (status as any)[undefinedStatusCode];
    //   code.should.eql("undefined");
    // });

    it("sub level properties", function () {
      const number: 444 = status.extra.nginx.NO_RESPONSE;
      const code: string = status.extra.nginx[number] as string;
      code.should.eql("No Response");
      const name: string = status.extra.nginx[`${number}_NAME`] as string;
      name.should.eql("NO_RESPONSE");
      const message: string = status.extra.nginx[`${number}_MESSAGE`] as string;
      message.should.eql(
        "Used internally to instruct the server to return no information to the client and close the connection immediately.",
      );
      const clazz: string = status.extra.nginx[`${number}_CLASS`] as string;
      clazz.should.eql("4xx");
    });
  });

  describe("ES6 exports", function () {
    it("HttpStatus", function () {
      const statuses: HttpStatus = status;
      statuses.CONTINUE.should.be.a.Number();
    });

    it("HttpStatusClasses", function () {
      const classes: HttpStatusClasses = status.classes;
      classes.INFORMATIONAL.should.be.a.String();
    });

    it("HttpStatusUnofficial", function () {
      const unofficial: HttpStatusUnofficial = status.extra.unofficial;
      unofficial.CHECKPOINT.should.be.a.Number();
    });

    it("HttpStatusIis", function () {
      const iis: HttpStatusIis = status.extra.iis;
      iis.LOGIN_TIME_OUT.should.be.a.Number();
    });

    it("HttpStatusNginx", function () {
      const nginx: HttpStatusNginx = status.extra.nginx;
      nginx.NO_RESPONSE.should.be.a.Number();
    });

    it("HttpStatusCloudflare", function () {
      const cloudflare: HttpStatusCloudflare = status.extra.cloudflare;
      cloudflare.UNKNOWN_ERROR.should.be.a.Number();
    });
  });
});
