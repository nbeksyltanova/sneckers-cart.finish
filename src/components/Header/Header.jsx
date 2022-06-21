import React, {Component} from 'react';
import Lodo from "../../asseta/img/Logo.png";
import Cart from "../../asseta/img/cart.svg";
import Hard from "../../asseta/img/hart.png";
import User from "../../asseta/img/user.svg";
import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <div>
            <div>
                <header>
                    <div className="header">
                        <div className="header__inner">
                            <div className="header__sneak">
                                <div className="header__logo">
                                    <NavLink to="/">
                                        {" "}
                                        <img src={Lodo} />
                                    </NavLink>
                                </div>

                                <div className="header__title">
                                    <h2>REACT SNEAKERS</h2>
                                    <p>Магазин лучших кроссовок</p>
                                </div>
                            </div>
                            {/*  */}
                            <div className="header__ligh">
                                <p>
                                    <NavLink to="/basket">
                                        <img
                                            className="header__cart"
                                            src={Cart}
                                            width={20}
                                            height={18.27}
                                        />
                                    </NavLink>
                                    <span>1205 pyб.</span>
                                </p>

                                <p className="header__icon">
                                    {" "}
                                    <img src={Hard} width={20.87} height={18.95} />
                                </p>
                                <p>
                                    {" "}
                                    <NavLink to="">
                                        {" "}
                                        <img
                                            className="header__icon"
                                            src={User}
                                            width={20}
                                            height={20}
                                        />
                                    </NavLink>
                                </p>
                            </div>
                        </div>
                    </div>
                </header>
            </div>

        </div>
    );

}


export default Header;