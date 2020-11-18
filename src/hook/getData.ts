import { useEffect, useState } from "react";
import { IPokemon } from "../types";
import req from "../utils/request";

interface IData {
  total?: number;
  pokemons?: IPokemon[];
}

const useData = (endpoint: string, query: object, deps: any[] = []) => {
  const [data, setData] = useState<IData>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const result = await req(endpoint, query);

        setData(result);
      } catch (err) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, deps);

  return {
    data,
    isLoading,
    isError,
  };
};

export default useData;
