import React, { useEffect, useRef, useState } from "react";

import close__up from "./../image/mainImage/close-up-photography-of-man-wearing-sunglasses-1212984.png";
import profile from "./../image/icons/Profile picture.png";
import prev from "./../image/svg/prev.svg";
import next from "./../image/buttons/Next Button.png";
import yellow from "./../image/mainImage/man-in-yellow-button-up-shirt-wearing-black-framed-eyeglasses-7562313.png";
import woman from "./../image/mainImage/woman-in-white-and-black-striped-shirt-wearing-black-sunglasses-3671083.png";
import fashion from "./../image/mainImage/fashion-woman-cute-shoes-5704849.png";
import womanTwo from "./../image/mainImage/content-baker-with-delicious-puff-in-cafeteria-6205509.png";
import content from "./../image/mainImage/content.png";
import china from "./../image/mainImage/content.png";
import BlockNews from "./HomeComponents/BlockNews";
import MoreBlock from "./HomeComponents/moreBlock";
import BlockRigth from "./HomeComponents/BlockRigthnews";
import ListBox from "./HomeComponents/listBox";
import ListBoxIconsFails from "./HomeComponents/listBoxIconsFail";
import MainInfoBox from "./HomeComponents/mainInfoBox";
import JoinBlock from "./HomeComponents/JoinBlock";
import { NavLink } from "react-router-dom";
import { Modal } from "materialize-css";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import { Splide, SplideSlide } from "@splidejs/react-splide";

