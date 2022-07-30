/*
 * @Descripttion:
 * @Author: lukasavage
 * @Date: 2022-07-30 11:37:14
 * @LastEditors: lukasavage
 * @LastEditTime: 2022-07-30 11:42:24
 * @FilePath: \qiankun-study\singleSpaSoundCode\src\lifecycles\mount.js
 */
import { MOUNTED, MOUNTTING, NOT_MOUNTED } from '../applications/app.helpers';

export async function toMountPromise(app) {
	if (app.status !== NOT_MOUNTED) {
		return app;
	}
	app.status = MOUNTTING;
	await app.mount(app.customProps);
	app.status = MOUNTED;
	return app;
} 
