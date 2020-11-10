import * as React from "react";
import s from "./Burger.module.scss";

const Burger: React.FC = () => {
  return (
    <button className={s.menuBtn} type="button">
      <span hidden>Открыть меню</span>
    </button>
  );
};

export default Burger;
