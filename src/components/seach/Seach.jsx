import React from "react";
import ch from "../../asseta/img/seach.svg";
import { useContext } from "react";
import { AppContext } from "../../AppContext";
const Seach = () => {
  const { onSeachInput, seach } = useContext(AppContext);
  return (
    <div>
      <section className="our">
        <div className="our__container">
          <div className="our__title">
            <h2>{seach ? `Поиск по запросу" ${seach}"` : "Все кросовки"}</h2>
            <p>
              <img src={ch} alt={ch} width={17.25} />
              <input
                onChange={onSeachInput}
                value={seach}
                type="search"
                placeholder="Поиск"
              />
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Seach;
