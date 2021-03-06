import * as React from "react";
import { useState } from "react";
import useData from "../../hook/getData";
import useDebounce from "../../hook/useDebounce";
import { IPokemons } from "../../interface/pokemons";

import { Content, Footer, Layout, Pokedex } from "../../components";

interface IQuery {
  name?: string;
}

const PokedexPage: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");
  const [query, setQuery] = useState<IQuery>({});

  const debouncedValue = useDebounce(searchValue, 500);

  const { data, isLoading, isError } = useData<IPokemons>(
    "getPokemons",
    query,
    [debouncedValue]
  );

  if (isError) {
    return <div>Something went wrong!</div>;
  }

  // evt: React.ChangeEvent<HTMLInputElement>
  const handleSearchChange = (target: string) => {
    setSearchValue(target);
    setQuery((state: IQuery) => ({
      ...state,
      name: target,
    }));
  };

  return (
    <Content>
      <Layout>
        <Pokedex
          isLoading={isLoading}
          total={data && data.total}
          pokemons={data && data.pokemons}
          onChange={handleSearchChange}
        />
      </Layout>
      <Footer />
    </Content>
  );
};

export default PokedexPage;
