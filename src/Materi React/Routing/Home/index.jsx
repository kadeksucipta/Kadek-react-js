import { Link } from "react-router-dom"

const Home = () => {
    return(
        <div className="main">
            <h2>Home Page</h2>
            <ul>
                <li><Link to="/post/1">satu</Link></li>
                <li><Link to="/post/2">dua</Link></li>
                <li><Link to="/post/3">tiga</Link></li>
            </ul>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis provident sed quaerat officia esse sunt harum vero ex quibusdam consectetur eligendi, quasi, sapiente rerum laborum soluta, iure blanditiis. Accusantium, rem?</p>
        </div>
    )
}
export default Home