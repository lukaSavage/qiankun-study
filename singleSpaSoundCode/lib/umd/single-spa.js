(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.singleSpa = {}));
})(this, (function (exports) { 'use strict';

	/*
	 * @Descripttion:
	 * @Author: lukasavage
	 * @Date: 2022-07-25 09:39:41
	 * @LastEditors: lukasavage
	 * @LastEditTime: 2022-07-27 21:37:22
	 * @FilePath: \qiankun-study\singleSpaSoundCode\src\start.js
	 */

	function start() {
		// 需要挂载应用
		reroute(); // 除了去加载应哟呵你给还需要去挂载应用
	}

	/*
	 * @Descripttion:
	 * @Author: lukasavage
	 * @Date: 2022-07-27 21:34:06
	 * @LastEditors: lukasavage
	 * @LastEditTime: 2022-07-27 22:13:16
	 * @FilePath: \qiankun-study\singleSpaSoundCode\src\navigations\reroute.js
	 */

	// 核心应用处理方法
	function reroute() {
		// 需要获取要加载的应用
		// 需要获取要不给挂载的应用
		// 哪些应用需要被卸载

		getAppChange();

		{
			// 注册应用时 需要预先加载
			return loadApps(); // 加载应用
		}

		async function loadApps() {}
	}

	/*
	 * @Descripttion: 描述应用的整个状态
	 * @Author: lukasavage
	 * @Date: 2022-07-25 09:57:14
	 * @LastEditors: lukasavage
	 * @LastEditTime: 2022-07-27 21:26:49
	 * @FilePath: \qiankun-study\singleSpaSoundCode\src\applications\app.helpers.js
	 */

	const NOT_LOADED = 'NOT_LOADED'; // 应用的初始状态
	const LOADING_SOURCE_CODE = 'LOADING_SOURCE_CODE'; // 加载资源
	const NOT_BOOTSTRAPPED = 'NOT_BOOTSTRAPPED'; // 还没有调用bootstrap方法
	const BOOTSTRAPPING = 'BOOTSTRAPPING'; // 启动中
	const NOT_MOUNTED = 'NOT_MOUNTED'; // 没有调用mount方法
	const MOUNTED = 'MOUNTED'; // 挂载完毕

	// 当前这个应用是否要被激活
	function shouldBeActive(app) { // 如果返回true,那么应用应该就开始初始化等系列操作
	    return app.activeWhen(window.location)
	}

	/*
	 * @Descripttion:
	 * @Author: lukasavage
	 * @Date: 2022-07-25 09:39:19
	 * @LastEditors: lukasavage
	 * @LastEditTime: 2022-07-27 22:10:59
	 * @FilePath: \qiankun-study\singleSpaSoundCode\src\applications\app.js
	 */

	/**
	 *
	 * @param {*} appName 应用名字
	 * @param {*} loadApp 加载的应用
	 * @param {*} activeWhen 当激活时会调用 loadApp
	 * @param {*} customProps 自定义属性
	 */
	const apps = []; // 用来存放所有的应用

	// 维护应用所有的状态
	function registerApplication(appName, loadApp, activeWhen, customProps) {
		apps.push({
			name: appName,
			loadApp,
			activeWhen,
			customProps,
			status: NOT_LOADED,
		});
		reroute(); // 加载应用
	}

	function getAppChange() {
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
			}
		});
	    return { appToUmmount, appsToLoad, appsToMount }
	}

	console.log('呵呵哒');

	exports.registerApplication = registerApplication;
	exports.start = start;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=single-spa.js.map
