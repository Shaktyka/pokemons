import * as React from "react";

// import s from "./Pokedex.module.scss";

import Header from "../../components/header";
import Footer from "../../components/footer";
import Layout from "../../components/layout";
import Pokedex from "../../components/pokedex";

const PokedexPage = () => {
  return (
    <>
      <Header />
      <Layout>
        <Pokedex />
      </Layout>
      <Footer />
    </>
  );
};

export default PokedexPage;
