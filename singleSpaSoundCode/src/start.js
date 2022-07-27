/*
 * @Descripttion:
 * @Author: lukasavage
 * @Date: 2022-07-25 09:39:41
 * @LastEditors: lukasavage
 * @LastEditTime: 2022-07-27 21:37:22
 * @FilePath: \qiankun-study\singleSpaSoundCode\src\start.js
 */

import { reroute } from './navigations/reroute';

// 定义一个变量用来判断是否启动了应用
export const started = false;

export function start() {
	// 需要挂载应用
	reroute(); // 除了去加载应哟呵你给还需要去挂载应用
}
