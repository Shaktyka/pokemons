import React from "react";
import HomePage from "./pages/home";
import Pokedex from "./pages/pokedex";

const routes = {
  "/": () => <HomePage />,
  "/home": () => <HomePage />,
  "/pokedex": () => <Pokedex />,
  "/legendaries": () => <h1>Legendaries</h1>,
  "/documentation": () => <h1>Documentation</h1>,
};

export default routes;
