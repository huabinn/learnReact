import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
	// 用来自动生成 action 中的 type
	name: 'counter',
	// state 初始值
	initialState: {
		countNumber: 0,
	},
	reducers: {
		increment: (state) => {
			state.countNumber += 1
		},
		decrement: (state) => {
			state.countNumber -= 1
		},
		incrementByAmount: (state, action) => {
			state.countNumber += action.payload
		},
	},
})

// 切片对象会自动生成 action
// actions 存储的是 slice 自动生成 action 创建器（一个函数）
// action 对象的结构：{type: "counter/increment"}...，payload：函数的参数
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer