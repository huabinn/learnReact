import { createSlice } from '@reduxjs/toolkit'

import CookieUtil from "@/utils/StorageUtils/CookieUtil"

export const identitySlice = createSlice({
	// 用来自动生成 action 中的 type
	name: 'identity',
	// state 初始值
	initialState: {
		phone: CookieUtil.get("phone") || '',
		token: CookieUtil.get("token") || '',
	},
	reducers: {
		saveLoginInfo: (state, action) => {
			state.phone = action.payload.phone
			state.token = action.payload.token
			CookieUtil.set({
				name: "phone",
				value: action.payload.phone,
				expires: new Date().getTime() + 30 * 24 * 60 * 60 * 1000,  // 保鲜30天
			})
			CookieUtil.set({
				name: "token",
				value: action.payload.token,
				expires: new Date().getTime() + 30 * 24 * 60 * 60 * 1000,  // 保鲜30天
			})
		},
		removeLoginInfo: (state) => {
			state.phone = ''
			state.token = ''
			CookieUtil.unset({ name: "phone"})
			CookieUtil.unset({ name: "token"})
		},
	},
})

export const { saveLoginInfo, removeLoginInfo } = identitySlice.actions

export default identitySlice.reducer