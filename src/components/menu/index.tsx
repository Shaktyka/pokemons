import * as React from "react";
// import { Link } from "react-router-dom";
import { A } from "hookrouter";
import cn from "classnames";
import s from "./Menu.module.scss";

type MenuList = { id: number; title: string; link: string }[] | [];

const menuList: MenuList = [
  {
    id: 1,
    title: `Home`,
    link: `/`,
  },
  {
    id: 2,
    title: `Pokedex`,
    link: `/`,
  },
  {
    id: 3,
    title: `Legendaries`,
    link: `/`,
  },
  {
    id: 4,
    title: `Documentation`,
    link: `/`,
  },
];
const activeMenuItem = menuList[0].title;

const Menu = () => {
  return (
    <ul className={s.menuList}>
      {menuList.map(({ id, title, link }) => {
        return (
          <li className={cn(s.menuItem)} key={id}>
            <A
              className={cn(
                s.menuLink,
                title === activeMenuItem ? s.activeLink : ``
              )}
              href={`${link}${title.toLowerCase()}`}
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
