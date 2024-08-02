import React from "react";

function InfoBoxItem(props) {
    return(
        <li className="company__list-item company__list-item-first">
            <img src={props.img} alt="Картинка" />
        </li>
    )
}

export default InfoBoxItem