import React from "react";
import { blockInfo } from "./AuthorInfo";
import AuthorComponents from "./AuthorComponents";

function AuthorMainBlock() {
    return(
        <>
            {blockInfo.map((item, index) => <AuthorComponents id={index} img={item.img} name={item.name} title={item.tittle} /> )}
        </>
    )
}

export default AuthorMainBlock