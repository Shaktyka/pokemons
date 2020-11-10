import * as React from "react";
import s from "./PokemonsList.module.scss";
import PokemonCard from "../pokemonCard";

interface IPokemonListProps<T> {
  [n: number]: IPokemon;
  map<U>(fn: (el: T) => U): U[];
}

interface IStats {
  [key: string]: number;
}

interface IPokemon {
  nameClean: string;
  abilities: string[];
  stats: IStats;
  types: string[];
  img: string;
  name: string;
  baseExperience: number;
  height: number;
  id: number;
  isDefault: boolean;
  order: number;
  weight: number;
}

const PokemonsList: React.FC<IPokemonListProps> = ({ pokemons }) => {
  return (
    <div className={s.root}>
      {pokemons.map((pokemon: IPokemon) => {
        return <PokemonCard data={pokemon} id={pokemon.id} />;
      })}
    </div>
  );
};

export default PokemonsList;
