import { lazy } from "react";
import { Navigate } from "react-router-dom";

const Home = lazy(() => import("@/pages/Home/Home"))
const HomeComponent = lazy(() => import("@/pages/Home/HomeComponent/HomeComponent"))
const Login = lazy(() => import("@/pages/Login/Login"))
const Redux = lazy(() => import("@/pages/Redux/redux"))
const Request = lazy(() => import("@/pages/Request/Request"))
const NotFound = lazy(() => import("@/pages/NotFound/NotFound"))

// import Login from "@/pages/Login/Login";
// import NotFound from "../pages/NotFound/NotFound";
// import Home from "../pages/Home/Home";
// import HomeComponent from "@/pages/Home/HomeComponent/HomeComponent";
// import Redux from "../pages/Redux/redux";
// import Request from "@/pages/Request/Request";

export type RouteRecordRaw = {
	path: string;
	element: JSX.Element;
	name?: string | symbol;
	redirect?: string;
	// alias?: string | string[];
	children?: RouteRecordRaw[];
	meta?: Record<string | number | symbol, unknown>;
}

export const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: "home",
		element: <Home/>,
		// element: (<><Home/><Navigate to="/home/:id" replace/></>),
		redirect: '/home/id',
		meta: {
			needAuth: true,
		},
		children: [
			{
				path: "/home/:id",
				name: "HomeComponent",
				element: <HomeComponent/>,
				meta: {
					needAuth: true,    // 需要登录才能访问
					title: "home",     // 标题
				}
			}
		]
	},
	{
		path: '/login',
		name: "login",
		element: <Login/>,
		meta: {
			title: "login",
		}
	},
	{
		path: '/redux',
		name: "redux",
		element: <Redux/>,
		meta: {
			needAuth: true,
			title: "redux使用",
		},
	},
	{
		path: '/request',
		name: "request",
		element: <Request/>,
		meta: {
			needAuth: true,
			title: "request使用",
		},
	},
	{
		path: '*',
		name: "notfound",
		element: <NotFound/>,
		meta: {
			title: "找不到该页面",
		},
	},
]
