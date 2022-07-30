/*
 * @Descripttion:
 * @Author: lukasavage
 * @Date: 2022-07-30 10:32:45
 * @LastEditors: lukasavage
 * @LastEditTime: 2022-07-30 13:49:30
 * @FilePath: \qiankun-study\singleSpaSoundCode\src\lifecycles\load.js
 */

import {
	LOADING_SOURCE_CODE,
	NOT_BOOTSTRAPPED,
} from '../applications/app.helpers';

function flattenFnArray(fns) {
	fns = Array.isArray(fns) ? fns : [fns];

	// 通过promise来链式调用
	return props =>
		fns.reduce((p, fn) => p.then(() => fn(props)), Promimse.resolve());
}

export async function toLoadPromise(app) {
	if (app.toLoadPromise) {
		return app.toLoadPromise;
	}
	return (app.toLoadPromise = Promise.resolve().then(async () => {
		app.status = LOADING_SOURCE_CODE;
		const { bootstrap, mount, unmount } = await app.loadApp(
			app.customProps
		);
		app.status = NOT_BOOTSTRAPPED;

		// tag: 注意:用户这里可能传的是一个数组，需要封装方法做特殊处理
		app.bootstrap = flattenFnArray(bootstrap);
		app.mount = mount;
		app.unmount = unmount;
        delete app.loadPromise; 
		return app;
	}));
}
