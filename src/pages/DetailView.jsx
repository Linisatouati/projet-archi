import React from "react";
import { useParams } from "react-router-dom";
import { useAccessToken, useArtistDetails } from "../api/spotify";
import ArtistCard from "../components/ArtistCard";
import HomeButton from "../components/HomeButton";

const DetailView = () => {
  const { id } = useParams();
  const { data: token } = useAccessToken();
  const { data: artist, isLoading, error } = useArtistDetails(id, token);

  if (isLoading) return <p>Chargement des données...</p>;
  if (error) return <p>Erreur : {error.message}</p>;
  if (!artist) return <p>Aucun artiste trouvé.</p>;

  // 🔹 Générer le lien YouTube
  const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(artist.name)}+song`;

  return (
    <div>
      <HomeButton />
      <ArtistCard artist={artist} />
      
      {/* 🔹 Bouton pour ouvrir YouTube */}
      <a href={youtubeSearchUrl} target="_blank" rel="noopener noreferrer">
        🎵 Voir sur YouTube
      </a>
    </div>
  );
};

export default DetailView;
