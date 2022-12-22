import pokeApi from "../api/pokeApi";
import { Pokemon } from "../interfaces";

export const getPokemonsInfo = async (nameOrId: string) => {
  const { data } = await pokeApi<Pokemon>(`/pokemon/${nameOrId}`);

  return {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
  };
};
