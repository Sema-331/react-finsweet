import React from "react";
import { infoBlock } from "./BlogInfo";
import BlogComponents from "./BlogComponents";

function BlogMainInfo() {
    return(
        <>
        {infoBlock.map((item) => <BlogComponents key={item.id} img={item.img} name={item.name} header={item.header} description={item.description} />)}
        </>
    )
}

export default BlogMainInfo