import React from "react";
import FooterLogo from "./footerComponents/footerLogo";
import InputBlock from "./footerComponents/blockInput/inputBlock";
import { NavLink } from "react-router-dom";
import footer from './../image/svg/footerLogo.svg'

function Footer() {

    const activePage = 'navigation__item-link-active'
    const commonPage = 'navigation__item-link'

    return(
    <footer>
        <div className="container">
            <div className="contact">
                <div className="contact__block">
                    <div className="contact__block-img-footer">
                        <img src ={footer} className="contact__block-footer-logo" />
                    </div>
                    <nav className="contact__navigation">
                        <ul className= "contact__list-box">
                            <li className="contact__item">
                                <NavLink to='/Home' className={({isActive}) => {
                                return isActive ? activePage : commonPage
                            }}>
                                     Home 
                                </NavLink>
                            </li>
                            <li className="contact__item">
                                <NavLink to='/Blog'  className={({isActive}) => {
                                return isActive ? activePage : commonPage
                            }}>
                                     Blog
                                </NavLink>
                            </li>
                            <li className="contact__item">
                                <NavLink to='/About'  className={({isActive}) => {
                                return isActive ? activePage : commonPage
                            }}>
                                     About
                                </NavLink>
                            </li>
                            <li className="contact__item">
                                <NavLink to='/Contact'  className={({isActive}) => {
                                return isActive ? activePage : commonPage
                            }}>
                                     Contact
                                </NavLink>
                            </li>
                            <li className="contact__item">
                                <NavLink to='/Privacy policy'  className={({isActive}) => {
                                return isActive ? activePage : commonPage
                            }}>
                                    Privacy policy
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <InputBlock />
                <div className="contacts">
                    <div className="contacts__media">
                        <p className="contacts__description">
                            Finstreet 118 2561 Fintown
                        </p>
                        <a href="#" className="contacts__link">
                            Hello@finsweet.com  020 7993 2905
                        </a>
                    </div>
                    <div className="contacts__icons">
                        <ul className="contacts__icons-box">
                            <li className="contact__icons__item" tabindex="0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><g clip-path="url(#a)"><path fill="#6D6E76" d="M16 8a8 8 0 1 0-9.25 7.903v-5.59H4.719V8H6.75V6.237c0-2.005 1.194-3.112 3.022-3.112.875 0 1.79.156 1.79.156V5.25h-1.008c-.994 0-1.304.617-1.304 1.25V8h2.219l-.355 2.313H9.25v5.59A8.002 8.002 0 0 0 16 8Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>
                            </li>
                            <li className="contact__icons__item contact__icons__item-second" tabindex="0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="14" ><path fill="#6D6E76" d="M5.7 13.5c6.036 0 9.338-5.002 9.338-9.338 0-.14-.003-.285-.01-.425a6.665 6.665 0 0 0 1.638-1.7 6.472 6.472 0 0 1-1.884.516A3.3 3.3 0 0 0 16.225.738a6.598 6.598 0 0 1-2.083.796 3.287 3.287 0 0 0-5.596 2.993A9.323 9.323 0 0 1 1.78 1.1a3.286 3.286 0 0 0 1.016 4.38 3.287 3.287 0 0 1-1.487-.409v.04a3.281 3.281 0 0 0 2.634 3.22c-.483.132-.99.15-1.481.056a3.289 3.289 0 0 0 3.065 2.281 6.583 6.583 0 0 1-4.862 1.358 9.312 9.312 0 0 0 5.033 1.475Z"/></svg>
                            </li>
                            <li className="contact__icons__item contact__icons__item-third" tabindex="0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16"><g fill="#6D6E76" clip-path="url(#a)"><path d="M8.334 1.44c2.138 0 2.39.01 3.231.048.782.034 1.203.165 1.485.274.371.144.64.32.918.597.282.282.454.547.597.92.11.28.24.705.275 1.484.038.843.047 1.096.047 3.23 0 2.138-.01 2.391-.047 3.232-.034.781-.165 1.203-.275 1.484-.143.372-.319.641-.597.92a2.46 2.46 0 0 1-.918.596c-.282.11-.707.24-1.485.275-.843.037-1.097.047-3.231.047-2.138 0-2.39-.01-3.231-.047-.782-.034-1.203-.166-1.485-.275a2.472 2.472 0 0 1-.918-.597 2.46 2.46 0 0 1-.597-.919c-.11-.28-.24-.706-.275-1.484-.038-.844-.047-1.097-.047-3.231 0-2.138.01-2.39.047-3.231.034-.782.165-1.204.275-1.485.143-.372.318-.64.597-.919a2.46 2.46 0 0 1 .918-.597c.282-.109.707-.24 1.485-.274.84-.038 1.093-.047 3.231-.047Zm0-1.44C6.162 0 5.89.01 5.037.047c-.85.037-1.434.175-1.94.372a3.905 3.905 0 0 0-1.42.925 3.92 3.92 0 0 0-.924 1.415C.556 3.27.418 3.85.38 4.7.343 5.556.334 5.828.334 8c0 2.172.01 2.444.047 3.297.037.85.175 1.434.372 1.94.206.529.478.976.925 1.42.443.443.89.718 1.415.921.51.197 1.091.335 1.941.372.853.038 1.125.047 3.297.047s2.444-.01 3.297-.047c.85-.037 1.434-.175 1.94-.372a3.91 3.91 0 0 0 1.416-.922c.444-.444.719-.89.922-1.415.197-.51.334-1.091.372-1.941.037-.853.047-1.125.047-3.297s-.01-2.444-.047-3.297c-.038-.85-.175-1.434-.372-1.94a3.747 3.747 0 0 0-.916-1.422 3.91 3.91 0 0 0-1.415-.922c-.51-.197-1.091-.334-1.941-.372-.856-.04-1.128-.05-3.3-.05Z"/><path d="M8.334 3.89a4.11 4.11 0 0 0 0 8.22 4.11 4.11 0 0 0 0-8.22Zm0 6.776a2.666 2.666 0 1 1 0-5.332 2.666 2.666 0 0 1 0 5.332ZM13.565 3.728a.96.96 0 1 1-1.919 0 .96.96 0 0 1 1.92 0Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.334 0h16v16h-16z"/></clipPath></defs></svg>
                            </li>
                            <li className="contact__icons__item" tabindex="0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><g clip-path="url(#a)"><path fill="#6D6E76" d="M14.816 0H1.18C.528 0 0 .516 0 1.153v13.69A1.17 1.17 0 0 0 1.181 16h13.635c.653 0 1.184-.519 1.184-1.153V1.153C16 .516 15.469 0 14.816 0ZM4.746 13.634H2.373V5.997h2.375v7.637ZM3.56 4.956a1.376 1.376 0 1 1-.004-2.751 1.376 1.376 0 0 1 .004 2.751Zm10.075 8.678h-2.372V9.922c0-.885-.015-2.025-1.234-2.025-1.234 0-1.422.966-1.422 1.962v3.775H6.237V5.997h2.275V7.04h.032c.315-.6 1.09-1.235 2.243-1.235 2.404 0 2.847 1.582 2.847 3.638v4.19Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer