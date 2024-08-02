import React from "react";
import ButtonHome from "./../HomeComponents/buttonHome";

function MoreBlock() {
    return(
        <div className="container">
            <div className="more__block">
                <p className="more__description">
                    Posted on <b>startup</b>
                </p>
                <h1 className="more__header">
                    Step-by-step guide to choosing great font pairs
                </h1>
                <p className="more__description-second-block">
                    By <a href = "#" className="more__link-item" >James West</a>  |  May 23, 2022 
                </p>
                <p className="more__description-third-block">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                </p>
                <form action="file:///C:/Users/%D0%A1%D0%B5%D0%BC%D0%B5%D0%BD/Desktop/%D0%9C%D0%B0%D0%BA%D0%B5%D1%82%20%D1%84%D0%B8%D0%B3%D0%BC%D0%B0/blog.html" target="_blank">
                <ButtonHome />
            </form>
            </div>
        </div>
    )
}

export default MoreBlock