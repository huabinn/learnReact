import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import studentApi from './studentApi'

const store = configureStore({
	reducer: {
		[studentApi.reducerPath]: studentApi.reducer
	},
	middleware: getDefaultMiddleware => {
		return getDefaultMiddleware().concat(studentApi.middleware)
	}
})
export default store

// 声明 state, dispath 类型
// ReturnType<>：获取函数返回值的类型
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
