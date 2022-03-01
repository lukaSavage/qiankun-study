const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
	configureWebpack: {
		output: {
			library: 'singleVue', // 打包类库的名字
			libraryTarget: 'umd', // 打包后的模块类型，umd:会把导出后的模块放入到window上
		},
		devServer: {
			port: 10000,
		},
	},
	transpileDependencies: true,
	parserOptions: {
		requireConfigFile: false,
	},
});
