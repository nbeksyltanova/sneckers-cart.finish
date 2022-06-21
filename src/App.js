import "./App.scss";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import BasketPages from "./pages/BasketPages";
import { AppContext } from "./AppContext";
import React from "react";
import SheakersPages from "./pages/SheakersPages";
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const resp = await fetch("http://localhost:3000/db.json");
      const data = await resp.json();

      setData(data);
    }
    fetchData();
  }, []);

  // Seach
  const [seach, setSeach] = React.useState("");

  const onSeachInput = (e) => {
    setSeach(e.target.value);
  };

  // Корзина

  const [cart, setCart] = React.useState([]);
  return (
    <AppContext.Provider
      value={{
        data,
        onSeachInput,
        seach,
        cart,
        setCart,
      }}
    >
      <div className="App">
        <div className="App__back ">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/basket" element={<BasketPages />} />
            <Route path="/sneakers" element={<SheakersPages />} />
          </Routes>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
