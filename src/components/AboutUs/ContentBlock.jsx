import React from "react";

function ContentBlock() {
    return(
        <div className="content__block content__block-about-us">
            <div className="content__left-block">
                <p className="content__description-left-block">
                    ABOUT US
                </p>
                <h2 className="content__header-left-block">
                    We are a community of content writers who share their learnings
                </h2>
                <p className="content__description-left-block-second">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" className="content__more">
                    Read More 
                </a>
            </div>
            <div className="content__right-block">
                <p className="content__description-right-block">
                    OUR MISION
                </p>
                <h2 className="content__header-right-block">
                    Creating valuable content for creatives all around the world
                </h2>
                <p className="content__description-right-block-third">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <div className="content__right-block content__third-block">
                <p className="content__description-right-block content__description-right-block-inside">
                    OUR TEAM
                </p>
                <h2 className="content__header-right-block content__header-right-block-inside">
                    Creating valuable content for creatives all around the world
                </h2>
                <p className="content__description-right-block-third content__description-right-block-third-inside">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis voluptatibus velit error similique ipsa eos cum minima, nulla neque cupiditate molestiae minus iusto delectus ullam, earum id, sed temporibus quas.
                </p>
            </div>
        </div>
    )
}

export default ContentBlock