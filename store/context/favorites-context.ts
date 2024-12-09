import { createContext } from "react";

type FavoritesContextType = {
  ids: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
};

const FavoritesContext = createContext<FavoritesContextType>(
  {} as FavoritesContextType,
);

export default FavoritesContext;
