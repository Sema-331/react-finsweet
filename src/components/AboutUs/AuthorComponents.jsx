import React from "react";
import ListBoxIconsFails from "../HomeComponents/listBoxIconsFail";

function AuthorComponents(props) {
    return(
        <li className="author__list-item author__list-item-list" tabindex="0">
            <div className="author__list-block">
                <img src={props.img} alt="Картинка:(" className="author__img" />
                <h3 className="author__list-block-header">
                    {props.name}
                </h3>
                <a href="#" className="author__block-description">
                    {props.title}
                </a>
                <ul className="author__block-img">
                    <ListBoxIconsFails />
                </ul>
            </div>
        </li>
    )
}

export default AuthorComponents