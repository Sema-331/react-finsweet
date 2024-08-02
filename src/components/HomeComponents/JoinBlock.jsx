import React from "react";
import { NavLink } from "react-router-dom";

function JoinBlock() {
    return(
        <div className="join__block">
            <h2 className="join__header">
                Join our team to be a part of our story
            </h2>
            <p className="join__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
            <div className="join__block-btn">
                <NavLink to='/About'>
                    <button className="join__btn">

                        Join Now

                    </button>
                </NavLink>
            </div>
        </div>
    )
}

export default JoinBlock