function HomePage() {
  const wrapRefBase = useRef();

  useEffect(() => {
    document.addEventListener("click", handelClickBase);
    return () => {
      document.removeEventListener("click", handelClickBase);
    };
  }, ["author__list-item", "author__list-block", "author__list-box"]);

  const handelClickBase = (event) => {
    if (wrapRefBase.current && wrapRefBase.current.contains(event.target)) {
      event.preventDefault();
      let a = document.querySelectorAll(".author__list-item");
      a.forEach(function (e) {
        e.onclick = function () {
          gsap.to(this, {
            left: "39.3%",
            bottom: "70%",
            position: "absolute",
            transform: "scale(1.4, 1.4)",
            height: "100%",
            zIndex: 1000,
          });
          document.querySelector(".author__list-box").style.position =
            "relative";
          this.classList.add("class__list-active");
        };
      });
    } else if (
      wrapRefBase.current &&
      !wrapRefBase.current.contains(event.target)
    ) {
      let a = document.querySelectorAll(".author__list-item");
      let c = document.querySelector(".class__list-active");
      console.log("close");
      console.log(c);
      gsap.fromTo(
        ".class__list-active",
        {
          transform: "scale(1.4, 1.4)",
          translate: "none",
          rotate: "none",
          scale: "none",
          zIndex: 100,
          height: "100%",
          position: "absolute",
          bottom: "70%",
          left: "39.3%",
        },
        {
          width: "21.5%",
          borderRadius: "10px",
          backgroundColor: "#F4F4F4",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          transform: "scale(1)",
          bottom: 0,
          left: 0,
        }
      );
      a.forEach((item) => {
        item.classList.remove("class__list-active");
      });
      document
        .querySelector(".author__list-box")
        .classList.remove("author__list-box-active");
    }
  };

  const style = "post__right-block-second";

  return (
    <main className="main">
      <section className="more">
        <MoreBlock />
      </section>
      <section className="post">
        <div className="container">
          <div className="post__block">
            <div className="post__block-more">
              <div className="post__left-block">
                <div className="post__block-inside">
                  <h2 className="post__header-left">Featured Post</h2>
                  <BlockNews />
                </div>
              </div>
              <div className="post__right-block">
                <div className="post__links-more">
                  <h2 className="post__header-center">All Posts</h2>
                  <NavLink className="post__view" to="/Blog">
                    View All
                  </NavLink>
                </div>
                <BlockRigth />
                <BlockRigth className={style} />
                <BlockRigth />
                <BlockRigth />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="container">
          <div className="content__block">
            <div className="content__left-block">
              <p className="content__description-left-block">ABOUT US</p>
              <h2 className="content__header-left-block">
                We are a community of content writers who share their learnings
              </h2>
              <p className="content__description-left-block-second">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="#" className="content__more">
                Read More
              </a>
            </div>
            <div className="content__right-block">
              <p className="content__description-right-block">OUR MISION</p>
              <h2 className="content__header-right-block">
                Creating valuable content for creatives all around the world
              </h2>
              <p className="content__description-right-block-third">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="content__right-block content__third-block">
              <p className="content__description-right-block content__description-right-block-inside">
                OUR TEAM
              </p>
              <h2 className="content__header-right-block content__header-right-block-inside">
                Creating valuable content for creatives all around the world
              </h2>
              <p className="content__description-right-block-third content__description-right-block-third-inside">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Corporis voluptatibus velit error similique ipsa eos cum minima,
                nulla neque cupiditate molestiae minus iusto delectus ullam,
                earum id, sed temporibus quas.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="category">
        <div className="container">
          <div className="category__block">
            <h2 className="category__header-title"> Choose A Category </h2>
            <ListBox />
          </div>
        </div>
      </section>
      <section className="story">
        <div className="container">
          <div className="story__block">
            <div className="story__block-img">
              <div className="story__picture-block">
                <img src={close__up} alt="Картинка:(" className="story__img" />
              </div>
              <div className="story__description-block">
                <p className="story__description">Why we started</p>
                <h2 className="story__header">
                  It started out as a simple idea and evolved into our passion
                </h2>
                <p className="story__description-footer">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip.
                </p>
                <button className="story__btn">Discover our story</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="author">
        <div className="container">
          <div className="author__block">
            <div className="author__header">List of Author</div>
            <ul className="author__list-box" ref={wrapRefBase}>
              <li
                className="author__list-item author__list-item-first"
                tabindex="0"
              >
                <div className="author__list-block ">
                  <img src={yellow} alt="Картинка:(" className="author__img" />
                  <h3 className="author__list-block-header">Floyd Miles</h3>
                  <a href="#" className="author__block-description">
                    Content Writer @Company
                  </a>
                  <ul className="author__block-img">
                    <ListBoxIconsFails />
                  </ul>
                </div>
              </li>
              <li
                className="author__list-item author__active-block author__list-item-second"
                tabindex="0"
              >
                <div className="author__list-block">
                  <img src={woman} alt="Картинка:(" className="author__img" />
                  <h3 className="author__list-block-header">Dianne Russell</h3>
                  <a href="#" className="author__block-description">
                    Content Writer @Company
                  </a>
                  <ul className="author__block-img">
                    <ListBoxIconsFails />
                  </ul>
                </div>
              </li>
              <li
                className="author__list-item author__list-item-third"
                tabindex="0"
              >
                <div className="author__list-block">
                  <img src={fashion} alt="Картинка:(" className="author__img" />
                  <h3 className="author__list-block-header">Jenny Wilson</h3>
                  <a href="#" className="author__block-description">
                    Content Writer @Company
                  </a>
                  <ul className="author__block-img">
                    <ListBoxIconsFails />
                  </ul>
                </div>
              </li>
              <li
                className="author__list-item author__list-item-forth"
                tabindex="0"
              >
                <div className="author__list-block">
                  <img
                    src={womanTwo}
                    alt="Картинка:("
                    className="author__img"
                  />
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
            </ul>
          </div>
        </div>
      </section>
      <section className="company">
        <div className="container">
          <div className="company__block">
            <ul className="company__list-box">
              <MainInfoBox />
            </ul>
          </div>
        </div>
      </section>
      <section className="blog">
        <div className="container">
          <div className="blog__block">
            <div className="blog__first-block">
              <div className="blog__block-border">
                <p className="blog__first-block-description">TESTIMONIALs</p>
                <h2 className="blog__first-block-head">
                  What people say about our blog
                </h2>
                <p className="blog__first-block-description-end">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
            </div>
            <div className="blog__second-block">
              <div className="blog__second-block-authory">
                <p className="blog__second-block-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul className="blog__list-box">
                  <Splide aria-label="My Favorite Images">
                    <SplideSlide>
                      <div className="block__author-info">
                        <div className="block__author-img">
                          <img
                            src={content}
                            alt="Image 1"
                            className="block__author-img"
                          />
                        </div>
                        <div className="block__author-description">
                          <p className="block__author-description-head">
                            Jonathan Vallem
                          </p>
                          <p className="block__author-description-more">
                            New york, USA
                          </p>
                        </div>
                      </div>
                    </SplideSlide>
                    <SplideSlide>
                      <div className="block__author-info">
                        <div className="block__author-img">
                          <img
                            src={woman}
                            className="block__author-img"
                            alt="Image 1"
                          />
                        </div>
                        <div className="block__author-description">
                          <p className="block__author-description-head">
                            Floyd Miles
                          </p>
                          <p className="block__author-description-more">
                            Brussele, Belgium
                          </p>
                        </div>
                      </div>
                    </SplideSlide>
                    <SplideSlide>
                      <div className="block__author-info">
                        <div className="block__author-img">
                          <img
                            src={fashion}
                            className="block__author-img"
                            alt="Image 1"
                          />
                        </div>
                        <div className="block__author-description">
                          <p className="block__author-description-head">
                            Dianne Russell
                          </p>
                          <p className="block__author-description-more">
                            London, Great Britian
                          </p>
                        </div>
                      </div>
                    </SplideSlide>
                    <SplideSlide>
                      <div className="block__author-info">
                        <div className="block__author-img">
                          <img
                            src={womanTwo}
                            className="block__author-img"
                            alt="Image 1"
                          />
                        </div>
                        <div className="block__author-description">
                          <p className="block__author-description-head">
                            Jenny Wilson
                          </p>
                          <p className="block__author-description-more">
                            Moscow, Russia
                          </p>
                        </div>
                      </div>
                    </SplideSlide>
                    <SplideSlide>
                      <div className="block__author-info">
                        <div className="block__author-img">
                          <img
                            src={china}
                            className="block__author-img"
                            alt="Image 1"
                          />
                        </div>
                        <div className="block__author-description">
                          <p className="block__author-description-head">
                            Jenny Wilson
                          </p>
                          <p className="block__author-description-more">
                            Ottawa, Canada
                          </p>
                        </div>
                      </div>
                    </SplideSlide>
                  </Splide>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="join">
        <div className="container">
          <JoinBlock />
        </div>
      </section>
    </main>
  );
}

export default HomePage;
