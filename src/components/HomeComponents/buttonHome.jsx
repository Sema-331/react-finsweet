import React from "react";
import { NavLink } from "react-router-dom";

function ButtonHome() {
    return(
        <NavLink to= '/Blog'>
            <button className="more__btn-tab">
                Read More 
            </button>
        </NavLink>
    )
}

export default ButtonHome