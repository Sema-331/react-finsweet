import React from "react";


function FooterLogo(props) {
    return(
        <div className="contact__logo" tabindex="0">
            <a href="#" className= "contact__link-logo">
                <img scr={props.footer} />
            </a>
        </div>
    )
}

export default FooterLogo