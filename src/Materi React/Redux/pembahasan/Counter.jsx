import { useSelector } from "react-redux"
import { useDispatch } from "react-redux/es/exports"
import {  decrementWitchCheckingAction, decrementWithCheckingAction, increment } from "../../../App/features/Counter/actions"

const Counter = () => {
    let {count}= useSelector(state => state.counter)
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch(decrementWitchCheckingAction(1))} className="min">-</button>
            {" "} <span>{count}</span> {" "}
            <button onClick={() => dispatch(increment(1))} className="plus">+</button>
        </div>
    )
}
export default Counter