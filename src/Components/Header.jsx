import React from "react"
import logo192 from "../images/logo192.png"
import '../css/styles.css'

const Header = () => {
    return (
        <div className="nav-header">
            < img className="nav-img" src={logo192} alt=""/>
            <h1 className="nav-title">React Facts</h1>
        </div>
    )
}

export default Header