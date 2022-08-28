import { useState } from "react"

const KomponenProp = ({nama}) => {
    const [value, setValue] =useState(0)

    const handlePlus = () =>{
        setValue(value + 1)
    } 

    const handleMin = () =>{
        if(value > 0){
            setValue(value - 1)
        }
    } 

    return (
        <div>
            <h1 style={{fontFamily: "calibri"}}>Ini adalah contoh Hooks</h1>
            <h2 style={{fontFamily: "calibri"}}>Hallo {nama}, Selamat belajar komponen</h2>
            <button style={{background:"none", color:"black", borderRadius:"6px",cursor:"pointer"}} onClick={handleMin}>-</button>
            <span style={{textalign:"center"}}>{'  '}{value}{'  '}</span>
            <button style={{background:"none", color:"black", borderRadius:"6px", cursor:"pointer"}} onClick={handlePlus}>+</button>
            <hr />
        </div>
    )
}
export default KomponenProp
