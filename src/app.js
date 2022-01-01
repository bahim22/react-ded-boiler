import React from "react"
import Black from "./black"
import './App.css'

function App() {
    return (
    <>
      <div className="App">
        <NavBar />
      </div>
      <div>
        <ScrollMod />
      </div>
        <Black />
    </>
    )
}

export default App

/*
export const Date = {new Date().toDateString()}

export const name = "DED Rxt Pro"

export const siteTitle = "Dionysus Era RxtWp"
*/
