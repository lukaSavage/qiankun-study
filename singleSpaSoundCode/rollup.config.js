/*
 * @Descripttion: 
 * @Author: lukasavage
 * @Date: 2022-07-25 08:54:15
 * @LastEditors: lukasavage
 * @LastEditTime: 2022-07-25 09:14:36
 * @FilePath: \qiankun-study\singleSpaSoundCode\rollup.config.js
 */
import serve from 'rollup-plugin-serve'

export default {
    input: './src/single-spa.js',
    output: {
        file: './lib/umd/single-spa.js',
        format: 'umd', // umd: 默认会把包挂载window上
        name: 'singleSpa',
        sourcemap: true
    },
    plugins: [
        serve({
            openPage: './index.html',
            contentBase: '',
            port: 3000
        })
    ]
}