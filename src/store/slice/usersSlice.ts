import { createSlice } from '@reduxjs/toolkit'

export const usersSlice = createSlice({
	// 用来自动生成 action 中的 type
	name: 'users',
	// state 初始值
	initialState: {
		name: "",
	},
	reducers: {
		changeName: (state, action) => {
			state.name = action.payload
		},
	},
})

export const { changeName } = usersSlice.actions

export default usersSlice.reducer