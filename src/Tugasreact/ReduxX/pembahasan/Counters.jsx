import { useSelector } from "react-redux"
import { useDispatch } from "react-redux/es/exports"
import {  decrementWitchCheckingAction, increment } from "../../../App/features/Counter/actions"
import "./redux.css"

const Counter = () => {
    let {count}= useSelector(state => state.counter)
    const dispatch = useDispatch()
    return (
        <div className="properti">
            <h6>Redux (Counter Applycation)</h6>
            <button onClick={() => dispatch(decrementWitchCheckingAction(1))} className="min">-</button>
            {" "} &nbsp; <span>{count}</span> &nbsp; {" "}
            <button onClick={() => dispatch(increment(1))} className="plus">+</button>
        </div>
    )
}
export default Counter