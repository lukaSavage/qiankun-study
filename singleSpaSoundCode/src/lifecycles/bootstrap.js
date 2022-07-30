/*
 * @Descripttion:
 * @Author: lukasavage
 * @Date: 2022-07-30 11:37:07
 * @LastEditors: lukasavage
 * @LastEditTime: 2022-07-30 11:41:05
 * @FilePath: \qiankun-study\singleSpaSoundCode\src\lifecycles\bootstrap.js
 */

import {
	BOOTSTRAPPING,
	NOT_BOOTSTRAPPED,
	NOT_MOUNTED,
} from '../applications/app.helpers';

export async function toBootstrapPromise(app) {
	if (app.status !== NOT_BOOTSTRAPPED) {
		return app;
	}
	app.status = BOOTSTRAPPING;
	await app.bootstrap(app.customProps);
	app.status = NOT_MOUNTED;
    return app;
}
