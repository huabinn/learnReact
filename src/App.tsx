import { Component, ReactNode } from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'

import type { DatePickerProps } from 'antd';
import { DatePicker, Space } from 'antd';
import { Button } from 'antd';
import style from './App.module.less'

import Home from './pages/Home/Home'
import Request from './pages/Request/Request'

export default class App extends Component {

	render(): ReactNode {
		console.log("props", this.props);   // {}
		
		// console.log(style);
		// console.log("process.env", process.env);
		const onChange: DatePickerProps['onChange'] = (date, dateString) => {
			console.log(date, dateString);
		};
		return (
			<div id="app">
				<div className={style.App} style={{width: '100%',backgroundColor: 'silver'}}>标题</div>
				<div>
					<Space direction="vertical">
						<DatePicker onChange={onChange} />
						<DatePicker onChange={onChange} picker="week" />
						<DatePicker onChange={onChange} picker="month" />
						<DatePicker onChange={onChange} picker="quarter" />
						<DatePicker onChange={onChange} picker="year" />
					</Space>
				</div>
				<div><Button type="primary">Button</Button></div>
                <Switch>
					<Route path="/home" component={Home}/>
					<Route path="/request" component={Request}/>
					<Redirect to="/home"/>
				</Switch>
            </div>
		)
	}
}
