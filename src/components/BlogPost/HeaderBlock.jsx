import React from "react";
import profile from './../../image/icons/Profile picture.png'
import icons from './../../image/icons/iconn.png'

function HeaderBlock() {
    return(
        <div className="step__block">
            <div className="step__block-inside">
                <div className="step__with-picture">
                    <img src={profile} alt="Картинка:(" className="step__img" />
                        <div className="step__block-description-header">
                        <p className="step__name">
                            Andrew Jonson
                        </p>
                        <p className="step__data">
                            Posted on 27th January 2022
                        </p>
                    </div>
                </div>
                <div className="step__description-block">
                    <h2 className="step__header">
                        Step-by-step guide to choosing great font pairs
                    </h2>
                </div>
                <div className="step__icons">
                    <img src={icons} alt="Картинка:(" className= "step__img-icon" />
                    <p className="step__icon-description">
                        Startup
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HeaderBlock