import * as React from "react";

// import s from "./Pokedex.module.scss";

import Footer from "../../components/footer";
import Layout from "../../components/layout";
import Pokedex from "../../components/pokedex";

const PokedexPage = () => {
  return (
    <>
      <Layout>
        <Pokedex />
      </Layout>
      <Footer />
    </>
  );
};

export default PokedexPage;
