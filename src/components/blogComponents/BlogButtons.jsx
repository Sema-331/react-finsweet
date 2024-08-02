import React from "react";
import { NavLink } from "react-router-dom";

function BlogButtons() {
    return(
        <div className="full__block-btn">
            <NavLink to='/Home' className= "a__href">
            <button className="full__btn-prev">
                
                 Prev 
            </button>
            </NavLink>
            <NavLink to='/Blog/:id' className= "a__href">
                <button className="full__btn-next">
                    Next 
                </button>
            </NavLink>
        </div>
    )
}

export default BlogButtons