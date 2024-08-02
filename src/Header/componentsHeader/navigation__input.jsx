import React from "react";
import ClearButton from "./clearButton";

function Navigation__input() {
    return (
        <div className="navigation__input">
            <ClearButton />
            <input type="text" placeholder="Поиск" id = "mySearch" />
        </div>
    )
}

export default Navigation__input