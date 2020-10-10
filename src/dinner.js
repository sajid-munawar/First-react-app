import React from "react"

function Dinner(props) {
    return (
        <div>
    <h1>Today we are surving {props.dishName} </h1>
    <hr/>
    
    <h1>Today we are surving {props.dishName2} </h1>
    <hr/>
    <h1>Today we are surving {props.dishName1} </h1>
    </div>
    )
}
export default Dinner;