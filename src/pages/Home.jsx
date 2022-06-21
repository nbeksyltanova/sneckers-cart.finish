import React, { useContext } from "react";
import Slider from "../components/slider/Slider";
import Seach from "../components/seach/Seach";
import { AppContext } from "../AppContext";
import Sneakers from "../components/sneakers/Sneakers";
const Home = () => {
  const { data, seach } = useContext(AppContext);

  return (
    <div className="">
      <Slider />
      <Seach />
      <div className="App__kross">
        {data
          .filter((item) =>
            item.name.toLowerCase().includes(seach.toLowerCase())
          )
          .map((item) => (
            <Sneakers item={item} key={item.id} />
          ))}
      </div>
    </div>
  );
};

export default Home;
