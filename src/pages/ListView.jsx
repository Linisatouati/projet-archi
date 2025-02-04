import React, { useState, useEffect } from "react";
import { useAccessToken, useSpotifySearch } from "../api/spotify";
import SearchBar from "../components/SearchBar";
import ResultItem from "../components/ResultItem";
import HomeButton from "../components/HomeButton"; // Ajout du bouton
import FavoritesButton from "../components/FavoritesButton"; // 🔹 Bouton Favoris

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


  return (
    <div className="container">
      <FavoritesButton /> {/* 🔹 Ajout du bouton Favoris */}
      <HomeButton /> {/* Ajout du bouton Home */}
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
    </div>
  );
};

export default ListView;
