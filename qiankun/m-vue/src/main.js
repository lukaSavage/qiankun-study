/*
 * @Descripttion:
 * @Author: lukasavage
 * @Date: 2022-07-31 14:57:39
 * @LastEditors: lukasavage
 * @LastEditTime: 2022-07-31 17:41:46
 * @FilePath: \qiankun-study\qiankun\m-vue\src\main.js
 */
import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';

import App from './App.vue';
import routes from '@/router/routes';

/* eslint-disable */

// 注意：这里不能直接挂载，需要切换的时候，调用mount方法时候再去挂载

let router;
let app;
let history;
function render(props) {
	console.log(111111, props);
	history = createWebHistory('/vue');
	router = createRouter({
		history,
		routes,
	});
	// createApp(App).mount('#app');
	app = createApp(App);
	const { container } = props;
	app.use(router).mount(container ? container.querySelector('#app') : '#app');
}

// 需要暴露接入协议
/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */

// 乾坤在渲染前，会提供一个变量 window.__POWERED_BY_QIANKUN__

if (!window.__POWERED_BY_QIANKUN__) {
	render();
}

export async function bootstrap() {
	console.log('vue3 app bootstrap starting...');
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
	render(props);
	console.log('mount...', props);
	// ReactDOM.render(
	// 	<App />,
	// 	props.container
	// 		? props.container.querySelector('#root')
	// 		: document.getElementById('root')
	// );
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount() {
	console.log('unmount...');
	// ReactDOM.unmountComponentAtNode(
	// 	props.container
	// 		? props.container.querySelector('#root')
	// 		: document.getElementById('root')
	// );
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update() {
	// console.log('update props', props);
	console.log('update...');
}
