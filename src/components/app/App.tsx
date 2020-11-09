import * as React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import "../../assets/styles/normalize.scss";
import "../../assets/styles/common-styles.scss";

import HomePage from "../../pages/home";
import PokedexPage from "../../pages/pokedex";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/pokedex" component={PokedexPage} />
        <Route render={() => <h1>404</h1>} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
