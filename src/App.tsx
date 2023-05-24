import { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useRoutes, useLocation } from 'react-router-dom'

import Loading from "@/pages/Loading/Loading";
const Login = lazy(() => import("@/pages/Login/Login"))
const NotFound = lazy(() => import("@/pages/NotFound/NotFound"))
import Home from "@/pages/Home/Home"
const ClassComponent = lazy(() => import("@/pages/ClassComponent/ClassComponent"))
const HomeComponent = lazy(() => import("@/pages/Home/HomeComponent/HomeComponent"))
const Redux = lazy(() => import("@/pages/Redux/redux"))
const Request = lazy(() => import("@/pages/Request/Request"))

import { routes } from "@/router/index"
import type { RouteRecordRaw } from "@/router/index"
import GuardedRoute from "@/router/RouteGuard"

export default function App() {

	useEffect(() => {
		const handlePopstate = (event: PopStateEvent) => {
			// 在这里执行 popstate 事件触发时的逻辑
			console.log("App event", event);
			return
		};

		// 添加 popstate 事件监听
		window.addEventListener('popstate', handlePopstate);
	}, [])

	const createRoutes = (routes: Array<RouteRecordRaw>) => {
		return routes.map((item) => {
			return (
				<Route path={item.path} element={
					<GuardedRoute router={item}>
					</GuardedRoute>
				} key={item.path}>
					{item?.children && createRoutes(item.children)}
				</Route>
			)
		})
	}

	// console.log(createRoutes(routes));

	const element = useRoutes([
		{
			path: '/class',
			element: <ClassComponent />,
		},
		{
			path: '/request',
			element: <Request />,
		},
		{
			path: '/redux',
			element: <Redux />,
		},
		{
			path: '/login',
			element: <Login />,
		},
		{
			path: '/',
			element: <Home />,
			// element: <Navigate to="/home"/>,
			children: [
				{
					path: '/home/:id',
					element: <HomeComponent />,
				}
			]
		},
	])

	return (
		<div id="app">
			<Suspense fallback={<Loading />}>
				<Routes>
					{createRoutes(routes)}
				</Routes>
			</Suspense>
			{/* {element} */}
			{/* <Suspense fallback={<Loading/>}>
				{element}
				<Routes>
					<Route path="/" element={<Home/>}>
						<Route path="home/:id" element={<HomeComponent/>}/>
					</Route>
					<Route path="/login" element={<Login/>}/>
					<Route path="/redux" element={<Redux/>}/>
				</Routes>
			</Suspense> */}
		</div>
	)
}
