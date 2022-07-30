/*
 * @Descripttion:
 * @Author: lukasavage
 * @Date: 2022-07-27 21:34:06
 * @LastEditors: lukasavage
 * @LastEditTime: 2022-07-30 11:44:34
 * @FilePath: \qiankun-study\singleSpaSoundCode\src\navigations\reroute.js
 */

import { getAppChange } from '../applications/app';
import { toBootstrapPromise } from '../lifecycles/bootstrap';
import { toLoadPromise } from '../lifecycles/load';
import { toMountPromise } from '../lifecycles/mount';
import { toUnmountPromise } from '../lifecycles/unmount';
import { started } from '../start';

// 核心应用处理方法
export function reroute() {
	// 需要获取要加载的应用
	// 需要获取要被挂载的应用
	// 哪些应用需要被卸载

	const { appsToLoad, appsToMount, appToUmmount } = getAppChange();

	if (started) {
		// app装载
		return performAppChanges(); // 根据路径来装载应用
	} else {
		// 注册应用时 需要预先加载
		return loadApps(); // 加载应用
	}

	async function loadApps() {
		// 预加载应用
		let apps = await Promise.all(appsToLoad.map(toLoadPromise)); // 就是获取到bootstrap, mount和unmount方法放到app上
		console.log(apps);
	}
	async function performAppChanges() {
		// note: 1.先卸载不需要的应用
		const unmountPromises = await appsToUnmount.map(toLoadPromise); // 需要去卸载app
		// note: 2.去加载需要的应用

		appsToLoad.map(async app => {
			// 将需要加载的应用拿到 => 加载 => 启用 => 挂载
			app = await toLoadPromise(app);
			app = await toBootstrapPromise(app);
			return await toMountPromise(app);
		});
		appsToMount.map(async app => {
			app = await toBootstrapPromise(app);
			return toMountPromise(app);
		});
	}
}
