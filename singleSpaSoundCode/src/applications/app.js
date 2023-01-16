/*
 * @Descripttion:
 * @Author: lukasavage
 * @Date: 2022-07-25 09:39:19
 * @LastEditors: lukasavage
 * @LastEditTime: 2022-07-27 22:10:59
 * @FilePath: \qiankun-study\singleSpaSoundCode\src\applications\app.js
 */

import { reroute } from '../navigations/reroute';
import {
	BOOTSTRAPPING,
	LOADING_SOURCE_CODE,
	MOUNTED,
	NOT_BOOTSTRAPPED,
	NOT_LOADED,
	NOT_MOUNTED,
	shouldBeActive,
	SKIP_BECAUSE_BROKEN,
} from './app.helpers';

/**
 *
 * @param {*} appName 应用名字
 * @param {*} loadApp 加载的app，(一个对象，对象里面包含bootstrap、mount和unmount三个方法)
 * @param {*} activeWhen 什么时候加载
 * @param {*} customProps 自定义属性
 */
const apps = []; // 用来存放所有的应用

// 维护应用所有的状态
export function registerApplication(appName, loadApp, activeWhen, customProps) {
	apps.push({
		name: appName,
		loadApp,
		activeWhen,
		customProps,
		status: NOT_LOADED, // 一开始给每个app加载一个状态
	});
    // 收集应用后，需要进行应用的加载(single-spa的核心函数)
	reroute(); // 重写路径，后续切换路由，要再次做这些事
}

export function start() {

}

export function getAppChange() {
	const appToUmmount = []; // 要卸载的app
	const appsToLoad = []; // 要加载的app
	const appsToMount = []; // 需要挂载的
	apps.forEach(app => {
		// 需不需要被加载
		const appShouldBeActive = shouldBeActive(app);
		switch (app.status) {
			case NOT_LOADED:
			case LOADING_SOURCE_CODE:
				if (appShouldBeActive) {
					appsToLoad.push(app);
				}
                break;
			case NOT_BOOTSTRAPPED:
			case BOOTSTRAPPING:
			case NOT_MOUNTED:
				if (appShouldBeActive) {
					appsToLoad.push(app);
				}
                break;
			case NOT_MOUNTED:
				if (appShouldBeActive) {
					appsToLoad.push(app);
				}
                break;
			case MOUNTED:
				if (!appShouldBeActive) {
					appsToMount.push(app);
				}
                break;
			default:
				break;
		}
	});
    return { appToUmmount, appsToLoad, appsToMount }
}
