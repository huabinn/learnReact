import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter, BrowserRouter } from 'react-router-dom';

import store from "./store/store"
// import store from "./rtkq/store"
import { Provider } from 'react-redux';
// antd 自定义主题 
import { ConfigProvider } from 'antd';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	// 严格模式
	// <React.StrictMode>
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: '#00b96b',
				},
			}}
		>
			<Provider store={store}>
				{/* 路由模式 */}
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</Provider>
		</ConfigProvider>
	// </React.StrictMode>
);
