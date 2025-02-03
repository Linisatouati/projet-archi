import React from "react";
import { useParams } from "react-router-dom";
import { useAccessToken, useArtistDetails } from "../api/spotify";
import ArtistCard from "../components/ArtistCard";

const DetailView = () => {
  const { id } = useParams();
  const { data: token } = useAccessToken();
  const { data: artist, isLoading, error } = useArtistDetails(id, token);

  if (isLoading) return <p>Chargement des données...</p>;
  if (error) return <p>Erreur : {error.message}</p>;
  
  return (
    <div>
      <ArtistCard artist={artist} />
    </div>
  );
};

export default DetailView;