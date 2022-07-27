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
 * @param {*} loadApp 加载的应用
 * @param {*} activeWhen 当激活时会调用 loadApp
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
		status: NOT_LOADED,
	});
	reroute(); // 加载应用
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
