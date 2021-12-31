import React from "react"
import "./Form.css"

const Black = () => {
    return (
    <div className="body">
        <h2>Black </h2>
        <div>
            <input type="email" placeholder="Enter Email-id" />
            <input type="password" placeholder="Enter password" />
        </div>
        <button type="submit">Submit</button>
    </div>
    )
}

export default Black