import * as React from "react";

import s from "./Filter.module.scss";

// Фильтр покемонов
const Filter: React.FC = () => {
  return (
    <form className={s.formSearch} action="#">
      <label className={s.formLabel} htmlFor="search">
        <span hidden>Поиск покемонов</span>
        <input
          className={s.inputSearch}
          type="search"
          name="search"
          id="search"
          placeholder="Encuentra tu pokémon..."
        />
      </label>
      {/* Фильтр */}
      <div className={s.filters}>
        <button type="button">Tipo</button>
        <button type="button">Ataque</button>
        <button type="button">Experiencia</button>
      </div>
    </form>
  );
};

export default Filter;
