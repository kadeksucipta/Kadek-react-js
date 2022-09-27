import { Link, Route, Switch, useHistory } from "react-router-dom"

const Contact = () => {
    const history = useHistory()
    return(
        <div className="main">
            <h2>Contact Page</h2>
            <ul>
                <li><Link to="/contact/arya">Arya</Link></li>
                <li><Link to="/contact/dita">Dita</Link></li>
            </ul>
            <p>this Contact</p>

            <hr />

            <Switch>
                <Route path="/contact/arya">
                    <div>
                        <input type="text" placeholder="message" /> &nbsp;
                        <button>Send</button>
                    </div>
                </Route>

                <Route path="/contact/dita">
                   <h1 className="red">this contact is full !!</h1>
                </Route>
            </Switch>
            <br />
            <button onClick={() => history.push("/")}>Back</button>
        </div>
    )
}
export default Contact