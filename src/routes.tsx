import React, { PropsWithChildren } from "react";
import PokemonProps from "./pages/pokemon";
import {
  HomePage,
  LegendariesPage,
  DocumentationPage,
  PokedexPage,
  PokemonPage,
} from "./pages";

export enum LinkEnum {
  HOME = "/",
  POKEDEX = "/pokedex",
  LEGENDARIES = "/legendaries",
  DOCUMENTATION = "/documentation",
  POKEMON = "/pokedex/:id",
}

interface IGeneralMenu {
  title: string;
  link: LinkEnum;
  component: (props: PropsWithChildren<any>) => JSX.Element;
}

export const GENERAL_MENU: IGeneralMenu[] = [
  {
    title: `Home`,
    link: LinkEnum.HOME,
    component: () => <HomePage />,
  },
  {
    title: `Pokedex`,
    link: LinkEnum.POKEDEX,
    component: () => <PokedexPage />,
  },
  {
    title: `Legendaries`,
    link: LinkEnum.LEGENDARIES,
    component: () => <LegendariesPage />,
  },
  {
    title: `Documentation`,
    link: LinkEnum.DOCUMENTATION,
    component: () => <DocumentationPage />,
  },
];

const SECOND_ROUTES: IGeneralMenu[] = [
  {
    title: "Pokemon",
    link: LinkEnum.POKEMON,
    component: ({ id }: PokemonProps) => <PokemonPage id={id} />,
  },
];

interface IAccMenu {
  [n: string]: (props: PropsWithChildren<any>) => JSX.Element;
}

const routes = [...GENERAL_MENU, ...SECOND_ROUTES].reduce(
  (acc: IAccMenu, item: IGeneralMenu) => {
    acc[item.link] = item.component;
    return acc;
  },
  {}
);

export default routes;
