import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faPhone } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope, faNewspaper } from "@fortawesome/free-regular-svg-icons"
import { faUser } from "@fortawesome/free-regular-svg-icons"
// import { useNavigate } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import code from "../../../code.png"
import "./styleContact.css"
import React from "react"

const Contact = () => {

    const notify = () => toast.success("Terimaksih, Masukan Anda sudah kami terima", {position:"top-center", theme:"light"})
    // const navigate = useNavigate()
    // const goToHome = () => {
    //     navigate("/Navigate")
    // }

    return(
        <React.Fragment>
        <div className="sidebar">
            <img 
                alt=""
                src={code}
                maxwidth= "100%"
                width="160"
                height="60"
                className="d-inline-block align-center"
                />{" "}
            <Link to= "/"><FontAwesomeIcon icon={faHome} /> &nbsp; Home</Link>
            <Link to= "/menu"><FontAwesomeIcon icon={faNewspaper} /> &nbsp; Project</Link>
            <Link to= "/contact"><FontAwesomeIcon icon={faEnvelope} /> &nbsp; Contact</Link>
        </div>
        <br />

        <div className="cntnr">
            <div className="kotak">
                <h2>Send Us a Message</h2>
                <form action="">
                <input type="email" placeholder="Email" /><FontAwesomeIcon icon={faUser} />
                <input type="number" name="" id="" placeholder="Phone" /><FontAwesomeIcon icon={faPhone} />
                <br />
                <textarea name="" id="" rows="10" placeholder="Message" ></textarea>
                </form>
                <button className="bttn" onClick={notify}>Send Message</button>
                <ToastContainer />
            </div>
        </div>
        
        <br />
        <br />
        <br />
        <div className='footer-contact'>
            &copy; {new Date().getFullYear()} Copyright, {'Sucipta Creative Team, All rights reserved.'}
        </div>
        </React.Fragment>
    )
}
export default Contact