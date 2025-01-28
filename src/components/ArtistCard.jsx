import React from "react";

const ArtistCard = ({ artist }) => {
  return (
    <div className="artist-card">
      <h1>{artist.name}</h1>
      {artist.images[0] && (
        <img
          src={artist.images[0].url}
          alt={artist.name}
          className="artist-image"
        />
      )}
      <p>Genres : {artist.genres.join(", ")}</p>
      <p>Popularité : {artist.popularity}</p>
    </div>
  );
};

export default ArtistCard;
