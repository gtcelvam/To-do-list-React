import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./App.css"

var Basic = function(){
    return(
        <div className="main">
            <App/>
        </div>
    )
}

var root = document.querySelector(".root");

ReactDOM.render(<Basic/>, root);