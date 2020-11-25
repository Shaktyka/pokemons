import React from "react";

export interface PokemonProps {
  id: number | string;
}

const PokemonPage: React.FC<PokemonProps> = ({ id }) => {
  return <div>This is pokemon with id = {id}</div>;
};

export default PokemonPage;
