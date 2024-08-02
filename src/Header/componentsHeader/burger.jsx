import React, { useEffect, useState } from "react";
import { useRef } from "react";
import burger from './../../image/icons/burger-menu-svgrepo-com.svg'

function Burger() {
    const wrapBurger = useRef()
    useEffect(() => {
        document.addEventListener('click', burgerClick)
        return () => {
            document.removeEventListener('click', burgerClick)
        }
    }, )
    const burgerClick = (event) => {
        if (wrapBurger.current && wrapBurger.current.contains(event.target)) {
            document.querySelector('.menu').classList.add('burger_active')
        } else if ( wrapBurger.current && !wrapBurger.current.contains(event.target)) {
            document.querySelector('.menu').classList.remove('burger_active')
        }
    }

    return(
        <div id = "burger" className="burger">
            <button onClick={burgerClick} ref={wrapBurger} >  
                <img src= {burger} alt="" />
            </button>
        </div>
    )
}

export default Burger