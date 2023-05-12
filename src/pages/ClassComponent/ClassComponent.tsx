import { Component, ReactNode } from 'react';


import { DatePicker, Space, Button } from 'antd';
import type { DatePickerProps } from 'antd';

// 样式模块化
import home from './ClassComponent.module.less';

export default class Home extends Component {

	state = {
		a: 0,
	}

	change = () => {
		this.setState((state: {a: number}) => ({
			a: state.a + 1,
		}), () => {
			console.log(this.state.a);
		})
	}

	render(): ReactNode {
		const onChange: DatePickerProps['onChange'] = (date, dateString) => {
			console.log(date, dateString);
		};
		return (
			<>
				<div className={home.title} onClick={this.change}>标题：{this.state.a}</div>
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
			</>
		)
	}
}
