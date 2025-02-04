import React, { useState, useEffect } from "react";
import HomeButton from "../components/HomeButton";

const FavoritesView = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    setFavorites(storedFavorites ? JSON.parse(storedFavorites) : []);
  }, []);

  const removeFromFavorites = (trackId) => {
    const updatedFavorites = favorites.filter((track) => track.id !== trackId);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className="container">
      <HomeButton />
      <h1>⭐ Mes Favoris</h1>

      {favorites.length === 0 ? (
        <p>Aucun favori ajouté.</p>
      ) : (
        favorites.map((track, index) => (
          <div key={`${track.id}-${index}`} className="favorite-item">
            <p>{track.name} - {track.artists[0].name}</p>
            <button onClick={() => removeFromFavorites(track.id)}>Supprimer</button>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesView;
