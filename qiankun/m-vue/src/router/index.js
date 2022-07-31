/*
 * @Descripttion:
 * @Author: lukasavage
 * @Date: 2022-07-31 17:05:56
 * @LastEditors: lukasavage
 * @LastEditTime: 2022-07-31 17:17:44
 * @FilePath: \qiankun-study\qiankun\m-vue\src\router\index.js
 */
import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
	history: createWebHistory('/vue'),
	routes,
});
