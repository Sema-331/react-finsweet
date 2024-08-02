import React from "react";

function BlogComponents(props) {
    return(
        <div className="full__block-news-more">
            <div className="full__block-img-picture">
                <img src={props.img} className= "full__img" alt="" />
            </div>
            <div className="full__block-description">
                <p className="full__description-txt">
                    {props.name}
                </p>
                <h2 className="full__header-inside">
                    {props.header}
                </h2>
                <p className="full__description-end">
                    {props.description}
                </p>
            </div>
        </div>
    )
}

export default BlogComponents