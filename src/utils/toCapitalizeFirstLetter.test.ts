import toCapitalizeFirstLetter from "./toCapitalizeFirstLetter";

describe("toCapitalizeFirstLetter tests", () => {
  test("Функция возвращает какой-то результат", () => {
    const result = toCapitalizeFirstLetter("functionName");
    expect(result).not.toBe(undefined);
  });

  test("Если первый символ - не буква, строка возвращается как есть", () => {
    const result = toCapitalizeFirstLetter("12345");
    expect(result).toEqual("12345");
  });

  test("Если в начале строки пробелы, пробелы, пробелы удаляются и возвращается корректный результат", () => {
    const result = toCapitalizeFirstLetter("     weight");
    expect(result).toEqual("Weight");
  });

  test("Первый символ строки капитализируется", () => {
    const result = toCapitalizeFirstLetter("color");
    expect(result).toEqual("Color");
  });

  test("Все символы, кроме первого, в нижнем регистре", () => {
    const result = toCapitalizeFirstLetter("creatureName");
    expect(result).toEqual("Creaturename");
  });

  test("Нижнее подчркивание и дефис не вызывают ошибок", () => {
    const result = toCapitalizeFirstLetter("first_Spec-CHARS");
    expect(result).toEqual("First_spec-chars");
  });
});
