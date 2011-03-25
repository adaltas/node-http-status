

Utility to interact with HTTP status code.

Usage
-----

API sample

	var HttpStatus = require('http-status');
	
	// Print "Internal Server Error"
	console.log( HttpStatus['500'] );
	
	// Print "500"
	console.log( HttpStatus.InternalServerError );

Express sample

	var express = require('express'),
		redis = require('redis'),
		HttpStatus = require('http-status');
		
	var app = express.createServer();
	
	app.get('/', function(req, res){
		var client = redis.createClient();
		client.ping(function(err, msg){
			if(err){
				return res.send( HttpStatus.InternalServerError );
			}
			res.send( msg, HttpStatus.OK );
		});
	});
	
	app.listen(3000);