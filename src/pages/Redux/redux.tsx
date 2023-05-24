import { useAppDispatch, useAppSelector } from '../../hooks/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../store/slice/counterSlice'
import { RootState } from '../../store/store'

import {useGetStudentQuery} from "../../rtkq/studentApi"

export default function Redux() {

	const count = useAppSelector(state => state.counter.countNumber)
	// const count = useAppSelector((state: RootState) => state.counter.countNumber)
 	const dispatch = useAppDispatch()
	
	// const obj = useGetStudentQuery("1111")
	// console.log("obj", obj);

	return (
		<div>
			<div>
				<button
					aria-label="Increment countNumber"
					onClick={() => dispatch(increment())}
				>
					Increment
				</button>
				<span>{count}</span>
				<button
					aria-label="Decrement countNumber"
					onClick={() => dispatch(decrement())}
				>
					Decrement
				</button>
			</div>
		</div>
	)
}
