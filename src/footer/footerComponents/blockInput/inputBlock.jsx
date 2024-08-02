import React from "react";
import Form from "./formBlock";

function InputBlock() {
    return(
        <div className="contact__area">
            <div className="contact__block-more">
                <h2 className="contact__header-text">
                    Subscribe to our news letter to get latest updates and news
                </h2>
                <Form />
            </div>
        </div>
    )
}

export default InputBlock