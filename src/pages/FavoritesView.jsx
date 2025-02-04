import React, { useState, useEffect } from "react";
import HomeButton from "../components/HomeButton";
import ResultFav from "../components/ResultFav"; // Importer le composant ResultItem pour afficher chaque favori

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
      <header className="header">
        <HomeButton />
      </header>

      <h1>Mes Favoris</h1>

      {favorites.length === 0 ? (
        <p>Aucun favori ajouté.</p>
      ) : (
        <div className="card-list">
          {favorites.map((track) => (
            <div key={track.id} className="favorite-item">
              <ResultFav
                track={track} // Passer l'objet track au composant ResultItem
              />
              <button onClick={() => removeFromFavorites(track.id)}>Supprimer</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesView;
