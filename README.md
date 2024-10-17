# HTTP Status codes for Node.js

Utility to interact with HTTP status codes.

## Usage

Once you import or require this module, you may call it with either an HTTP code or a status name. With an HTTP code, you will get the status name while with a status name you will get an HTTP code or some complementary information.

For example, `status[418]` return `IM_A_TEAPOT` while `status.IM_A_TEAPOT` return `"I'm a teapot"` and `status.IM_A_TEAPOT_CODE` returns `418`.

The package is written in TypeScript and built for CommonJS and ESM.

## HTTP Status codes

HTTP code names, information, and classes are respectively accessible with the property `{code}_NAME`, `{code}_MESSAGE` and `{code}_CLASS`. This includes all statuses in the [IANA HTTP Status Code Registry](https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml), with the only addition being `418 I'm a teapot`.

## Extra codes

Extra status code are also made available that are not defined in the IANA registry, but used by popular softwares. They are grouped by category. Specific properties are exported by `http-status` under the property `extra` followed by the category name. Also, extra codes are merge with regular status codes and made available as modules available inside `http-status/lib/{category}`.

Available categories are:

<dl>
  <dt><code>unofficial</code></dt>
  <dd>This represent a list of codes which are not specified by any standard.</dd>
  <dt><code>iis</code></dt>
  <dd>Microsoft's Internet Information Services (IIS) web server expands the 4xx error class to signal errors with the client's request.</dd>
  <dt><code>nginx</code></dt>
  <dd>The NGINX web server software expands the 4xx error class to signal issues with the client's request.</dd>
  <dt><code>cloudflare</code></dt>
  <dd>Cloudflare's reverse proxy service expands the 5xx error class to signal issues with the origin server.</dd>
</dl>

They are accessible throught the `status.extra[category]` property. It is also possible to import one of the category with `import status from "http-status/<category>" or `const status = require("http-status/<category>")`. In the later case, all the categories properties are merge with the common HTTP statuses.

## HTTP Status code classes

In addition to HTTP status codes, this module also contains status code classes under the `classes` property. Similar to HTTP codes, you can access class names and messages with the property `{class}_NAME` and `{class}_MESSAGE`.

## API organization

The API is structured as follows:

```
100
100_NAME
100_MESSAGE
100_CLASS
CONTINUE
101
101_NAME
101_MESSAGE
101_CLASS
SWITCHING_PROTOCOLS
…
classes.
├── 1xx
├── 1xx_NAME
├── 1xx_MESSAGE
├── INFORMATIONAL
├── 2xx
├── 2xx_NAME
├── 2xx_MESSAGE
├── SUCCESSFUL
├── …
extra.
├── unofficial.
│   ├── 103
│   ├── 103_NAME
│   ├── 103_MESSAGE
│   ├── 103_CLASS
│   ├── CHECKPOINT
│   ├── …
├── iis.
│   ├── 440
│   ├── 440_NAME
│   ├── 440_MESSAGE
│   ├── 440_CLASS
│   ├── LOGIN_TIME_OUT
│   ├── …
├── nginx.
│   ├── 444
│   ├── 444_NAME
│   ├── 444_MESSAGE
│   ├── 444_CLASS
│   ├── NO_RESPONSE
│   ├── …
├── cloudflare.
│   ├── 520
│   ├── 520_NAME
│   ├── 520_MESSAGE
│   ├── 520_CLASS
│   ├── UNKNOWN_ERROR
│   ├── …
```

For additional information, please refer to [original code](./src/index.litcoffee).

## Example API usage

The [api example](./samples/api.js) illustrate how to access status names by code and number and how to extra various associated informations.

```javascript
import status from "http-status";

console.info(status.INTERNAL_SERVER_ERROR);
// Output: 500

console.info(status[500]);
console.info(status[status.INTERNAL_SERVER_ERROR]);
// Both output: "Internal Server Error"

console.info(status["500_NAME"]);
console.info(status[`${status.INTERNAL_SERVER_ERROR}_NAME`]);
// Both output: "INTERNAL_SERVER_ERROR"

console.info(status["500_MESSAGE"]);
console.info(status[`${status.INTERNAL_SERVER_ERROR}_MESSAGE`]);
// Both output: "A generic error message, given when an unexpected condition was encountered and no more specific message is suitable."

console.info(status["500_CLASS"]);
console.info(status[`${status.INTERNAL_SERVER_ERROR}_CLASS`]);
// Both output: "5xx"
```

## Example using `classes`

```javascript
import status from "http-status";

const responseCode = status.INTERNAL_SERVER_ERROR;

switch (status[`${responseCode}_CLASS`]) {
  case status.classes.INFORMATIONAL:
    // The responseCode is 1xx
    break;
  case status.classes.SUCCESSFUL:
    // The responseCode is 2xx
    break;
  case status.classes.REDIRECTION:
    // The responseCode is 3xx
    break;
  case status.classes.CLIENT_ERROR:
    // The responseCode is 4xx
    break;
  case status.classes.SERVER_ERROR:
    // The responseCode is 5xx
    break;

  default:
    // Unknown
    break;
}
```

## Example using the `extra` property

```javascript
// Accessing property from the NGINX category
import status from "http-status";
console.info(status.extra.nginx.NO_RESPONSE);

// Accessing default HTTP status merged with NGINX status
import status from "http-status/lib/nginx";
console.info(status.IM_A_TEAPOT);
console.info(status.NO_RESPONSE);
```

## Example integrating Express

The [express example](./samples/express.js) integrate the library with a real wold usage.

```javascript
import express from "express";
import redis from "redis";
import status from "http-status";

// New Express HTTP server
const app = express.createServer();
// Regster a route
app.get("/", (req, res) => {
  const client = redis.createClient();
  client.ping((err, msg) => {
    if (err) {
      return res.send(status.INTERNAL_SERVER_ERROR);
    }
    res.send(msg, status.OK);
  });
});
// Start the HTTP server
app.listen(3000);
```

## Contributors

- David Worms: <https://github.com/wdavidw>
- Daniel Gasienica: <https://github.com/gasi>
- Rodrigo: <rfsbraz@gmail.com>
- Paul Vollmer: <paul.vollmer@fh-potsdam.de>
- James Barcellano: <https://github.com/ckeboss>

The project is sponsored by [Adaltas](https://www.adaltas.com) based in Paris, France. Adaltas offers support and consulting on distributed systems, big data and open source.

## Developers

To automatically generate a new version:

```
yarn run release
```

Package publication is handled by the CI/CD with GitHub action.
