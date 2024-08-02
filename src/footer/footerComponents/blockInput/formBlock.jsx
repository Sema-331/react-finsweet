import React, { useEffect, useRef, useState } from "react";

function Form() {

    //const [me, setMe] = useState('')
    //const wrap = useRef()
//
    //const changeInputFocus = () => {
    //    document.querySelector('.contact__form-label').classList.add('contact__form-label-active')
    //}
//
    //const changeInputBlur = () => {
    //    document.querySelector('.contact__form-label').classList.remove('contact__form-label-active')
//
    //}
    const changeInputBlur = () => {
        document.querySelector('.contact__form-label').style.color = '#fff'
        document.querySelector('.contact__form').style.border = '2px solid #fff'
    }

    const changeInputFocus = () => {
        document.querySelector('.contact__form').style.border = '2px solid #ffdd50'
        document.querySelector('.contact__form-label').style.color = '#ffdd50'
    }
//
    useEffect(() => {
       // document.addEventListener('valid', changeInputFocus)
        document.addEventListener('blur', changeInputBlur)
        document.addEventListener('focus', changeInputFocus)
        return () => {
           // document.removeEventListener('focus', changeInputFocus)
            document.removeEventListener('blur', changeInputBlur)
            document.addEventListener('focus', changeInputFocus)
        }
    })

    return(
        <>
        <form action="https://jsonplaceholder.typicode.com/posts" autocomplete method="post" className= "contact__form">
            <input required type="text" onBlur={changeInputBlur} onFocus={changeInputFocus} id="E-mail" name="E-mail" className= "contact__input" />
            <label className="contact__form-label">Email</label>
        </form>
        <button className="contact__btn-subscribe">
            Subscribe
        </button>
        </>
    )
}

export default Form