import React, { useEffect, useRef } from "react";
import ContactButton from "./ContactButton";

function ContactForm() {

    //const changeInput = (event) => {
    //    let a = document.querySelectorAll('.form__input')
    //    for (let key of a) {
    //        let g = key.event.target
    //    }
    //}
    //document.addEventListener('blur', changeInputSecond)
    //return () => {
    //document.removeEventListener('focus', changeInput)
    //document.removeEventListener('blur', changeInputSecond)
    //}
    

    return(
        <div className="contact-menu__block">
            <form action="https://jsonplaceholder.typicode.com/posts" autocomplete method="post" className= "formm">
                <div className="contact-menu__block-input">
                    <input required type="text" id="text" name="date" className= "form__input" />
                    <label  className="form__label"> Full Name</label>
                </div>
                <div className="contact-menu__block-input">
                    <input required type="text" id="E-mail" name="E-mail" className= "form__input" />
                    <label htmlFor="" className="form__label"> Your Email</label>
                </div>
                <div className="contact-menu__block-input">
                    <input required type="text" id = "list-box" className="form__input" />
                    <label htmlFor="" className="form__label">Query Related</label>
                </div>
                <select name="user_profile_color_1">
                    <option value="1">Синий</option>
                    <option value="2">Зеленый</option>
                    <option value="3">Желтый</option>
                    <option value="4">Красный</option>
                    <option value="5">Оранжевый</option>
                    <option value="6">Черный</option>
                  </select>
                  <textarea name="area" id="txt" cols="30" rows="10" placeholder="Message"></textarea>
            </form>
            <ContactButton />
        </div>
    )
}

export default ContactForm