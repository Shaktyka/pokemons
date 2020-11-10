import React from "react";
import Heading from "../heading";
import s from "./PokemonCard.module.scss";

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

interface IPokemonProps {
  data: IPokemon;
  key: number;
}

const PokemonCard: React.FC<IPokemonProps> = ({ data }) => {
  return (
    <article className={s.root}>
      <div className={s.infoWrap}>
        <Heading size="h3" className={s.titleName}>
          Charmander
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>52</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>43</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          <span className={s.label}>Fire</span>
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
          alt="Charmander"
        />
      </div>
    </article>
  );
};

export default PokemonCard;
