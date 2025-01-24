import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAccessToken, fetchArtistDetails } from "../api/spotify";
import { SpotifyArtist } from "../types/spotify";

const DetailView: React.FC = () => {
  const { id } = useParams();
  const [artist, setArtist] = useState<SpotifyArtist | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const token = await getAccessToken();
      const data = await fetchArtistDetails(id!, token);
      setArtist(data);
    };
    fetchData();
  }, [id]);

  if (!artist) return <p>Chargement des données...</p>;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>{artist.name}</h1>
      {artist.images[0] && (
        <img
          src={artist.images[0].url}
          alt={artist.name}
          style={{ width: "200px", borderRadius: "10px" }}
        />
      )}
      <p>Genres : {artist.genres.join(", ")}</p>
      <p>Popularité : {artist.popularity}</p>
    </div>
  );
};

export default DetailView;
