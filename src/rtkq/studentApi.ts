import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react"

const studentApi = createApi({
	reducerPath: "studentApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "/api1",
	}),
	endpoints(build) {
		return {
			getStudent: build.query({
				query: () => {
					return "/user/search"
				},
				// 修改返回值格式
				/* transformResponse: (baseQuery) => {
					return baseQuery.data
				} */
			}),
		}
	}
})

export const {
	useGetStudentQuery,
} = studentApi

export default studentApi