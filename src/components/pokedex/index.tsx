import * as React from "react";
import Heading from "../heading";
import s from "./Pokedex.module.scss";

import PokemonsList from "../pokemonslist";

const Pokedex: React.FC = () => {
  return (
    <section className={s.root}>
      <Heading size="h3">
        800 <b>Pokemons</b> for you to choose your favorite
      </Heading>
      {/* Форма поиска */}
      <form className={s.search} action="#">
        <label htmlFor="search">
          <span hidden>Поиск покемонов</span>
          <input
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
      {/* Список покемонов */}
      <PokemonsList />
      {/* Пагинация */}
      <ul className={s.pagination}>
        <li>
          <a href="?page1">1</a>
        </li>
        <li>
          <a href="?page2">2</a>
        </li>
        <li>
          <a href="?page3">3</a>
        </li>
      </ul>
    </section>
  );
};

export default Pokedex;
