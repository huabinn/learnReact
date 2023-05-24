import { Suspense, useEffect } from "react";
import { useState, useTransition } from 'react';
import { useParams, useMatch, useSearchParams, useLocation, useNavigate, useResolvedPath, Outlet, Navigate } from 'react-router-dom';

import axios from 'axios'
import { DatePicker, Space, Button } from 'antd';
import type { DatePickerProps } from 'antd';

// 样式模块化
import home from './home.module.less';
import Loading from "@/pages/Loading/Loading";

// eslint-disable-next-line
export default function Home() {

	const params = useParams()
	// /home 必须与当前路径一致
	const match = useMatch("/home")

	const [search, setSearch] = useSearchParams()

	const location = useLocation()

	// console.log(params, match, search.get("id"), location);

	const navigate = useNavigate()
	
	const [a, setA] = useState(0)
	const [b, setB] = useState(0)

	// console.log("useResolvedPath", useResolvedPath("/user?id=0#/abc?a=0"));

	// console.log("home重新渲染");

	useEffect(() => {
		// setA(100000111111)
	}, [])

	const change = () => {
		setA(a => a+1)
		// setSearch("id=0&name=bin")
		setB(b=>b+1)
		window.location.hash = "a#b"
	}

	const changeRoute = () => {
		/* navigate("/request", {
			replace: false,
			state: {
				id: 100
			}
		}) */
	}
	const toRedux = () => {
		navigate("/redux", {
			state: {
				redux: "redux"
			}
		})
	}
	const toHome = () => {
		navigate("/home/id", {
			state: {
				home: "home"
			}
		})
	}
	const toLogin = () => {
		navigate("/login#nihao", {
			state: {
				login: "login"
			}
		})
	}

	const onChange: DatePickerProps['onChange'] = (date, dateString) => {
		console.log(date, dateString);
	};

	return (
		<>
			<div className={home.title} onClick={change}>标题：{a}，修改 search</div>
			<div>
				<Space direction="vertical">
					<DatePicker onChange={onChange} />
					<DatePicker onChange={onChange} picker="week" />
					<DatePicker onChange={onChange} picker="month" />
					<DatePicker onChange={onChange} picker="quarter" />
					<DatePicker onChange={onChange} picker="year" />
				</Space>
			</div>
			<span onClick={changeRoute}><Button type="primary">go request</Button></span>
			<span onClick={toRedux}><Button type="primary">go redux</Button></span>
			<span onClick={toHome}><Button type="primary">go home</Button></span>
			<span onClick={toLogin}><Button type="primary">go login</Button></span>
			{/* <Navigate to="/home/id"/> */}
			{/* <Outlet></Outlet> */}
			<Suspense fallback={<Loading/>}>
				<Outlet></Outlet>
			</Suspense>
		</>
	)
}

