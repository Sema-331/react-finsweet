import React from "react";
import man from './../../image/mainImage/photo-of-woman-wearing-eyeglasses-3184405.png'
import PostInfoMain from "./PostInfoMain";
import JoinBlock from "../HomeComponents/JoinBlock";
import HeaderBlock from "./HeaderBlock";
import { useParams } from "react-router-dom";


function BlogMain() {

    const {id} = useParams()

    return(
        <main>
        <section className="step" id = "post">
            <div className="container">
                <HeaderBlock />
            </div>
        </section>
        <section className="fast">
            <div className="container">
                <div className="fast__block">
                    <div className="fast__block-img">
                        <img src={man} alt="Картинка:(" className="fast__img" />
                    </div>
                    <div className="fast__block-description">
                        <h2 className="fast__header">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                        </h2>
                        <p className="fast__description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
                        </p>
                    </div>
                    <div className="fast__block-description fast__block-description-move">
                        <h2 className="fast__header">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                        </h2>
                        <p className="fast__description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
                        </p>
                        <p className="fast__description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
                        </p>
                    </div>
                    <div className="fast__list-block">
                        <ul className="fast__list-box">
                            <li className="fast__list-item">
                                Lorem ipsum dolor sit amet
                            </li>
                            <li className="fast__list-item">
                                Non blandit massa enim nec scelerisque
                            </li>
                            <li className="fast__list-item">
                                Neque egestas congue quisque egestas
                            </li>
                        </ul>
                        <p className="fast__description-txt">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
                        </p>
                    </div>
                    <div className="fast__block-footer">
                        <h2 className="fast__text-header">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                        </h2>
                        <p className="fast__text-description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="read">
            <div className="container">
                <div className="read__block">
                    <h2 className="read__header-start">
                        What to read next
                    </h2>
                    <ul className="read__list-box">
                        <PostInfoMain />
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

export default BlogMain