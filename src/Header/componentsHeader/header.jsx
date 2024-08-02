import React from "react";
import burger from './../image/icons/status = default.png'
import Search from "./componentsHeader/search";
import ClearButton from "./componentsHeader/clearButton";
import Navigation__input from "./componentsHeader/navigation__input";

function Header() {
    return(
        <header class = "header">
            <div class="container">
                <div class="navigation">
                    <div class = "mlm">
                        <Search />
                            <Navigation__input />
                    </div>
                    {/*<!--<div class="search">
                    <div class="icon">
                    </div>
                    <div class="input__block">
                      <input type="text" placeholder="Поиск" id="my__searsh">
                    </div>
                    <div></div>
                    <div class="clear">
                      <?xml version="1.0" ?><!DOCTYPE svg  PUBLIC '-//W3C//DTD SVG 1.1//EN'  'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'><svg class = "curs" enable-background="new 0 0 128 128" height="128px" id="Layer_1" version="1.1" viewBox="0 0 128 128" width="128px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><g><path d="M84.815,43.399c-0.781-0.782-2.047-0.782-2.828,0L64.032,61.356L46.077,43.399c-0.781-0.782-2.047-0.782-2.828,0    c-0.781,0.781-0.781,2.047,0,2.828l17.955,17.957L43.249,82.141c-0.781,0.78-0.781,2.047,0,2.828    c0.391,0.39,0.902,0.585,1.414,0.585s1.023-0.195,1.414-0.585l17.955-17.956l17.955,17.956c0.391,0.39,0.902,0.585,1.414,0.585    s1.023-0.195,1.414-0.585c0.781-0.781,0.781-2.048,0-2.828L66.86,64.184l17.955-17.957C85.597,45.447,85.597,44.18,84.815,43.399z     M64.032,14.054c-27.642,0-50.129,22.487-50.129,50.127c0.002,27.643,22.491,50.131,50.133,50.131    c27.639,0,50.125-22.489,50.125-50.131C114.161,36.541,91.674,14.054,64.032,14.054z M64.036,110.313h-0.002    c-25.435,0-46.129-20.695-46.131-46.131c0-25.435,20.693-46.127,46.129-46.127s46.129,20.693,46.129,46.127    C110.161,89.617,89.47,110.313,64.036,110.313z"/></g></g></svg>
                    </div>
    </div> -->*/}
                <div class="navigation__logo" tabindex="0">
                    <a href="#" class = "navigation__link-logo">
                        <svg xmlns="http://www.w3.org/2000/svg" width="140" height="29" ><g fill="#fff" clip-path="url(#a)"><path d="M139.752 21.656v3.464h-2.906c-3.101-.097-4.758-1.772-4.758-4.917V12.29h-2.029V9.25h2.029V5.849h4.288v3.367h3.279v3.03h-3.279v7.532c0 1.02.204 1.834 1.772 1.834l1.604.045ZM112.965 17.217v-.23a7.758 7.758 0 0 1 4.472-7.382 7.752 7.752 0 0 1 2.945-.718h.62c4.049 0 7.602 2.357 7.602 7.975v1.196h-11.253c.115 2.588 1.515 4.05 3.872 4.05 2.029 0 2.977-.886 3.252-2.18h4.05c-.497 3.376-3.19 5.254-7.452 5.254-4.679-.035-8.108-2.994-8.108-7.965Zm11.422-1.87c-.151-2.357-1.338-3.491-3.403-3.491s-3.252 1.276-3.544 3.49h6.947ZM95.457 17.217v-.23a7.751 7.751 0 0 1 7.399-8.1h.62c4.05 0 7.612 2.357 7.612 7.975v1.196H99.843c.115 2.588 1.516 4.05 3.873 4.05 2.029 0 2.977-.886 3.251-2.18h4.05c-.505 3.376-3.199 5.254-7.461 5.254-4.67-.035-8.099-2.994-8.099-7.965Zm11.422-1.87c-.151-2.357-1.338-3.491-3.403-3.491-2.064 0-3.216 1.311-3.544 3.482l6.947.009ZM70.887 9.215h4.536l2.774 10.509 3.04-10.509h3.543l2.747 10.509 2.924-10.509h4.156L89.68 24.828h-4.253l-2.658-9.8-2.844 9.8h-4.307L70.887 9.215ZM56.469 19.919h4.05c.185 1.409.885 2.215 2.746 2.215 1.666 0 2.437-.629 2.437-1.701s-.886-1.524-3.155-1.843c-4.155-.63-5.76-1.825-5.76-4.874 0-3.252 2.978-4.864 6.203-4.864 3.465 0 6.079 1.258 6.45 4.847h-3.995a2.11 2.11 0 0 0-2.313-1.905h-.133c-1.4 0-2.215.655-2.215 1.612 0 .957.753 1.374 3.04 1.701 3.88.585 6.051 1.569 6.051 4.91 0 3.34-2.454 5.13-6.566 5.13-4.111 0-6.725-1.852-6.84-5.228ZM39.262 9.215h4.288v2.472a5.37 5.37 0 0 1 5.06-2.835c3.04 0 5.245 1.852 5.245 6.078v9.933H49.62v-9.312c0-2.118-.824-3.128-2.738-3.128a3.083 3.083 0 0 0-3.34 2.818 2.423 2.423 0 0 0 0 .567v9.02h-4.28V9.215ZM30.986 5.29a2.162 2.162 0 1 1 2.233 2.082h-.08a2.02 2.02 0 0 1-2.144-1.896 1.3 1.3 0 0 1-.01-.186Zm0 3.925h4.333v15.613h-4.316l-.017-15.613ZM14.656 3.491h13.699v3.784h-8.86v5.644h7.017v3.642h-7.027v8.267h-4.829V3.49ZM6.389 10.473c0 1.338 0 2.969-1.843 3.633 1.887.647 1.843 2.02 1.843 3.456v5.316c0 1.01.407 1.622 1.134 1.773.16.053.328.078.496.07h1.772v3.545H6.867c-3.119 0-4.838-1.772-4.838-5.06v-6.29A1.294 1.294 0 0 0 .762 15.71H0V12.6h.762a1.285 1.285 0 0 0 1.267-1.24V4.98C2.03 1.746 3.713 0 6.867 0h2.95v3.491H8.047c-.169 0-.336.028-.497.08-.726.186-1.134.788-1.134 1.772l-.026 5.13Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h140v28.354H0z"/></clipPath></defs></svg></a>
                </div>
                <div class = "navigation__block-list">
                    <ul class = "navigation__list-box">
                        <li class="navigation__item">
                            <a href="Untitled-1.html" class = "navigation__item-link"> Home </a>
                        </li> 
                        <li class="navigation__item">
                            <a href="blog.html" class = "navigation__item-link"> Blog </a>
                        </li>
                        <li class="navigation__item">
                            <a href="about-us.html" class = "navigation__item-link"> About Us </a>
                        </li>
                        <li class="navigation__item navigation__item-last">
                            <a href="contact.html" class = "navigation__item-link"> Contact Us </a>
                        </li>
                    </ul>
                    <div class = "navigation__block-btn">
                        <button class = "navigation__btn">
                            Subscribe
                        </button>
                    </div>
                </div>
                <div id = "burger" class = "burger">
                    <button>
                        <img src= {burger} alt="" />
                    </button>
                </div>
            </div>
        </div>
        <div id = "menu" class = "menu ">
            <div class = "menu__closest">
            <button class = "burger__close menu__close">
                <img src="352270_close_icon.png" alt="" />
            </button>
        </div>
            <ul class = "list-box-header-burger">
                <li class = "list-item-burger">
                   <a href="Untitled-1.html">Home</a> 
                </li>
                <li class = "list-item-burger">
                <a href="blog.html">Blog</a> 
                </li>
                <li class = "list-item-burger">
                <a href="about-us.html">About Us</a> 
                </li>
                <li class = "list-item-burger">
                <a href="contact.html">Contact Us</a> 
                </li>
            </ul>
        </div>
    </header>
    )
}

export default Header