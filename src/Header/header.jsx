import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Search from "./componentsHeader/search";
import Navigation__input from "./componentsHeader/navigation__input";
import LogoHeader from "./componentsHeader/logo";
import Burger from "./componentsHeader/burger";
import { NavLink } from "react-router-dom";
import cross from  './../image/icons/cross_114275.svg';
import soon from './../image/svg/sun-day-weather-symbol_icon-icons.com_73146 (1).svg';
import moon from './../image/svg/moon-phase-outline_icon-icons.com_73483.svg';

function Header() {

    const useTheme = () => {
        const [change, setChange] = useState( localStorage.getItem('app-theme') || 'light')
        useLayoutEffect(() => {
            localStorage.setItem('app-theme', change)
            document.documentElement.setAttribute('data-theme', change)
        }, [change])
        return {change, setChange}
    }
    const {change, setChange} = useTheme()
    const handleChangeTheme = () => {
        setChange(change === 'dark' ? 'light' : 'dark')
        if ( change === 'light' ) {
            document.querySelector('.navigation__toggle-theme').classList.add('navigation__toggle-theme-active')
        } else if (change === 'dark') {
            document.querySelector('.navigation__toggle-theme').classList.remove('navigation__toggle-theme-active')
        }
    }
      
    // Предотвращение скролла
    //useEffect(() => {
    //    let a = document.querySelector('.menu')
    //    if ( a.matches('.menu.burger_active')) {
    //        document.querySelector('#root').classList.add('body__fixed')
    //    } else {
    //        document.querySelector('#root').classList.remove('body__fixed')
    //    }
    //})

    //const handleChangeDocument = () => {
    //    //const storage = localStorage.getItem('handleChangeDocument') === 'true'
    //    document.body.classList.toggle('body__dark')
    //    const a = document.querySelectorAll('.post__right-block-first')
    //    for (let key of a) {
    //        key.classList.toggle('post__right-block-first-dark')
    //    }
    //    const b = document.querySelectorAll('.post__right-block-description')
    //    for (let key of b) {
    //        key.classList.toggle('post__right-block-description-dark')
    //    }
    //    const c = document.querySelectorAll('.post__rigth-block-inside')
    //    for (let key of c) {
    //        key.classList.toggle('post__right-block-inside-dark')
    //    }
    //    document.querySelector('.navigation__toggle-theme').classList.toggle('navigation__toggle-theme-active')
    //    document.querySelector('.post__left-block-description').classList.toggle('post__left-block-description-dark')
    //    document.querySelector('.post__left-block-header').classList.toggle('post__left-block-header-dark')
    //    document.querySelector('.main__blocks-news').classList.toggle('main__blocks-news-dark')
    //    document.querySelector('.content__block').classList.toggle('content__block-dark')
    //    document.querySelector('.content__description-left-block').classList.toggle('content__description-left-block-dark')
    //    document.querySelector('.content__header-left-block').classList.toggle('content__header-left-block-dark')
    //    document.querySelector('.content__description-left-block-second').classList.toggle('content__description-left-block-second-dark')
    //    document.querySelector('.content__more').classList.toggle('content__more-dark')
    //    document.querySelector('.content__description-right-block').classList.toggle('content__description-right-block-dark')
    //    document.querySelector('.content__header-right-block').classList.toggle('content__header-right-block-dark')
    //    document.querySelector('.content__description-right-block-third').classList.toggle('content__description-right-block-third-dark')
    //    document.querySelector('.content__description-right-block-third-inside').classList.toggle('content__description-right-block-third-inside-dark')
    //    document.querySelector('.content__header-right-block-inside').classList.toggle('content__header-right-block-inside-dark')
//
    //}

    //useEffect(() => {
    //    document.querySelector('.navigation__toggle-theme').addEventListener('click', handleChangeDocument)
    //}, ['navigation__toggle-theme'])

    const activePage = 'navigation__item-link-active'
    const commonPage = 'navigation__item-link'

    return(
        <header className="header">
            <div className="container">
                <div className="navigation">
                    <div className = "mlm">
                        <Search />
                            <Navigation__input />
                    </div>
                    {/*<!--<div className="search">
                    <div className="icon">
                    </div>
                    <div className="input__block">
                      <input type="text" placeholder="Поиск" id="my__searsh">
                    </div>
                    <div></div>
                    <div className="clear">
                      <?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg className="curs" enable-background="new 0 0 128 128" height="128px" id="Layer_1" version="1.1" viewBox="0 0 128 128" width="128px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><g><path d="M84.815,43.399c-0.781-0.782-2.047-0.782-2.828,0L64.032,61.356L46.077,43.399c-0.781-0.782-2.047-0.782-2.828,0    c-0.781,0.781-0.781,2.047,0,2.828l17.955,17.957L43.249,82.141c-0.781,0.78-0.781,2.047,0,2.828    c0.391,0.39,0.902,0.585,1.414,0.585s1.023-0.195,1.414-0.585l17.955-17.956l17.955,17.956c0.391,0.39,0.902,0.585,1.414,0.585    s1.023-0.195,1.414-0.585c0.781-0.781,0.781-2.048,0-2.828L66.86,64.184l17.955-17.957C85.597,45.447,85.597,44.18,84.815,43.399z     M64.032,14.054c-27.642,0-50.129,22.487-50.129,50.127c0.002,27.643,22.491,50.131,50.133,50.131    c27.639,0,50.125-22.489,50.125-50.131C114.161,36.541,91.674,14.054,64.032,14.054z M64.036,110.313h-0.002    c-25.435,0-46.129-20.695-46.131-46.131c0-25.435,20.693-46.127,46.129-46.127s46.129,20.693,46.129,46.127    C110.161,89.617,89.47,110.313,64.036,110.313z"/></g></g></svg>
                    </div>
    </div> -->*/}<NavLink to='/Home'>
                    <LogoHeader />
                </NavLink>
                <div className="navigation__block-list">
                    <ul className="navigation__list-box">
                        <li className="navigation__item">
                            <NavLink className={({isActive}) => {
                                return isActive ? activePage : commonPage
                            }} to='/Home'>
                                 Home 
                            </NavLink>
                        </li> 
                        <li className="navigation__item">
                            <NavLink className={({isActive}) => {
                                return isActive ? activePage : commonPage
                            }} to='/Blog'>  
                                Blog 
                            </NavLink>
                        </li>
                        <li className="navigation__item">
                            <NavLink className={({isActive}) => {
                                return isActive ? activePage : commonPage
                            }} to='/About'>
                                About Us 
                            </NavLink>
                        </li>
                        <li className="navigation__item navigation__item-last">
                            <NavLink className={({isActive}) => {
                                return isActive ? activePage : commonPage
                            }} to='/Contact' > 
                                Contact Us 
                            </NavLink>
                        </li>
                    </ul>
                    <div className="navigation__block-btn">
                        <button className="navigation__btn">
                            Subscribe
                        </button>
                        <button className="navigation__toggle-theme" onClick={handleChangeTheme}>
                            <img src={soon} className="navigation__toggle-theme-img-first" alt="Картинка" />
                            <img src={moon} className="navigation__toggle-theme-img-second" alt="" />
                        </button>
                    </div>
                </div>
                <Burger />
            </div>
        </div>
        <div id = "menu" className="menu ">
            <div className="menu__closest">
            <button className="burger__close menu__close">
                <img src={cross} />
            </button>
        </div>
            <ul className="list-box-header-burger">
                <li className="list-item-burger">
                    <NavLink className={({isActive}) => {
                        return isActive ? activePage : commonPage
                    }} to='/Home'>
                         Home 
                    </NavLink> 
                </li>
                <li className="list-item-burger">
                    <NavLink className={({isActive}) => {
                        return isActive ? activePage : commonPage
                    }} to='/Blog'>  
                        Blog 
                    </NavLink> 
                </li>
                <li className="list-item-burger">
                    <NavLink className={({isActive}) => {
                        return isActive ? activePage : commonPage
                    }} to='/About'>
                        About Us 
                    </NavLink> 
                </li>
                <li className="list-item-burger">
                    <NavLink className={({isActive}) => {
                        return isActive ? activePage : commonPage
                    }} to='/Contact' > 
                        Contact Us 
                    </NavLink> 
                </li>
            </ul>
        </div>
    </header>
    )
}

export default Header