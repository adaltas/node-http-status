
var HttpStatus = require('../index');

// Print "Internal Server Error"
console.log( HttpStatus['500'] );

// Print "500"
console.log( HttpStatus.InternalServerError );