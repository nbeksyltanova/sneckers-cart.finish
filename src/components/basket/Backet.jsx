import React from "react";
import { useContext, useState } from "react";
import smail from "../../asseta/img/sg.png";
import Iconl from "../../asseta/img/Group.png";
import { NavLink } from "react-router-dom";
import { AppContext } from "../../AppContext";
import noHart from "../../asseta/img/hart.png";
import hart from "../../asseta/img/menu_hard.png";

const Backet = () => {
  const [isOnHart, setOnHart] = useState(false);
  const onClickHart = () => {
    setOnHart(!isOnHart);
  };
  const { cart, setCart } = useContext(AppContext);
  const removeProduct = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };
  return (
    <div>
      {cart.length ? (
        <div className="App__kross">
          {cart.map((item) => (
            <div key={item.id}>
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
                  <div className="menu__sneaker ">
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
                      src="https://cdn-icons-png.flaticon.com/512/216/216760.png"
                      onClick={() => removeProduct(item.id)}
                    />
                  </div>
                </div>
              </section>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <div className="App__menu-sne">
            <section className="cart">
              <div className="cart__header"></div>
              <div className="cart__title">
                <img className="cart__img" src={smail} />
                <h2 className="cart__h2">У вас нет заказов</h2>
                <p className="cart__p">Oформите хотя бы один заказ</p>
                <div className="cart__bnt">
                  <img src={Iconl} />
                  <NavLink to="/"> Вернуться назад</NavLink>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};

export default Backet;
