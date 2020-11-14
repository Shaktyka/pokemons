import * as React from "react";
import PokeBall from "./img/pokeball2.png";
import s from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={s.root}>
      <img
        className={s.img}
        src={PokeBall}
        width="100"
        height="auto"
        alt="Loader"
      />
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
