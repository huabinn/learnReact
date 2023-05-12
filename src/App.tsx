import { Routes, Route, Navigate, useRoutes } from 'react-router-dom'

import Home from './pages/Home/Home'
import ClassComponent from './pages/ClassComponent/ClassComponent'
import Request from './pages/Request/Request'


export default function App() {

	const element = useRoutes([
		{
			path: 'home',
			element: <Home/>,
			children: [
				{
					path: 'home',
					element: <Home/>,
				}
			]
		},
		{
			path: 'class',
			element: <ClassComponent/>,
		},
		{
			path: 'request',
			element: <Request/>,
		},
		{
			path: '/',
			element: <Navigate to="/home"/>,
		},
	])

	return (
		<div id="app">
			{element}
			{/* <Routes>
				<Route path="/home" element={<Home/>}/>
				<Route path="/class" element={<ClassComponent/>}/>
				<Route path="/request" element={<Request/>}/>
				
				<Route path="/" element={<Navigate to="/home"/>}/>
			</Routes> */}
		</div>
	)
}
