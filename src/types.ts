// Покемоны // IPokemon[] - массив покемонов

// for IPokemon
export type IStats = {
  [key: string]: number;
};

// Объект данных одного покемона
export interface IPokemon {
  ["name_clean"]?: string;
  abilities?: string[];
  stats?: IStats;
  types?: string[];
  img?: string;
  name?: string;
  ["base_experience"]?: number;
  height?: number;
  id?: number;
  ["is_default"]?: boolean;
  order?: number;
  weight?: number;
}
