fs = require('fs')
path = require('path')
statuses = require('./index')

values = '';
for key,value of statuses
	values += "\t#{JSON.stringify key}: #{JSON.stringify value};\n"

fs.writeFile(
	path.join __dirname, '../lib/index.d.ts'
	'declare const httpStatus: httpStatusNS.HttpStatus;\n\n' +
	'declare namespace httpStatusNS {\n' +
	'export interface HttpStatus {\n' +
		(values) +
		'}\n}\n\n' +
	'export = httpStatus;\n'
	(err) -> if err then throw new Error err
)
