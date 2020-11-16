import * as React from "react";
import { useEffect, useState } from "react";
import { IPokemon } from "../../types";
import config from "../../config";
// import s from "./Pokedex.module.scss";

import { Content, Footer, Layout, Loader, Pokedex } from "../../components";

interface IData {
  total: number;
  pokemons: IPokemon[];
}

const usePokemons = () => {
  const [data, setData] = useState<IData>({ total: 0, pokemons: [] });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      const url = `${config.client.server.protocol}://${config.client.server.host}${config.client.endpoint.getPokemons.uri.pathname}`;
      try {
        const response = await fetch(url);
        const result = await response.json();
        // console.log(result);

        setData(result);
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPokemons();
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

const PokedexPage: React.FC = () => {
  const { data, isLoading, isError } = usePokemons();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Something went wrong!</div>;
  }

  return (
    <Content>
      <Layout>
        <Pokedex total={data.total} pokemons={data.pokemons} />
      </Layout>
      <Footer />
    </Content>
  );
};

export default PokedexPage;
