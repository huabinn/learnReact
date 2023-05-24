import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slice/counterSlice'
import usersReducer from './slice/usersSlice'
import identitySlice from './slice/identitySlice'

const store = configureStore({
	reducer: {
		counter: counterReducer,
		users: usersReducer,
		identity: identitySlice,
	},
})
export default store

// 声明 state, dispath 类型
// ReturnType<>：获取函数返回值的类型
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
