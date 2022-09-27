import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope, faNewspaper } from "@fortawesome/free-regular-svg-icons"
import { useNavigate } from "react-router-dom" 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import code from "../../../code.png"
import form from "./form.jpg"
import classcompoent from "./class component.png"
import props from "./props.png"
import react from "./reactbootstrap.png"
import hook from "./hook.jpg"
import router from "./router.jpg"
import css from "./css.jpg"
import wafel from "./es wafel.jpg"

import "./styleMenu.css"

const Menu = () => {
    // const notify = () => toast.success("Pesanan Anda Sudah kami Terima", {position:"top-center",theme:"light", className:"toast"})
    const navigate = useNavigate()
    const goToFormValidation = () => {
        navigate("/FormValidation")
    }
    const goToClass = () => {
        navigate("/TugasComponent")
    }
    const goToProp = () => {
        navigate("/TugasComponent")
    }
    const goToHooks = () => {
        navigate("/Hooks")
    }
    const goToKomponen = () => {
        navigate("/Komponen")
    }
    const goToRouting = () => {
        navigate("/Routing")
    }
    const goToStyling = () => {
        navigate("/Styling")
    }
    const goToModule = () => {
        navigate("/Module")
    }

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
            <Link to= "/Home"><FontAwesomeIcon icon={faHome} /> &nbsp; Home</Link>
            <Link to= "/Menu"><FontAwesomeIcon icon={faNewspaper} /> &nbsp; Project</Link>
            <Link to= "/Contact"><FontAwesomeIcon icon={faEnvelope} /> &nbsp; Contact</Link>
        </div>

        <div className="rata-kanan">
        <div className="card-menu-gulung">
            <img className="image" src={form} alt="" />
            <h4 className="title-gulung">FORM VALIDATION</h4> 
            <button onClick={() => goToFormValidation()} className="gulung" >CEK</button>
            <ToastContainer />
            <div className="card-desk"></div>
        </div>

        <div className="card-menu-cone">
            <img className="image" src={classcompoent} alt="" />
            <h4 className="title-cone">CLASS COMPONENT</h4> 
            <button onClick={() => goToClass()} className="cone">CEK</button>
            <div className="card-desk"></div>
        </div>

        <div className="card-menu-cone">
            <img className="image" src={props} alt="" />
            <h4 className="title-cone">COMPONENT PROPS</h4> 
            <button onClick={() => goToProp()} className="cone">CEK</button>
            <div className="card-desk"></div>
        </div>

        <div className="card-menu-cone">
            <img className="image" src={react} alt="" />
            <h4 className="title-cone">MATERI STYLING MODULE</h4> 
            <button onClick={() => goToModule()} className="cone">CEK</button>
            <div className="card-desk"></div>
        </div>
        </div>

        {/* ------------------------------------------------------------ */}

        <div className="bawah-rata-kanan">
        <div className="card-menu-gulung">
            <img className="image" src={hook} alt="" />
            <h4 className="title-gulung">MATERI HOOKS</h4>
            <button onClick={() => goToHooks()} className="gulung">CEK</button>
            <div className="card-desk"></div>
        </div>

        <div className="card-menu-cone">
            <img className="image" src={classcompoent} alt="" />
            <h4 className="title-cone">MATERI FUNCTIONAL COMPONENT</h4> 
            <button onClick={() => goToKomponen()} className="cone">CEK</button>
            <div className="card-desk"></div>
        </div>

        <div className="card-menu-cone">
            <img className="image" src={router} alt="" />
            <h4 className="title-cone">MATERI ROUTING (Client Page)</h4> 
            <button onClick={() => goToRouting()} className="cone">CEK</button>
            <div className="card-desk"></div>
        </div>

        <div className="card-menu-cone">
            <img className="image" src={css} alt="" />
            <h4 className="title-cone">MATERI IN-LINE</h4> 
            <button onClick={() => goToStyling()} className="cone">CEK</button>
            <div className="card-desk"></div>
        </div>
        </div>
        <br />
        <br />
        <div className='footer-menu'>
            &copy; {new Date().getFullYear()} Copyright, {'Sucipta Creative Team, All rights reserved.'}
        </div>
        </React.Fragment>
    )
}
export default Menu