import React from "react";
import white from './../../image/mainImage/man-in-white-dress-shirt-sitting-on-black-rolling-chair-while-facing-black-computer-set-and-smiling-840996.png'
import ListBox from "../HomeComponents/listBox";
import JoinBlock from "../HomeComponents/JoinBlock";
import BlogMainInfo from "./BlogMainInfo";
import BlogButtons from "./BlogButtons";
import { NavLink } from "react-router-dom";

function Blog() {
    return(
        <main className="main">
        <section className="page">
            <div className="container">
                <div className= "page__block-img">
                    <div className="page__block">
                        <p className="page__description">
                            Posted on <b>startup</b>
                        </p>
                        <h1 className="page__header">
                            Step-by-step guide to choosing great font pairs
                        </h1>
                        <p className="page__description-second-block">
                            By <a href = "#" className="page__link-item" >James West</a>  |  May 23, 2022 
                        </p>
                        <p className="page__description-third-block">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                        </p>
                        <div className= "page__btn-block">
                            <NavLink to='/Blog/:id'>
                                <button className="page__btn-tab">
                                
                                    Read More 
                                 
                                </button>
                            </NavLink>
                        </div>
                    </div>
                    <div className="page__block-with-img">
                        <img src={white} alt="Картинка:(" />
                    </div>
                </div>
            </div>
        </section>
        <section className="full">
            <div className="container">
                <div className="full__block">
                    <h2 className="full__header">
                        <a href = "#" id = "first"> All Posts</a>
                    </h2>
                    <div className="full__block-news">
                        <BlogMainInfo />
                    </div>
                    <BlogButtons />
                </div>
            </div>
        </section>
        <section className= "category">
            <div className="container">
                <div className="category__block">
                    <h2 className= "category__header-title"> Choose A Category </h2>
                    <ul className="category__list-box">
                       <ListBox />
                    </ul>
                </div>
            </div>
        </section>
        <section className="join">
            <div className="container">
                <JoinBlock />
            </div>
        </section>
    </main>
    )
}

export default Blog