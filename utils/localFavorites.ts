export const toggleFavorite = (id: number) => {
  let favorites: number[] = JSON.parse(localStorage.favorites || "[]");

  if (favorites.includes(id)) {
    favorites = favorites.filter((pokeId) => pokeId !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
};

export const existInFavorites = (id: number) => {
  if (typeof window === "undefined") return false;

  const favorites: number[] = JSON.parse(localStorage.favorites || "[]");

  return favorites.includes(id);
};

export const pokemons = (): number[] => {
  return JSON.parse(localStorage.favorites || "[]");
};
