import getUrlWithParamsConfig from "./getUrlWithParamsConfig";

describe("getUrlWithParamsConfig", () => {
  test("Должна принимать 2 аргумента и возвратить объект с определёнными параметрами", () => {
    const url = getUrlWithParamsConfig("getPokemons", {});

    expect(url).toEqual({
      protocol: "http",
      host: "zar.hosthot.ru",
      pathname: "/api/v1/pokemons",
      query: {},
    });
  });

  test('Должна принимать 2 аргумента: "getPokemons" и {name: "Pikachu"} и возвратить объект с определёнными параметрами', () => {
    const url = getUrlWithParamsConfig("getPokemons", { name: "Pikachu" });

    expect(url).toEqual({
      protocol: "http",
      host: "zar.hosthot.ru",
      pathname: "/api/v1/pokemons",
      query: { name: "Pikachu" },
    });
  });

  test('Должна принимать 2 аргумента: "getPokemons" и {id: 25} и возвратить объект с определёнными параметрами', () => {
    const url = getUrlWithParamsConfig("getPokemon", { id: 25 });

    expect(url).toEqual({
      protocol: "http",
      host: "zar.hosthot.ru",
      pathname: "/api/v1/pokemon/25",
      query: {},
    });
  });
});
