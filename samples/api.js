const status = require('..');

console.info(status.INTERNAL_SERVER_ERROR);
// Output: 500

console.info(status[500]);
console.info(status[status.INTERNAL_SERVER_ERROR]);
// Both output: "Internal Server Error"

console.info(status['500_NAME']);
console.info(status[`${status.INTERNAL_SERVER_ERROR}_NAME`]);
// Both output: "INTERNAL_SERVER_ERROR"

console.info(status['500_MESSAGE']);
console.info(status[`${status.INTERNAL_SERVER_ERROR}_MESSAGE`]);
// Both output: "A generic error message, given when an unexpected condition was encountered and no more specific message is suitable."

console.info(status['500_CLASS']);
console.info(status[`${status.INTERNAL_SERVER_ERROR}_CLASS`]);
// Both output: "5xx"
