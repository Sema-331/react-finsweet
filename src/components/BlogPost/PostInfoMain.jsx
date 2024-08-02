import React from "react";
import { postInfo } from "./PostInfo";
import PostInfoList from "./PostInfoList";

function PostInfoMain() {
    return(
        <>
            {postInfo.map((item, index) => <PostInfoList key={index} img={item.img} header={item.header} description={item.description} />)}
        </>
    )
}

export default PostInfoMain