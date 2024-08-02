import React from "react";
import logo from './../../image/svg/logo.svg'

function LogoHeader() {
    return(
        <div className="navigation__logo" tabindex="0">
            <a href="/Home" className="navigation__link-logo">
                <img src = {logo} />
                </a>
            </div>
    )
}

export default LogoHeader