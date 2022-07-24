/*
 * @Descripttion:
 * @Author: lukasavage
 * @Date: 2022-07-17 13:39:32
 * @LastEditors: lukasavage
 * @LastEditTime: 2022-07-24 09:49:13
 * @FilePath: \qiankun-study\system\webpack.config.js
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = env => {
	return {
		mode: 'development',
		output: {
			filename: 'index.js',
			path: path.resolve(__dirname, 'dist'),
			libraryTarget: env.production ? 'system' : '', // 打包的格式， system模块
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					use: { loader: 'babel-loader' },
					exclude: /node_modules/,
				},
			],
		},
		plugins: [
			!env.production &&
				new HtmlWebpackPlugin({
					template: './public/index.html',
				}),
		].filter(Boolean),
        // externals: 在打包过程中，忽略react、react-dom的打包,使用system动态加载cdn方式引入这两个包
        // 在微前端中，如果子应用都是react,如果不设置externals,那么重复的react、react-dom两个子应用都会打包，浪费性能
		externals: env.production ? ['react', 'react-dom'] : [],
	};
};
