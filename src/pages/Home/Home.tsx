import { Component, ReactNode } from 'react';
// 样式模块化
import home from './home.module.css';

export default class Home extends Component {

	state = {
		a: 0,
	}

	change = () => {
		console.log(this.state.a);
		this.setState((state: {a: number}) => ({
			a: state.a + 1,
		}))
	}

	render(): ReactNode {
		return (
			<div className={home.title} onClick={this.change}>标题：{this.state.a}</div>
		)
	}
}

