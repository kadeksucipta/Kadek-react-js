import { useState, useEffect } from "react"

const Counter = () => {
    let[count,setCount] = useState(0)

    useEffect(() => {
        setCount(c => c + 1) //render loop harus di hindari
    }, [])

    return (
        <div>
            <button onClick={() => setCount(count - 1)}>-</button>
            {" "} <span>{count}</span> {" "}
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}
export default Counter
