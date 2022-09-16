import Effect from "./pembahasan/Effect"
import Counter from "./pembahasan/Counter"
import Identity from "./pembahasan/Identity"
import { useState } from "react"
import { useToogle } from "./pembahasan/hook/useToogle"

const Hooks = () => {
    let [label, setLabel] = useState("ON")
    let [lampu, setLampu] = useToogle()

    const style = {
        background: lampu ? "green" : "black",
        textAlign: "center",
        height: "400px",
        color: "white"
    }

    const saklar = () => {
        setLampu(!lampu)
        setLabel(e => {
            if(e === "ON"){
                return "OFF"
            }
            return "ON"
        })
    }

    return(
        <div style={style}>
            {/* <button onClick={saklar}>{label}</button> */}
            <input onClick={saklar} type="radio" name="" id="ON" />ON
            <input onClick={saklar} type="radio" name="" id="OFF" />OFF
        </div>
    )
}
export default Hooks