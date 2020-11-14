import * as React from "react";
import { A, usePath } from "hookrouter";
import cn from "classnames";

import { GENERAL_MENU } from "../../routes";

import s from "./Menu.module.scss";

const Menu: React.FC = () => {
  const path = usePath();

  return (
    <ul className={s.menuList}>
      {GENERAL_MENU.map(({ title, link }) => {
        return (
          <li className={cn(s.menuItem)} key={title}>
            <A
              className={cn(s.menuLink, { [s.activeLink]: link === path })}
              href={link}
            >
              {title}
            </A>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
