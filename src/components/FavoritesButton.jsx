import React from "react";
import { useNavigate } from "react-router-dom";

const FavoritesButton = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/favorites")} className="favorites-button">
      ⭐ Mes Favoris
    </button>
  );
};

export default FavoritesButton;
