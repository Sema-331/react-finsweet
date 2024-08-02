import React from "react";
import { authorInfo } from "./authorInfo";
import AuthorInfoBlock from "./authorInfoBlock";

function AuthorInfoMain() {
    return(
        <>
            {authorInfo.map((item) => <AuthorInfoBlock key={item.id} img={item.img} company={item.company} head={item.head} />)}
        </>
    )
}

export default AuthorInfoMain