fs = require('fs')
path = require('path')
statuses = require('./index')

values = '';
for key,value of statuses
	if typeof value == 'string' then values += "\t#{JSON.stringify key}: string;\n" else values +="\t#{JSON.stringify key}: number;\n"

fs.writeFile(
	path.join __dirname, '../lib/index.d.ts'
	'declare const httpStatus: httpStatusNS.HttpStatus; \n\n' + 
	'declare namespace httpStatusNS {\n' +
	'export interface HttpStatus {\n' +
		(values) +
		'}\n}\n\n' +
	'export = httpStatus;'
	(err) -> if err then throw new Error err
)

