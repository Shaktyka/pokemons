import * as React from "react";
import s from "./Promo.module.scss";

import Button from "../button";
import Heading from "../heading";
import Parallax from "../parallax";

interface IPromoProps {
  history?: any;
}

const Promo: React.FC<IPromoProps> = ({ history }) => {
  const titleStyles: { [key: string]: string } = {
    marginBottom: "64px",
    letterSpacing: "4px",
  };

  return (
    <main className={s.main}>
      <div className={s.container}>
        <section className={s.promo}>
          <div className={s.description}>
            <Heading size="h1" styles={titleStyles}>
              <b>Find</b> all your favorite <b>Pokemon</b>
            </Heading>
            <p className={s.text}>
              You can know the type of a Pokemon, its strengths, disadvantages
              and abilities
            </p>
            <div className={s.btnWrap}>
              <Button onClick={() => history.push("/pokedex")}>
                See pokemons
              </Button>
            </div>
          </div>
          <Parallax />
        </section>
      </div>
    </main>
  );
};

export default Promo;
