import React from "react";
import { Link } from "react-router-dom";
import { SpotifyTrack } from "../types/spotify";

interface ResultItemProps {
  track: SpotifyTrack;
}

const ResultItem: React.FC<ResultItemProps> = ({ track }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
      <img
        src={track.album.images[0]?.url}
        alt={track.name}
        style={{ width: "50px", height: "50px", marginRight: "10px" }}
      />
      <div>
        <h3>{track.name}</h3>
        <p>{track.artists[0].name}</p>
        <Link to={`/details/${track.artists[0].id}`}>Voir plus</Link>
      </div>
    </div>
  );
};

export default ResultItem;
