import { useState } from "react"

const FunctionalComponent = ({nama}) => {
    const [value, setValue] = useState(0)

    const handlePlus = () =>{
        setValue(value + 1)
    }

    const handleMin = () =>{
        if (value > 0) {
            setValue(value - 1)
        }
    }

    return(
        <div>
            <h1>membuat komponen dengan functional component</h1>
            <h2>hallo {nama} selamat datang di mern class</h2>
            <button onClick={handleMin}>-</button>
            <span>{'  '}{value}{'  '}</span>
            <button onClick={handlePlus}>+</button>
        </div>
    )
}

FunctionalComponent.defaultProps = {
    nama: "User"
}

export default FunctionalComponent