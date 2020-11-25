import React from "react";
import useData from "../../hook/getData";
import { PokemonsRequest } from "../../interface/pokemons";

export interface PokemonProps {
  id: number | string;
}

const PokemonPage: React.FC<PokemonProps> = ({ id }) => {
  const { data, isLoading } = useData<PokemonsRequest>("getPokemon", { id });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>This is pokemon with id = {data?.name}</div>;
};

export default PokemonPage;
