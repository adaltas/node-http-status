var assert = require('assert'),
	HttpStatus = require('../index');

module.exports = {
	'Test HTTP Status Code': function(){
		assert.eql(200, HttpStatus.OK);
		assert.eql('OK', HttpStatus['200']);
	}
};
