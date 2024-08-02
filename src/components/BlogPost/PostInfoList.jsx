import React from "react";

function PostInfoList(props) {
    return(
        <li className="read__list-item">
            <img src={props.img} alt="Картинка:(" className="read__img" />
            <p className="read__list-item-description">
                By <span>John Doe</span>   l   Aug 23, 2021 
            </p>
            <h2 className="read__header-list-item">
                {props.header} 
            </h2>
            <p className="read__list-item-description-end">
                {props.description}
            </p>
        </li>
    )
}

export default PostInfoList