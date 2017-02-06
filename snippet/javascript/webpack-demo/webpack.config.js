module.exports = {
	entry: './src/main.js',
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loader: 'style!css!autoprefixer?{browsers:["last 2 version", "> 1%"]}!sass'
			}
		]
	}
}