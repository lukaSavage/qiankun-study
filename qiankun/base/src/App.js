/*
 * @Descripttion:
 * @Author: lukasavage
 * @Date: 2022-07-31 14:53:23
 * @LastEditors: lukasavage
 * @LastEditTime: 2022-07-31 15:13:26
 * @FilePath: \qiankun-study\qiankun\base\src\App.js
 */

import { BrowserRouter as Router, Link } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Router>
				<Link to="/vue">vue子应用</Link>
				<Link to="/react">react子应用</Link>
			</Router>
            {/* 切换导航，将微应用渲染到container容器中 */}
            <div id="container"></div>
		</div>
	);
}

export default App;
