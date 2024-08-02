import React from "react";
import { a } from './iconSource'
import ListBoxIcons from "./listBoxIcons";

function ListBoxIconsFails() {
    return(
        <>
            {a.map((item, index) => <ListBoxIcons key={index} img={item.img} /> )}
        </>
    )
}

export default ListBoxIconsFails