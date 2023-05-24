/**
 * 全局前置路由守卫
 */
import { useSelector } from "react-redux";
import { useLocation, useMatch, Navigate } from "react-router-dom";

import type { RootState } from '@/store/store'
import type {RouteRecordRaw} from "@/router/index"

// 是否具有重定向
const redirect = (router: RouteRecordRaw): JSX.Element => {
	if(router.redirect) {
		return (
			<>
				{router.element}
				<Navigate to={router.redirect} replace/>
			</>
		)
	}
	return router.element
}

const GuardedRoute = ({router}: {router: RouteRecordRaw, children: never[]}): JSX.Element => {
	const location = useLocation()
	const match = useMatch(router.path)
	const token = useSelector((state: RootState) => state.identity.token) || "token"
	
	// 没有 match 即不是目标路由，可能是父路由。无需处理往下的逻辑
	if(!match) return router.element
	// 处理重定向问题
	let element = redirect(router)
	
	// 登录验证
	if(token || !router.meta?.needAuth) {
		document.title = (router.meta?.title as string) || "react"
	} else {
		// from 可以在 login 的 location.state 中接收，以便登陆后直接返回至本页
		element = <Navigate to="/login" state={{from: location}}/>
	}

	return element
};
export default GuardedRoute;
