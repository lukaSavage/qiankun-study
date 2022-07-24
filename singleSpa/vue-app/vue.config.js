/*
 * @Descripttion:
 * @Author: lukasavage
 * @Date: 2022-07-21 21:40:46
 * @LastEditors: lukasavage
 * @LastEditTime: 2022-07-21 22:03:03
 * @FilePath: \qiankun-study\singleSpa\vue-app\vue.config.js
 */
const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
	// transpileDependencies: true,
	devServer: {
		port: 3000,
	},
});

// module.exports = {
// 	devServe: {
// 		port: 3000,
// 	},
// };
