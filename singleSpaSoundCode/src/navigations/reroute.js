/*
 * @Descripttion:
 * @Author: lukasavage
 * @Date: 2022-07-27 21:34:06
 * @LastEditors: lukasavage
 * @LastEditTime: 2022-07-27 22:13:16
 * @FilePath: \qiankun-study\singleSpaSoundCode\src\navigations\reroute.js
 */

import { getAppChange } from '../applications/app';
import { started } from '../start';

// 核心应用处理方法
export function reroute() {
	// 需要获取要加载的应用
	// 需要获取要不给挂载的应用
	// 哪些应用需要被卸载

	const { appsToLoad, appsToMount, appToUmmount } = getAppChange();

	if (started) {
		// app装载
		return performAppChanges(); // 根据路径来装载应用
	} else {
		// 注册应用时 需要预先加载
		return loadApps(); // 加载应用
	}

	async function loadApps() {}
	async function performAppChanges() {
		// 根据路径来装载应用
	}
}
