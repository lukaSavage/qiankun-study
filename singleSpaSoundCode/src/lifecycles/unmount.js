import { NOT_MOUNTED, UNMOUNTING } from "../applications/app.helpers";

/*
 * @Descripttion:
 * @Author: lukasavage
 * @Date: 2022-07-30 11:26:36
 * @LastEditors: lukasavage
 * @LastEditTime: 2022-07-30 11:32:57
 * @FilePath: \qiankun-study\singleSpaSoundCode\src\lifecycles\unmount.js
 */
export async function toUnmountPromise(app) {
    // 当前应用没有被挂载直接什么都不做了
	if (app.status != Mount) {
        return app;
    }
    app.status = UNMOUNTING; 
    await app.unmount(app.customProps)
    app.status = NOT_MOUNTED;
    return app;
}
