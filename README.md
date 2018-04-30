[![Build Status](https://secure.travis-ci.org/adaltas/node-http-status.png)](http://travis-ci.org/adaltas/node-http-status)

# HTTP Status code for Node

Utility to interact with HTTP status code.

## Usage

Once you require this module, you may call it with either an HTTP code or a message name. With an HTTP code, you will get the message name while with a message name you will get an HTTP code. Simple.

Additionally, HTTP code names and messages are respectively accessible with the name "{code}_NAME" and "{code}_MESSAGE".

## API

This module is very simple. A documentation would be more complicate than reading the [original code](./src/index.litcoffee).

### API sample

```javascript
var status = require('http-status');
// Print "Internal Server Error"
console.log(HTTPStatus[500]);
// Print 500
console.log(HTTPStatus.INTERNAL_SERVER_ERROR);
// Print "INTERNAL_SERVER_ERROR"
console.log(HTTPStatus['500_CODE']);
// Print "A generic error message, given when an unexpected condition was encountered and no more specific message is suitable."
console.log(HTTPStatus['500_MESSAGE']);
```

### Express sample

```javascript
var express = require('express'),
  redis = require('redis'),
  HTTPStatus = require('http-status');
// New Express HTTP server
var app = express.createServer();
// Regster a route
app.get('/', function (req, res) {
  var client = redis.createClient();
  client.ping(function (err, msg) {
    if (err) {
      return res.send(HTTPStatus.INTERNAL_SERVER_ERROR);
    }
    res.send(msg, HTTPStatus.OK);
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
