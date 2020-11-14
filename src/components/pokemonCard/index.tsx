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
  // const name = data.name.slice(0, 1).toUpperCase() + data.name.slice(1);
  const { types, img, id, name } = data;

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
          {/* Типы покемонов */}
          {types.map((type) => {
            // const typeName = type.slice(0, 1).toUpperCase() + type.slice(1);
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
      <div className={s.pictureWrap}>
        <img src={data.img} alt={name} />
      </div>
    </article>
  );
};

export default PokemonCard;
