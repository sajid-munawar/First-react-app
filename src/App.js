import React from "react"
import "./Hello.css"
import "./new.js"
import Student from "./new.js"
import "./another.css"
// import ReacrDom from "react-dom"

// import App from "./app"

function App() {
    return <div className="myName">
        Hello world from Sajid!
        <div className="newColor">
        <Student />
        </div>
        </div>
}
export default App;