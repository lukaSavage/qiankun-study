import Vue from 'vue';
import App from './App.vue';
import singleSpaVue from 'single-spa-vue';

Vue.config.productionTip = false;

/* 
new Vue({
	render: h => h(App),
}).$mount('#app');
 */

const appOptions = {
	el: '#vue', // 挂载到父应用中的id为vue的标签中
	render: h => h(App),
};

// note: ①、协议接入，定好了协议，父应用会调用这些方法
export const { bootstrap, mount, unmount } = singleSpaVue({
	Vue,
	appOptions,
});

// note: ②、我们需要父应用加载子应用，将子应用打包成一个个的lib去给父应用使用

/* 
    我们需要父应用加载子应用，微前端必须要用到3个包
    bootstrap mount unmount



*/
