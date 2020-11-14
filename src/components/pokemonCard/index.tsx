import React from "react";
import cn from "classnames";

import { Heading } from "..";
import { IPokemon } from "../../types";

import s from "./PokemonCard.module.scss";

interface IPokemonProps {
  data: IPokemon;
  key: number;
}

const PokemonCard: React.FC<IPokemonProps> = ({ data }) => {
  const { types, img, id, name, stats } = data;
  const firstType: string = types[0];

  return (
    <article className={s.root} id={String(id)}>
      <div className={s.infoWrap}>
        <Heading size="h5" className={s.titleName}>
          {name}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats.defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {/* Типы покемонов */}
          {types.map((type) => {
            return (
              <span
                className={cn(s.label, s[type as keyof typeof s])}
                key={type}
              >
                {type}
              </span>
            );
          })}
        </div>
      </div>
      <div className={cn(s.pictureWrap, s[firstType as keyof typeof s])}>
        <img src={data.img} alt={name} />
      </div>
    </article>
  );
};

export default PokemonCard;
