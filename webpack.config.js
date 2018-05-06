const path = require('path');
const destPath = path.join(__dirname, './dist');

module.exports = {
	entry: './src/index.ts',
	output: {
		filename: 'bahagi.js',
		path: destPath
	},
	module: {
		loaders: [
		],
		rules: [
			{
				//typescript
				test: /\.(ts|d\.ts)$/,
				loader: 'awesome-typescript-loader'
			}
		],
	},
	resolve: {
		extensions: [ '.ts', '.tsx', ".js", ".json"]
	}
};