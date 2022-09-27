import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from "@fortawesome/free-solid-svg-icons"
import { faGear } from "@fortawesome/free-solid-svg-icons"
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons"

import "./index.css"

const Navigation = () => {
    return (
        <div className="sidebar">
            <Link to= "/"><FontAwesomeIcon icon={faHome} /> &nbsp; Home</Link>
            <Link to= "/service"><FontAwesomeIcon icon={faGear} /> &nbsp; Service</Link>
            <Link to= "/client"><FontAwesomeIcon icon={faUser} /> &nbsp; Client</Link>
            <Link to= "/contact"><FontAwesomeIcon icon={faEnvelope} /> &nbsp; Contact</Link>
        </div>
    )
}
export default Navigation