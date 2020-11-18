import * as React from "react";
import s from "./PokemonsList.module.scss";

import { PokemonCard } from "..";

import { IPokemon } from "../../types";

interface IPokemonsListProps {
  pokemons?: IPokemon[];
  isLoading: boolean;
}

const PokemonsList: React.FC<IPokemonsListProps> = ({
  isLoading,
  pokemons = [],
}) => {
  return (
    <div className={s.root}>
      {!isLoading &&
        pokemons.map((pokemon: IPokemon) => {
          return <PokemonCard data={pokemon} key={pokemon.id} />;
        })}
    </div>
  );
};

export default PokemonsList;
