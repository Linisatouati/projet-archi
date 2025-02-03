import React, { useState, useEffect } from "react";
import { useAccessToken, useSpotifySearch } from "../api/spotify";
import SearchBar from "../components/SearchBar";
import ResultItem from "../components/ResultItem";

const ListView = () => {
  const [query, setQuery] = useState("");
  const [favorites, setFavorites] = useState(() => {
    // Récupérer les favoris depuis localStorage (si présents)
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });
  const { data: token } = useAccessToken();
  const { data, isLoading, error } = useSpotifySearch(query, token);

  // Fonction pour ajouter un morceau aux favoris
  const addToFavorites = (track) => {
    setFavorites((prevFavorites) => {
      const newFavorites = [...prevFavorites, track];
      localStorage.setItem("favorites", JSON.stringify(newFavorites)); // Sauvegarder dans localStorage
      return newFavorites;
    });
  };

  // Fonction pour supprimer un morceau des favoris
  const removeFromFavorites = (trackId) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.filter((track) => track.id !== trackId);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // Sauvegarder dans localStorage
      return updatedFavorites;
    });
  };

  return (
    <div className="container">
      <h1>Rechercher des morceaux ou artistes</h1>
      <SearchBar query={query} onChange={setQuery} />

      {isLoading && <p>Chargement...</p>}
      {error && <p>Erreur : {error.message}</p>}

      <div className="card-list">
        {data?.tracks?.items.map((track) => (
          <ResultItem
            key={track.id}
            track={track}
            addToFavorites={addToFavorites} // Passer la fonction addToFavorites
          />
        ))}
      </div>

      <h2>Favoris</h2>
      <div>
        {favorites.length === 0 ? (
          <p>Aucun favori ajouté.</p>
        ) : (
          favorites.map((track, index) => (
            <div key={`${track.id}-${index}`}>
              <p>{track.name} - {track.artists[0].name}</p>
              {/* Bouton pour supprimer un favori */}
              <button onClick={() => removeFromFavorites(track.id)}>Supprimer</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ListView;
