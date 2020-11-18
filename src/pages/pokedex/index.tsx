import * as React from "react";
import { useState } from "react";
import useData from "../../hook/getData";

import { Content, Footer, Layout, Loader, Pokedex } from "../../components";

const PokedexPage: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [query, setQuery] = useState({});

  // const query = useMemo(() => ({
  //   name: searchValue
  // }), [searchValue]);

  const { data, isLoading, isError } = useData("getPokemons", query, [
    searchValue,
  ]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>Something went wrong!</div>;
  }

  // evt: React.ChangeEvent<HTMLInputElement>
  const handleSearchChange = (target: string) => {
    setSearchValue(target);
    setQuery((s) => ({
      ...s,
      name: target,
    }));
  };

  return (
    <Content>
      <Layout>
        <Pokedex
          total={data.total}
          pokemons={data.pokemons}
          onChange={handleSearchChange}
        />
      </Layout>
      <Footer />
    </Content>
  );
};

export default PokedexPage;
