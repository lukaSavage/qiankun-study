/*
 * @Descripttion: 
 * @Author: lukasavage
 * @Date: 2023-01-15 14:16:54
 * @LastEditors: lukasavage
 * @LastEditTime: 2023-01-15 14:56:15
 * @FilePath: \qiankun-study\singleSpa\vue-app\vue.config.js
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 3000
  },
  configureWebpack: {
    output: {
      libraryTarget: 'system',
    },
  },
})
