import React from "react";
import build from './../../image/icons/Icon.png'
import rocket from './../../image/icons/Icon.png'
import arrow from './../../image/icons/icons.png'
import business from './../../image/icons/business-and-trade 1.png'
import { NavLink } from "react-router-dom";

function ListBox() {

    

    return(
        <ul className="category__list-box">
                        <li className="category__list-item" tabindex="0">
                            <NavLink to='/Category' >
                                    <div className="category__item-icon">
                                        <img src={build} alt="Картинка:(" className="category__img" />
                                        <h2 className="category__header">
                                            Business
                                        </h2>
                                        <p className="category__description-block">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ex sit a quaerat molestias modi nam tempora necessitatibus magni enim. Laboriosam corrupti dolorem quo nam eveniet minus quasi delectus qui.
                                        </p>
                                    </div>
                                </NavLink>
                            </li>
                        <li className="category__list-item active__block" tabindex="0">
                            <NavLink to='/Category' >
                                <div className="category__item-icon ">
                                    <img src={rocket} alt="" className="category__img iimg" />
                                    <h2 className="category__header">Startup</h2>
                                    <p className="category__description-block">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident itaque, tempora incidunt optio sapiente, quae quasi quo sunt similique dolorem vel eius quos esse iure vitae nesciunt nihil? Libero, fuga.
                                    </p>
                                </div>
                            </NavLink>
                        </li>
                        <li className="category__list-item" tabindex="0">
                            <NavLink to='/Category' >
                                <div className="category__item-icon">
                                    <img src={arrow} alt="Картинка:(" className="category__img" />
                                    <h2 className="category__header">
                                        Economy
                                    </h2>
                                    <p className="category__description-block">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ex sit a quaerat molestias modi nam tempora necessitatibus magni enim. Laboriosam corrupti dolorem quo nam eveniet minus quasi delectus qui.
                                    </p>
                                </div>
                            </NavLink>
                        </li>
                        <li className="category__list-item" tabindex="0">
                            <NavLink to='/Category'>
                                <div className="category__item-icon">
                                    <img src={business} alt="Картинка:(" className="category__img" />
                                    <h2 className="category__header">
                                        Technology
                                    </h2>
                                    <p className="category__description-block">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ex sit a quaerat molestias modi nam tempora necessitatibus magni enim. Laboriosam corrupti dolorem quo nam eveniet minus quasi delectus qui.
                                    </p>
                                </div>
                            </NavLink>
                        </li>
                    </ul>
    )
}

export default ListBox