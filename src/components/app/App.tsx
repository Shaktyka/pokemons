import React from "react";
import { useRoutes, useRedirect } from "hookrouter";
import routes from "../../routes";

import "../../assets/styles/normalize.scss";
import "../../assets/styles/common-styles.scss";

import Header from "../header";
import NotFound from "../notFound";

const App: React.FC = () => {
  useRedirect("/home", "/");
  const match = useRoutes(routes);

  return match ? (
    <>
      <Header />
      {match}
    </>
  ) : (
    <NotFound />
  );
};

export default App;
