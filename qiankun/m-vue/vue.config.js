/*
 * @Descripttion:
 * @Author: lukasavage
 * @Date: 2022-07-31 14:57:39
 * @LastEditors: lukasavage
 * @LastEditTime: 2022-07-31 19:24:39
 * @FilePath: \qiankun-study\qiankun\m-vue\vue.config.js
 */
// const { defineConfig } = require('@vue/cli-service');
// module.exports = defineConfig({
// 	transpileDependencies: true,
// 	publicPath: '//localhost: 20000/', // 保证子应用静态资源都是向20000端口上发送的，如果不配置，默认3000
// 	devServer: {
// 		port: 20000,
// 		headers: {
//             'Access-Control-Allow-Origin': '*', // 设置允许跨域
//         }
// 	},
// 	configureWebpack: {
// 		// 配置当前webpack配置
// 		output: {
// 			libraryTarget: 'umd',
// 			library: 'm-vue', // 挂载到window上叫的名字
// 		},
// 	},
// });

// const packageName = require('./package.json').name;
module.exports = {
	transpileDependencies: true,
	publicPath: '//localhost:20000/', // 保证子应用静态资源都是向20000端口上发送的，如果不配置，默认3000
	devServer: {
		port: 20000,
		headers: {
			'Access-Control-Allow-Origin': '*', // 设置允许跨域
		},
	},
	configureWebpack: {
		// 配置当前webpack配置
		output: {
			libraryTarget: 'umd',
			library: 'm-vue', // 挂载到window上叫的名字
		},
	},
};
