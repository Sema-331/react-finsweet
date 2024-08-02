import React from "react";
import { logoPartner } from "./companyInfoBox";
import InfoBoxItem from "./infoBoxItem";

function MainInfoBox() {
    return(
        <>
            {logoPartner.map((item, index) => <InfoBoxItem img={item.img} key = {index} />)}
        </>
    )
}

export default MainInfoBox