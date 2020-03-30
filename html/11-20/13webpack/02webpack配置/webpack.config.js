const path = require('path')
module.export = {
	entry: './src/b.js',
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: 'bundle.js'
	},
}