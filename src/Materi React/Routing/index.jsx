import Navigation from "./Navigation"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./Home"
import Service from "./Service"
import Contact from "./Contact"
import Client from "./Client"
import Post from "./Post"

const Routing = () => {
    return (
        <div>
            <Router>
            <Navigation />
                <Switch>

                    {/* Home menggunakan anonymous function agar terlihat kebih rapi */}
                    <Route exact path="/" children={() => <Home />} />
                    <Route path="/service">
                        <Service />
                    </Route>
                    <Route path="/client">
                        <Client />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/post/:id" children={() => <Post />} />
                </Switch>
            </Router>    
        </div>
    )
}
export default Routing