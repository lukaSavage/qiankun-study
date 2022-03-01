/*
 * @Descripttion:
 * @Author: lukasavage
 * @Date: 2022-02-28 22:04:33
 * @LastEditors: lukasavage
 * @LastEditTime: 2022-02-28 23:15:23
 */
import Vue from 'vue';
import App from './App.vue';
import { registerApplication, start } from 'single-spa';
import router from './router';

Vue.config.productionTip = false;

async function loadScript(url) {
	return new Promise((resolve, reject) => {
		let script = document.createElement('script');
		script.src = url;
		script.onload = resolve;
		script.onerror = reject;
		document.head.appendChild(script);
	});
}

registerApplication(
	'myVueapp',
	async () => {
		console.log('加载了子模块');
		await loadScript(`http://localhost:10000/js/chunk-vendors.js`);
		await loadScript(`http://localhost:10000/js/app.js`);
		return window.singleVue; // bootstrap mount unmount
	},
	location => location.pathname.startsWith('/vue')
); // 用户切换到/vue的路径下，我需要加载刚才定义的子应用

start();

new Vue({
	router,
	render: h => h(App),
}).$mount('#app');
