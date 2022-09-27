import { Route, Switch, useRouteMatch } from "react-router"
import { Link } from "react-router-dom"
import { useHistory } from "react-router"

const Service = () => {
    const history = useHistory()
    const match = useRouteMatch()
    return(
        <div className="main">
            <h2>Service Page</h2>
            <ul>
                <li><Link to={`${match.url}/computer`}>Computer</Link></li>
                <li><Link to="/service/smartphone">Smartphone</Link></li>
            </ul>

            <hr />

            <Switch>
                <Route path={`${match.url}/computer`}>
                    komputer, CPU, monitor, dll
                </Route>
                <Route path="/service/smartphone">
                    Iphone, Oppo, Realme, dll
                </Route>
            </Switch>
            <button onClick={() => history.push("/")}>Back</button>
        </div>
    )
}
export default Service