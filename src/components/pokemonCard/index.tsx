import React from "react";

import { Heading } from "..";
import { IPokemon } from "../../types";

import s from "./PokemonCard.module.scss";

interface IPokemonProps {
  data: IPokemon;
  key: number;
}

const PokemonCard: React.FC<IPokemonProps> = ({ data }) => {
  const name = data.name.slice(0, 1).toUpperCase() + data.name.slice(1);
  const { types, img, id } = data;

  return (
    <article className={s.root} id={String(id)}>
      <div className={s.infoWrap}>
        <Heading size="h5" className={s.titleName}>
          {name}
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
          {types.map((type) => (
            <span className={s.label} key={type}>
              Fire
            </span>
          ))}
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={data.img} alt={name} />
      </div>
    </article>
  );
};

export default PokemonCard;
