import React, { useEffect, useState } from "react";
import '@splidejs/react-splide/css';
import ContentBlock from "./ContentBlock";
import groundGroup from './../../image/mainImage/ground-group-growth-hands-461049.png'
import persons from './../../image/mainImage/three-persons-sitting-on-the-stairs-talking-with-each-other-1438072.png'
import AuthorMainBlock from "./AuthorMainBlock";
import JoinBlock from "../HomeComponents/JoinBlock";
import './../../styles/main.css'
import { gsap } from "gsap";
import HiddenAuthor from "./hiddenAuthor";
import AboutSplide from "./aboutSplide";


function AboutUs() {

    const {width, height} = HiddenAuthor()
    console.log(width, height)

    const [change, setChange] = useState('lorem')
    const [secondChange, setSecondChange] = useState('lorem')

    //useEffect(() => {
    //    if (width < 1540) {
    //        let a = document.querySelectorAll('.author__list-item-list')
    //        for (let key of a) {
    //            key.style.display = 'none'
    //        }
    //        let b = document.querySelector('.author__list-box-list')
    //    }
    //})

    useEffect(() => {
       if (change === 'lorem__is-active') {
        document.querySelector('.technologies__blocks').classList.add('mains__first')
        document.querySelector('.lorem').classList.add('lorem__is-active')
       } else {
        document.querySelector('.technologies__blocks').classList.remove('mains__first')
        document.querySelector('.lorem').classList.remove('lorem__is-active')
       }
    }, [change] )

    const btnChange = () => {
        setChange((currentValue) => {
        return currentValue === 'lorem' ? 'lorem__is-active' : 'lorem'
        })
    }


    useEffect(() => {
       if (secondChange === 'lorem__is-active') {
        document.querySelector('.technologies__blocks-second').classList.add('mains__first')
        document.querySelector('.lorem__second').classList.add('lorem__is-active')
       } else {
        document.querySelector('.technologies__blocks-second').classList.remove('mains__first')
        document.querySelector('.lorem__second').classList.remove('lorem__is-active')
       }
    }, [secondChange] )

    const btnChangeSecond = () => {
        setSecondChange((currentValue) => {
        return currentValue === 'lorem__second' ? 'lorem__is-active' : 'lorem__second'
        })
    }

    return(
        <main>
        <section className="team">
            <div className="container">
                <div className="team__block">
                    <div className="team__block-outside">
                        <div className="team__block-description-header">
                            <p className="team__description">
                                ABOUT US
                            </p>
                            <h2 className="team__header">
                                We are a team of content writers who share their learnings
                            </h2>
                        </div>
                        <div className="team__block-full-description">
                            <p className="team__description-right">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                    </div>
                    <div className="team__block-picture">
                        <div className="team__block-statistics">
                            <div className="team__block-statistics-first team__block-statistics-first-content">
                                <p className="team__statistics-description">
                                    12+ 
                                </p>
                                <p className="team__statistics-description-end">
                                    Blogs Published
                                </p>
                            </div>
                            <div className="team__block-statistics-first">
                                <p className="team__statistics-description">
                                    18K+ 
                                </p>
                                <p className="team__statistics-description-end">
                                    Views on Finsweet
                                </p>
                            </div>
                            <div className="team__block-statistics-first">
                                <p className="team__statistics-description">
                                    30K+ 
                                </p>
                                <p className="team__statistics-description-end">
                                    Total active Users
                                </p>
                            </div>
                        </div>
                        <div className="team__block-colors">
                            <div className="team__block-purple">

                            </div>
                            <div className="team__block-yellow">

                            </div>
                        </div>
                    </div>
                    <ContentBlock />
                </div>
            </div>
        </section>
        <section className="creat">
            <div className="container">
                <div className="creat__block">
                    <div className="creat__block-description">
                        <h2 className="creat__header">
                            Our team of creatives
                        </h2>
                        <p className="creat__description-middle">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                        </p>
                        <p className="creat__description-end">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
                        </p>
                        <div class="technologies__blocks" onClick={btnChange}></div>
                        <p class="lorem">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero dolorem molestias magnam eius eum aspernatur recusandae soluta aut corporis vero reprehenderit dolore, non quasi? Optio distinctio earum culpa porro illum!
                    Fuga dolorem esse culpa sed voluptatibus repellat aliquam ex molestias nam cupiditate deserunt nesciunt nemo cumque ullam, velit dicta et placeat consequatur totam inventore iure rem vero error minus? Consequuntur!</p>
                    </div>
                    <div className="creat__block-img">
                        <img src={groundGroup} alt="Картинка:(" className= "creat__img" />
                    </div>
                </div>
            </div>
        </section>
        <section className="started">
            <div className="container">
                <div className="started__block">
                    <div className="started__block-picture">
                        <img src={persons} alt="Картинка:(" className= "started__img" />
                    </div>
                    <div className="started__block-description">
                        <h2 className="started__header">
                            Why we started this Blog
                        </h2>
                        <p className="started__description-middle">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                        </p>
                        <p className="started__description-end">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.
                        </p>
                        <div class="technologies__blocks-second" onClick={btnChangeSecond}></div>
                        <p class="lorem__second">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero dolorem molestias magnam eius eum aspernatur recusandae soluta aut corporis vero reprehenderit dolore, non quasi? Optio distinctio earum culpa porro illum!
                    Fuga dolorem esse culpa sed voluptatibus repellat aliquam ex molestias nam cupiditate deserunt nesciunt nemo cumque ullam, velit dicta et placeat consequatur totam inventore iure rem vero error minus? Consequuntur!</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="list">
            <div className="container">
                <div className="list__block">
                    <h2 className="list__header" id = "author">
                        List of Authors
                    </h2>
                    <ul className="author__list-box author__list-box-list">
                        { width > 1540 ? <AuthorMainBlock /> : <AboutSplide /> }
                    </ul>
                </div>
            </div>
        </section>
        <section className="join">
            <div className="container">
            <div className="join__block">
            <h2 className="join__header">
                Join our team to be a part of our story
            </h2>
            <p className="join__description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
            </p>
            <div className="join__block-btn">
                    <button className="join__btn">

                        Join Now

                    </button>
            </div>
        </div>
            </div>
        </section>
    </main>
    )
}

export default AboutUs