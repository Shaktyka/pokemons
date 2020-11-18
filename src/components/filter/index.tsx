import * as React from "react";

import s from "./Filter.module.scss";

interface IFilterProps {
  onChange(target: string): void;
}

// Фильтр покемонов
const Filter: React.FC<IFilterProps> = ({ onChange }) => {
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
          onChange={(evt) => onChange(evt.target.value)}
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
