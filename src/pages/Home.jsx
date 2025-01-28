import React from "react";
import ButtonStart from "../components/ButtonStart"; // Import du bouton
import "../App.css"; // Assurez-vous que le chemin est correct

const Home = () => {
  return (
    <div className="container">
      <h1>Bienvenue sur Spotify Explorer</h1>
      <p>Découvrez des artistes, des morceaux, et plus encore!</p>
      <ButtonStart /> {/* Utilisation du composant bouton */}
    </div>
  );
};

export default Home;
