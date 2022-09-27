import React from "react"
import "./styleerror.css"
import robot from "./robot.jpg"
import code from "../../../code.png"

const PageError = () => {
    return (
        <React.Fragment>
            <div className="text-tag">
                <img className="logo" src={code} alt="" />
                <hr className="garis" />
                <h5 className="h5">404. That`s an Error</h5>
                <p className="error">The requsted URL was not found on this server. that`s all we know.</p>
                <img className="robot" src={robot} alt="" />
            </div>
        </React.Fragment>
    )
}
export default PageError