/*
 * @Descripttion: 描述应用的整个状态
 * @Author: lukasavage
 * @Date: 2022-07-25 09:57:14
 * @LastEditors: lukasavage
 * @LastEditTime: 2022-07-27 21:26:49
 * @FilePath: \qiankun-study\singleSpaSoundCode\src\applications\app.helpers.js
 */

export const NOT_LOADED = 'NOT_LOADED'; // 应用的初始状态
export const LOADING_SOURCE_CODE = 'LOADING_SOURCE_CODE'; // 加载资源
export const NOT_BOOTSTRAPPED = 'NOT_BOOTSTRAPPED'; // 还没有调用bootstrap方法
export const BOOTSTRAPPING = 'BOOTSTRAPPING'; // 启动中
export const NOT_MOUNTED = 'NOT_MOUNTED'; // 没有调用mount方法
export const MOUNTTING = 'MOUNTTING'; // 正在挂载中
export const MOUNTED = 'MOUNTED'; // 挂载完毕
export const UPDATING = 'UPDATING'; // 更新中
export const UNMOUNTING = 'UNMOUNTING'; // 卸载中
export const UNLOADING = 'UNLOADING'; // 完全卸载中
export const LOAD_ERR = 'LOAD_ERR'; // 完全卸载中
export const SKIP_BECAUSE_BROKEN = 'SKIP_BECAUSE_BROKEN';

// 当前应用是否被挂载
export function isActive(app) {
	return app.status === MOUNTED;
}

// 路径匹配到加载应用
export function shouldBeActive(app) { // 如果返回true,那么应用应该就开始初始化等系列操作
    return app.activeWhen(window.location)
}
