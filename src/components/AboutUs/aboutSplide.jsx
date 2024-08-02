import React from "react";
import AuthorMainBlock from "./AuthorMainBlock";
import yellow from './../../image/mainImage/man-in-yellow-button-up-shirt-wearing-black-framed-eyeglasses-7562313.png'
import white from './../../image/mainImage/woman-in-white-and-black-striped-shirt-wearing-black-sunglasses-3671083.png'
import fashion from './../../image/mainImage/fashion-woman-cute-shoes-5704849.png'
import content from './../../image/mainImage/content-baker-with-delicious-puff-in-cafeteria-6205509.png'
import china from './../../image/mainImage/china.png'
import woman from './../../image/mainImage/woman.png'
import yellowFlower from './../../image/mainImage/content-unshaven-man-covering-eye-with-yellow-flower-5262459.png'
import young from './../../image/mainImage/cheerful-young-ethnic-male-millennial-standing-near-stone-wall-and-smiling-6147118.png'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import ListBoxIconsFails from "../HomeComponents/listBoxIconsFail";

function AboutSplide() {
    return(
        <>
            <div className="splide__slider">
                    <Splide aria-label="My Favorite Images">
                              <SplideSlide>
                              <li className="author__list-item author__list-item-list author__list-item-about" tabindex="0">
                            <div className="author__list-block">
                                <img src={yellow} alt="Картинка:(" className="author__img" />
                                <h3 className="author__list-block-header">
                                    Floyd Miles
                                </h3>
                                <a href="#" className="author__block-description">
                                    Content Writer @Company
                                </a>
                                <ul className="author__block-img">
                                    <ListBoxIconsFails />
                                </ul>
                            </div>
                        </li>
                              </SplideSlide>
                              <SplideSlide>
                              <li className="author__list-item author__list-item-list author__list-item-about" tabindex="0">
                            <div className="author__list-block">
                                <img src={white} alt="Картинка:(" className="author__img" />
                                <h3 className="author__list-block-header">
                                    Dianne Russell
                                </h3>
                                <a href="#" className="author__block-description">
                                    Content Writer @Company
                                </a>
                                <ul className="author__block-img">
                                    <ListBoxIconsFails />
                                </ul>
                            </div>
                        </li>
                              </SplideSlide>
                              <SplideSlide>
                              <li className="author__list-item author__list-item-list author__list-item-about" tabindex="0">
                            <div className="author__list-block">
                                <img src={fashion} alt="Картинка:(" className="author__img" />
                                <h3 className="author__list-block-header">
                                Jenny Wilson
                                </h3>
                                <a href="#" className="author__block-description">
                                    Content Writer @Company
                                </a>
                                <ul className="author__block-img">
                                    <ListBoxIconsFails />
                                </ul>
                            </div>
                        </li>
                              </SplideSlide>
                              <SplideSlide>
                              <li className="author__list-item author__list-item-list author__list-item-about" tabindex="0">
                            <div className="author__list-block">
                                <img src={content} alt="Картинка:(" className="author__img" />
                                <h3 className="author__list-block-header">
                                Leslie Alexander
                                </h3>
                                <a href="#" className="author__block-description">
                                    Content Writer @Company
                                </a>
                                <ul className="author__block-img">
                                    <ListBoxIconsFails />
                                </ul>
                            </div>
                        </li>
                              </SplideSlide>
                              <SplideSlide>
                              <li className="author__list-item author__list-item-list author__list-item-about" tabindex="0">
                            <div className="author__list-block">
                                <img src={china} alt="Картинка:(" className="author__img" />
                                <h3 className="author__list-block-header">
                                Guy Hawkins
                                </h3>
                                <a href="#" className="author__block-description">
                                    Content Writer @Company
                                </a>
                                <ul className="author__block-img">
                                    <ListBoxIconsFails />
                                </ul>
                            </div>
                        </li>
                              </SplideSlide>
                              <SplideSlide>
                              <li className="author__list-item author__list-item-list author__list-item-about" tabindex="0">
                            <div className="author__list-block">
                                <img src={woman} alt="Картинка:(" className="author__img" />
                                <h3 className="author__list-block-header">
                                Eleanor Pena
                                </h3>
                                <a href="#" className="author__block-description">
                                    Content Writer @Company
                                </a>
                                <ul className="author__block-img">
                                    <ListBoxIconsFails />
                                </ul>
                            </div>
                        </li>
                              </SplideSlide>
                              <SplideSlide>
                              <li className="author__list-item author__list-item-list author__list-item-about" tabindex="0">
                            <div className="author__list-block">
                                <img src={yellowFlower} alt="Картинка:(" className="author__img" />
                                <h3 className="author__list-block-header">
                                Robert Fox
                                </h3>
                                <a href="#" className="author__block-description">
                                    Content Writer @Company
                                </a>
                                <ul className="author__block-img">
                                    <ListBoxIconsFails />
                                </ul>
                            </div>
                        </li>
                              </SplideSlide>
                              <SplideSlide>
                              <li className="author__list-item author__list-item-list author__list-item-about" tabindex="0">
                            <div className="author__list-block">
                                <img src={young} alt="Картинка:(" className="author__img" />
                                <h3 className="author__list-block-header">
                                Jacob Jones
                                </h3>
                                <a href="#" className="author__block-description">
                                    Content Writer @Company
                                </a>
                                <ul className="author__block-img">
                                    <ListBoxIconsFails />
                                </ul>
                            </div>
                        </li>
                              </SplideSlide>
                            </Splide>
            </div>
        </>
    )
}

export default AboutSplide