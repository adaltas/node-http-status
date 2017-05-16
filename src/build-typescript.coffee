fs = require('fs')
path = require('path')
statuses = require('./index')

fs.writeFile(
	path.join __dirname, '../lib/index.d.ts'
	'export = {\n' +
		(
			"\t#{JSON.stringify key}: #{JSON.stringify statuses[key]},\n" \
			for key in Object.keys statuses
		).join('') +
		'}\n'
	(err) -> if err then throw new Error err
)
