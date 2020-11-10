import React from "react";
import HomePage from "./pages/home";
import Pokedex from "./pages/pokedex";

interface IGeneralMenu {
  title: string;
  link: string;
  component: () => JSX.Element;
}

export const GENERAL_MENU: IGeneralMenu[] = [
  {
    title: `Home`,
    link: `/`,
    component: () => <HomePage />,
  },
  {
    title: `Pokedex`,
    link: `/pokedex`,
    component: () => <Pokedex />,
  },
  {
    title: `Legendaries`,
    link: `/legendaries`,
    component: () => <h1>Legendaries</h1>,
  },
  {
    title: `Documentation`,
    link: `/documentation`,
    component: () => <h1>Documentation</h1>,
  },
];

interface IAccMenu {
  [n: string]: () => JSX.Element;
}

const routes = GENERAL_MENU.reduce((acc: IAccMenu, item: IGeneralMenu) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
