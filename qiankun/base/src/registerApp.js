/*
 * @Descripttion:
 * @Author: lukasavage
 * @Date: 2022-07-31 15:15:56
 * @LastEditors: lukasavage
 * @LastEditTime: 2022-07-31 19:30:33
 * @FilePath: \qiankun-study\qiankun\base\src\registerApp.js
 */
import { registerMicroApps, start } from 'qiankun';

const loader = () => {
	console.log('loading...');
};

registerMicroApps(
	[
		{
			name: 'm-vue',
			entry: '//localhost:20000',
			container: '#container', // 激活到哪里去
			activeRule: '/vue', // 命中条件路由
			loader, // 正在加载中的回调
		},
		{
			name: 'm-react',
			entry: '//localhost:30000',
			container: '#container',
			activeRule: '/react', // 命中条件路由
			loader,
		},
	],
	{
		beforeLoad() {
			console.log('加载前');
		},
		beforeMount() {
			console.log('挂载前');
		},
		afterMount() {
			console.log('挂载后');
		},
		beforeUnmount() {
			console.log('销毁前');
		},
		afterUnmount() {
            console.log('销毁后');
        },
	}
);

start({
    sandbox: {
        // experimentalStyleIsolation: true, // 会给每一个样式添加一个后缀，如div[data-qiankun="m-react"],从而解决主子应用样式隔离的问题
        strictStyleIsolation: true, // shadowDOM样式隔离方式
    }
})
