import { useState } from 'react';
import './request.css'
import axios from 'axios'

export default function Request() {

	const getSearch = () => {
		axios({
			url: '/api1/user/search',
			method: 'get',
		})
		.then(res => {
			console.log(res.data);
		})
		.catch(err => {
			console.error(err);
		})
	}

	const [name, setName] = useState('bin')
    
    const changeName = () => {
		//setName("huabin") //第一种写法
		setName(name => {
            return "hua" + name
        })
	}

	return (
		<div>
			<div className='button-cover' onClick={getSearch}>点我获取数据</div>
			<div>名字：{name}</div>
            <div className='button-cover' onClick={changeName}>改名字</div>
		</div>
	)
}
