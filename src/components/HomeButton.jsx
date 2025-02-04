import React from "react";
import { useNavigate } from "react-router-dom";

const HomeButton = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate("/")} className="home-button">
      Accueil
    </button>
  );
};

export default HomeButton;
