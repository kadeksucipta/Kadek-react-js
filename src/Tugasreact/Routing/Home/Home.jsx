import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope, faNewspaper } from "@fortawesome/free-regular-svg-icons"
import { useNavigate } from "react-router-dom"
import code from "../../../code.png"
import dev from "./dev.png"
import "./styleHome.css"
import React from "react"
import { useSelector } from "react-redux"

const Home = () => {
    const navigate = useNavigate()
    const { user } = useSelector(state => state.login)
    const goToHome = () => {
        navigate("/Menu")
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
        <div className="kubus"> 
            <br />
            <br />
            <br />
            <br />
            <img className="corne" src={dev} alt="" />
            <h1 className="text-h1">Code Kita for All Developers</h1>
            <h3 className="text-h3">Tempat terpercaya untuk Menyimpan Project Anda. Kami menjamin 100%. Yuk submit Project mu !</h3>
            <button onClick={() => goToHome()} className="tombol">Project</button>
        </div>
        <div className="segi">
            <h1 className="title-segi">Apa itu Code kita ?</h1>
            <h2 className="desk-segi">Tempat untuk Menyimpan Data Project Anda. Recomended for Developers</h2>
        </div>
        <br />
        <br />
        <br />
        <div className='footer-home'>
            &copy; {new Date().getFullYear()} Copyright, {'Sucipta Creative Team, All rights reserved.'}
        </div>
        </React.Fragment>
    )
}
export default Home