import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  favoritesCount: 0,
  addFavortie: (favoriteMeetup) => {},
  removeFavorite: (meetupid) => {},
  itemIsFavortie: (meetupid) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites((prevUserFavorties) => {
      return prevUserFavorties.concat(favoriteMeetup);
    });
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites((prevUserFavorties) => {
      return prevUserFavorties.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemIsFavortieHandler(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavortie: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavortie: itemIsFavortieHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
