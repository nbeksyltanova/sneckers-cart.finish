import React, { useContext, useState } from "react";
import gal from "../../asseta/img/galochka.svg";
import Pls from "../../asseta/img/pls.svg";
import noHart from "../../asseta/img/MenuHartno.svg";
import hart from "../../asseta/img/menu_hard.png";
import { AppContext } from "../../AppContext";
const Sneakers = ({ item }) => {
  const [isOnAd, setIsOnAd] = useState(false);
  const onClickPlus = (product) => {
    setIsOnAd(!isOnAd);
    setCart([...cart, product]);
  };
  const [isOnHart, setOnHart] = useState(false);
  const onClickHart = () => {
    setOnHart(!isOnHart);
  };
  const { setCart, cart } = useContext(AppContext);
  return (
    <div>
      <div className="">
        <section className="menu">
          <div className="menu__container">
            <div className="menu__hard">
              <img
                className="tab"
                onClick={onClickHart}
                src={isOnHart ? hart : noHart}
                alt="Галочка и Плюс"
              />
            </div>
            <div className="menu__sneaker">
              <img src={item.image} />
            </div>
            <div className="menu__title">
              <h2>{item.name}</h2>
            </div>
            <div className="menu__pls-container">
              <div>
                <h2>Цена:</h2>
                <p>{item.price}</p>
              </div>

              <img
                className="plus"
                onClick={() => onClickPlus(item)}
                src={isOnAd ? gal : Pls}
                alt="Галочка и Плюс"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sneakers;
