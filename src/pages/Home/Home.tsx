import { useState } from 'react';
import { useParams, useMatch, useSearchParams, useLocation, useNavigate, useResolvedPath } from 'react-router-dom';

import { DatePicker, Space, Button } from 'antd';
import type { DatePickerProps } from 'antd';

// 样式模块化
import home from './home.module.less';

export default function Home() {

	const params = useParams()
	// /home 必须与当前路径一致
	const match = useMatch("/home")

	const [search, setSearch] = useSearchParams()

	const location = useLocation()

	console.log(params, match, search.get("id"), location);

	const navigate = useNavigate()
	
	const [a, setA] = useState(0)

	console.log("useResolvedPath", useResolvedPath("/user?id=0#/abc?a=0"));
	

	const change = () => {
		setA(a => a+1)
		setSearch("id=0&name=bin")
	}

	const changeRoute = () => {
		navigate("/request", {
			replace: false,
			state: {
				id: 100
			}
		})
	}

	const onChange: DatePickerProps['onChange'] = (date, dateString) => {
		console.log(date, dateString);
	};

	return (
		<>
			<div className={home.title} onClick={change}>标题：{a}</div>
			<div>
				<Space direction="vertical">
					<DatePicker onChange={onChange} />
					<DatePicker onChange={onChange} picker="week" />
					<DatePicker onChange={onChange} picker="month" />
					<DatePicker onChange={onChange} picker="quarter" />
					<DatePicker onChange={onChange} picker="year" />
				</Space>
			</div>
			<div onClick={changeRoute}><Button type="primary">Button</Button></div>
		</>
	)
}

