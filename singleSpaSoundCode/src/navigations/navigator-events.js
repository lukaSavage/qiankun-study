/*
 * @Descripttion:
 * @Author: lukasavage
 * @Date: 2022-07-30 13:57:13
 * @LastEditors: lukasavage
 * @LastEditTime: 2022-07-30 14:47:15
 * @FilePath: \qiankun-study\singleSpaSoundCode\src\navigations\navigator-events.js
 */
import { reroute } from './reroute';

export const routingEventsListeningTo = ['hashchange', 'popstate'];

function urlReroute() {
	reroute([], arguments);
}

const capturedEventListeners = {
	// 后续挂载的事件先暂存起来
	hashchange: [],
	popstate: [],
};

window.addEventListener('hashchange', urlReroute);
window.addEventListener('popstate', urlReroute);

const originalAddEventListener = window.addEventListener;
const originalRemoveEventListener = window.removeEventListener;

window.addEventListener = function (eventName, fn) {
	if (
		routingEventsListeningTo.indexOf(eventName) >= 0 &&
		capturedEventListeners[eventName].some(listener => listener == fn)
	) {
		capturedEventListeners[eventName].push(fn);
		return;
	}
	return originalAddEventListener.apply(this, arguments);
};
window.removeEventListener = function (eventName, fn) {
	if (routingEventsListeningTo.indexOf(eventName) >= 0) {
		capturedEventListeners[eventName] = capturedEventListeners[
			eventName
		].filter(l => l == fn);
		return;
	}
	return originalAddEventListener.apply(this, arguments);
};

// 如果是hash路由，hash变化时可以切换
// 浏览器路由，浏览量拿起路由时h5api的，如果切换时不会触发popstate

function patchedUpdateState(updateState, methodName) {
	return function () {
		const urlBefore = window.location.href;
		updateState.apply(this, arguments); // 调用切换方法
        const urlAfter = window.location.href;

        if(urlBefore !== urlAfter) {
            // 重新加载应用 传入事件源
            urlReroute(new PopStateEvent('popstate'))
        } 
	};
}

window.history.pushState = patchedUpdateState(
	window.history.pushState,
	'pushState'
);
window.history.replaceState = patchedUpdateState(
	window.history.replaceState,
	'replaceState'
);

// 用户科恩你那个还会绑定自己的路由事件

// 当我们应用切换后，还需要处理原来的方法
