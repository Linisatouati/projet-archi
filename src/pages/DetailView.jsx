import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAccessToken, fetchArtistDetails } from "../api/spotify";
import ArtistCard from "../components/ArtistCard"; // Nouveau chemin

const DetailView = () => {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = await getAccessToken();
      const data = await fetchArtistDetails(id, token);
      setArtist(data);
    };
    fetchData();
  }, [id]);

  if (!artist) return <p>Chargement des données...</p>;

  return (
    <div>
      <ArtistCard artist={artist} />
    </div>
  );
};

export default DetailView;
