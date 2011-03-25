
var express = require('express'),
	redis = require('redis'),
	HttpStatus = require('../index');
	
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