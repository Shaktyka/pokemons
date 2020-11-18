import * as React from "react";
import s from "./PokemonsList.module.scss";

import { PokemonCard } from "..";

import { IPokemon } from "../../types";

interface IPokemonsListProps {
  pokemons?: IPokemon[];
}

const PokemonsList: React.FC<IPokemonsListProps> = ({ pokemons = [] }) => {
  return (
    <div className={s.root}>
      {pokemons.map((pokemon: IPokemon) => {
        return <PokemonCard data={pokemon} key={pokemon.id} />;
      })}
    </div>
  );
};

export default PokemonsList;
