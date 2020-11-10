import * as React from "react";
import s from "./PokemonsList.module.scss";
import PokemonCard from "../pokemonCard";

interface IPokemonListProps {
  pokemons: {}[] | [];
}

const PokemonsList: React.FC<IPokemonListProps> = ({ pokemons }) => {
  return (
    <div className={s.root}>
      {pokemons.map((pokemon) => {
        return <PokemonCard data={pokemon} id={pokemon.id} />;
      })}
    </div>
  );
};

export default PokemonsList;
