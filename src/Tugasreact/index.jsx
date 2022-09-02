import React from "react";
import App from "../App";
import 'bootstrap/dist/css/bootstrap.css';
import StylingComponent from "/StylingComponent/StylingBootstrap";


export default class Tugasreact extends React.Component {

    render() {
        return(
            <div>
                <StylingComponent />
                <App />
                                
            </div>
        )
    }
}