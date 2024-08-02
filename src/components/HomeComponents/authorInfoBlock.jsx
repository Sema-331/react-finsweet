import React from "react";
import ListBoxIconsFails from "./listBoxIconsFail";

function AuthorInfoBlock(props) {
    return(
        <li className="author__list-item" tabindex="0" >
            <div className="author__list-block">
                <img src={props.img} alt="Картинка:(" className="author__img" />
                <h3 className="author__list-block-header">
                    {props.head}
                </h3>
                <a href = "#" className="author__block-description">
                    {props.company}
                </a>
                <ul className="author__block-img">
                    <ListBoxIconsFails />
                </ul>
            </div>
        </li>
    )
}

export default AuthorInfoBlock