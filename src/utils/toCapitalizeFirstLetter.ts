const toCapitalizeFirstLetter = (string: string) => {
  const trimmedString = string.trim();
  const firstSymbol = trimmedString.slice(0, 1);
  if (typeof firstSymbol !== "string") {
    return string;
  }
  const lastSymbols = trimmedString.slice(1);
  const result = `${firstSymbol.toLocaleUpperCase()}${lastSymbols.toLocaleLowerCase()}`;

  return result;
};

export default toCapitalizeFirstLetter;
