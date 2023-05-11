import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter, BrowserRouter } from 'react-router-dom';

import { ConfigProvider } from 'antd';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<ConfigProvider
			theme={{
				token: {
					colorPrimary: '#00b96b',
				},
			}}
		>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ConfigProvider>
	</React.StrictMode>
);
