import React from "react";
import './Header.css'
import logo from '../../logo.png'

const Header = props => {
    return (
    <div className="header">
        <img className="logo" src={logo}></img>
    </div>
    )
}

export default Header;