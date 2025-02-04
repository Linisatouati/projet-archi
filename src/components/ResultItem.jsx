import React from "react";
import { Link } from "react-router-dom";

const ResultItem = ({ track, addToFavorites }) => {
  return (
    <div className="card">
      <img
        src={track.album.images[0]?.url}
        alt={track.name}
        style={{ width: "100px", height: "100px", borderRadius: "8px" }}
      />
      <div>
        <h3>{track.name}</h3>
        <p>{track.artists[0].name}</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Link to={`/details/${track.artists[0].id}`}>Voir plus</Link>
          <button onClick={() => addToFavorites(track)}>Ajouter aux favoris</button>
        </div>
      </div>
    </div>
  );
};

export default ResultItem;
