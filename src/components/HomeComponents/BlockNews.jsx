import React from "react";
import ButtonHome from "./buttonHome";
import white from './../../image/mainImage/white-concrete-building-1838640.png'

function BlockNews() {
    return(
        <div className= "main__blocks-news">
            <img src= {white} alt="Картинка:(" className="post__img" />
            <p className="post__left-block-description">
                By <a href = "#" className= "post__left-block-link"> John Doe </a>  May 23, 2022
            </p>
            <h2 className="post__left-block-header">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
            </h2>
            <p className="post__left-block-description-second">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            <ButtonHome />
        </div>
    )
}

export default BlockNews