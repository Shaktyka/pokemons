import * as React from "react";
import { A } from "hookrouter";
import s from "./Header.module.scss";

// Компоненты
import Menu from "../menu";
import Burger from "../burger";

// import logo from "./assets/logo.svg";
import { ReactComponent as PokemonLogoSvg } from "./assets/logo.svg";

const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.content}>
          <A className={s.logo} href="/">
            <PokemonLogoSvg />
          </A>
          <nav>
            <Menu />
            <Burger />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
