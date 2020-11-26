import getUrlWithParamsConfig from "./getUrlWithParamsConfig";

describe("getUrlWithParamsConfig", () => {
  test("Принимает 'getPokemons' и пустой объект и возвращает корректный объект запроса", () => {
    const url = getUrlWithParamsConfig("getPokemons", {});

    expect(url).toEqual({
      protocol: "http",
      host: "zar.hosthot.ru",
      pathname: "/api/v1/pokemons",
      query: {},
    });
  });

  test('Принимает "getPokemons" и имя покемона {name: "Pikachu"} и возвращает корректный объект запроса', () => {
    const url = getUrlWithParamsConfig("getPokemons", { name: "Pikachu" });

    expect(url).toEqual({
      protocol: "http",
      host: "zar.hosthot.ru",
      pathname: "/api/v1/pokemons",
      query: { name: "Pikachu" },
    });
  });

  test('Принимает "getPokemons" и id покемона {id: 25} и возвращает корректный объект запроса', () => {
    const url = getUrlWithParamsConfig("getPokemon", { id: 25 });

    expect(url).toEqual({
      protocol: "http",
      host: "zar.hosthot.ru",
      pathname: "/api/v1/pokemon/25",
      query: {},
    });
  });
});
