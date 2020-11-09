import * as React from "react";
import s from "./Header.module.scss";

// Компоненты
import Menu from "../menu";
import Burger from "../burger";

// import logo from "./assets/logo.svg";
import { ReactComponent as PokemonLogoSvg } from "./assets/logo.svg";

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.content}>
          <a className={s.logo} href="/">
            <PokemonLogoSvg />
            {/* <img src={logo} width="157" height="63" alt="Логотип" /> */}
          </a>
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
