import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
  const [favoritesFrameIds, setFavoritesFrameIds] = useState([]);

  function addFavorite(id) {
    setFavoritesFrameIds((currentFavIds) => [...currentFavIds, id]);
  }
  function removeFavorite(id) {
    setFavoritesFrameIds((currentFavIds) =>
      currentFavIds.filter((frameId) => frameId !== id)
    );
  }

  const value = {
    ids: favoritesFrameIds,
    addFavorite: addFavorite,
    removeFavorite: removeFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContextProvider;
