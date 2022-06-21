import React from 'react';
import { NavLink } from "react-router-dom";
import Adidas from "../../asseta/img/adidas.png";
import Fov from "../../asseta/img/forever.png";
import ic from "../../asseta/img/sliderpng.png";
const Slider = () => {
    return (
        <div>
            <div>
                <section className="stan">
                    <div className="stan__container">
                        <div className="stan__left">
                            <img src={Adidas} />

                            <h1>
                                Stan Smith<span>,</span>
                                <p>Forever!</p>
                            </h1>
                            <NavLink to="/Sneakers">
                                <button>Купить</button>
                            </NavLink>
                        </div>
                        <div className="stan__rait">
                            <img className="stan__img" src={Fov} height={300} />
                            <img className="stan__slider" src={ic} />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Slider;