import React from "react";
import ReactDom from "react-dom"
import "../index.css"
import App from "./App";
import reportWebVitals from "./reportWebVitals"

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
)
reportWebVitals()