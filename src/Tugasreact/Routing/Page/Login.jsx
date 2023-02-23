import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-regular-svg-icons"
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faKey } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"
import React from "react"
import { Icons } from "react-toastify"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUserData } from "../../../App/features/Login/Actions"

const Login  = () => {
    const [user, setUser] = useState ({
        email: "",
        password: ""
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const goToHome = () => {
        // console.log("state user", user)
        dispatch(setUserData(user))
        navigate("/Home")
    }
    const goToError = () => {
        navigate("/Error")
    }


    // state = {
    //     isPasswordShown : false
    // }
    // togglePasswordVisibility = () => {
    //     const {isPasswordShown} = this.state
    //     this.setState({ isPasswordShown : !isPasswordShown})
    // }


    return(
        <React.Fragment>
        <div className="container">
            <div className="box">
                <h2>Login</h2>
                <form action="">
                <input onChange={e => setUser({...user, email: e.target.value})} type="email" placeholder="Email" /><FontAwesomeIcon icon={faUser} />
                <input onChange={e => setUser({...user, password: e.target.value})} type="password" name="" id="" placeholder="Password" /><FontAwesomeIcon icon={faKey} />
                </form>
                <button onClick={() => goToHome()}>Login</button>
                <p>Forgot password ?</p>

                <hr />
                <button onClick={() => goToError()} className="btn">create new account </button>
            </div>
        </div>
        <br />
        <br />
        <br />
        <div className='footer-login'>
            &copy; {new Date().getFullYear()} Copyright, {'Sucipta Creative Team, All rights reserved.'}
        </div>
        </React.Fragment>
    )
}
export default Login