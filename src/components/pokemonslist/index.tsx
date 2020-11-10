import * as React from "react";
import s from "./PokemonsList.module.scss";
import PokemonCard from "../pokemonCard";

import POKEMONS, { IPokemon } from "./pokemon-data";

const PokemonsList: React.FC = () => {
  return (
    <div className={s.root}>
      {POKEMONS.map((pokemon: IPokemon) => {
        return <PokemonCard data={pokemon} key={pokemon.id} />;
      })}
    </div>
  );
};

export default PokemonsList;
