import * as React from "react";
import Heading from "../heading";
import s from "./Pokedex.module.scss";

import { Filter, PokemonsList } from "..";
import { IPokemon } from "../../types";

interface IPokedex {
  total?: number;
  pokemons?: IPokemon[];
  onChange(target: string): void;
}

const Pokedex: React.FC<IPokedex> = ({ total, pokemons, onChange }) => {
  return (
    <section className={s.root}>
      <Heading size="h3" className={s.title}>
        {total} <b>Pokemons</b> for you to choose your favorite
      </Heading>
      {/* Форма поиска */}
      {/* <div>
        <input type="search" name="search" value={searchValue} onChange={handleSearchChange} />
      </div> */}
      <Filter onChange={onChange} />
      {/* Список покемонов */}
      <PokemonsList pokemons={pokemons} />
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
