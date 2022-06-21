import React from "react";
import { useContext } from "react";
import { AppContext } from "../AppContext";
import Sneakers from "../components/sneakers/Sneakers";
import Seach from "../components/seach/Seach";
const SheakersPages = () => {
  const { data, seach } = useContext(AppContext);
  return (
    <div className="App__kross">
      <Seach />
      {data
        .filter((item) => item.name.toLowerCase().includes(seach.toLowerCase()))
        .map((item) => (
          <Sneakers item={item} key={item.id} />
        ))}
    </div>
  );
};

export default SheakersPages;
