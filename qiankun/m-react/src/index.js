/*
 * @Descripttion:
 * @Author: lukasavage
 * @Date: 2022-07-31 14:56:36
 * @LastEditors: lukasavage
 * @LastEditTime: 2022-07-31 19:13:17
 * @FilePath: \qiankun-study\qiankun\m-react\src\index.js
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

function render(props = {}) {
	const { container } = props;
	const root = ReactDOM.createRoot(
		container
			? container.querySelector('#root')
			: document.getElementById('root')
	);
	root.render(<App />);
}

console.log(window.__POWERED_BY_QIANKUN__);

if (!window.__POWERED_BY_QIANKUN__) {
	render();
}

export async function bootstrap(props) {
	console.log('react app bootstraped', props);
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
	console.log(11111111111111);
	render(props);
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount(props) {
	console.log('update props', props);
	// const { container } = props;
	// ReactDOM.unmountComponentAtNode(
	// 	container
	// 		? container.querySelector('#root')
	// 		: document.getElementById('#root')
	// );
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
// export async function update(props) {}
