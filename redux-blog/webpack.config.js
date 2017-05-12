var webpack = require('webpack');

module.exports = {
	entry: __dirname+'/src/app.js', // 入口文件路径
	output: {
		path: __dirname+'/build',
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.js$/, // babel 转换为兼容性的 js
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015', 'react']
			}
		}]
	}
};