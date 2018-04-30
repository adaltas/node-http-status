[![Build Status](https://secure.travis-ci.org/adaltas/node-http-status.png)](http://travis-ci.org/adaltas/node-http-status)

# HTTP Status code for Node

Utility to interact with HTTP status code.

## Usage

Once you require this module, you may call it with either an HTTP code or a message name. With an HTTP code, you will get the message name while with a message name you will get an HTTP code. Simple.

Additionally, HTTP code names and messages are respectively accessible with the name "{code}_NAME" and "{code}_MESSAGE".

Extra status code are also made available. They are grouped by categories. Specific properties are exported by `http-status` under the property `extra` followed by the category name. Also, extra code are merge with regular status code and made available as modules available inside `http-status/lib/{category}`. Available categories are:

- `unofficial`   
  This represent a list of codes which are not specified by any standard.
- `iis`   
  Microsoft's Internet Information Services (IIS) web server expands the 4xx error space to signal errors with the client's request.
- `nginx`   
  The NGINX web server software expands the 4xx error space to signal issues with the client's request.
- `cloudflare`   
  Cloudflare's reverse proxy service expands the 5xx series of errors space to signal issues with the origin server.

## API

This module is very simple. A documentation would be more complicate than reading the [original code](./src/index.litcoffee).

### API sample

```javascript
const status = require('http-status');
// Print "Internal Server Error"
console.info(status[500]);
// Print 500
console.info(status.INTERNAL_SERVER_ERROR);
// Print "INTERNAL_SERVER_ERROR"
console.info(status['500_CODE']);
// Print "A generic error message, given when an unexpected condition was encountered and no more specific message is suitable."
console.info(status['500_MESSAGE']);
```

### Extra sample

```javascript
// Accessing property from the NGINX category
const status = require('http-status');
console.info(status.extra.nginx.NO_RESPONSE)
// Accessing default HTTP status merged with NGINX status
const status = require('http-status/lib/nginx');
console.info(status.IM_A_TEAPOT);
console.info(status.NO_RESPONSE)
```

### Express sample

```javascript
const express = require('express'),
      redis = require('redis'),
      status = require('http-status');
// New Express HTTP server
const app = express.createServer();
// Regster a route
app.get('/', function (req, res) {
  const client = redis.createClient();
  client.ping(function (err, msg) {
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

This package is developed by [Adaltas](http://www.adaltas.com).
