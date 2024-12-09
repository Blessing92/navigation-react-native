import { ReactNode, useMemo, useState } from "react";
import FavoritesContext from "./favorites-context";

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState<string[]>([]);

  function addFavorite(id: string) {
    setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
  }

  function removeFavorite(id: string) {
    setFavoriteMealIds((currentFavIds) =>
      currentFavIds.filter((mealId) => mealId !== id),
    );
  }

  const favoritesContextValues = useMemo(
    () => ({
      ids: favoriteMealIds,
      addFavorite,
      removeFavorite,
    }),
    [favoriteMealIds],
  );

  return (
    <FavoritesContext.Provider value={favoritesContextValues}>
      {children}
    </FavoritesContext.Provider>
  );
}
