// Home.js
import React from "react";
import { Link } from "react-router-dom";
import "../App.css"; // Assurez-vous que le chemin est correct

const Home: React.FC = () => {
  return (
    <div className="container">
      <h1>Bienvenue sur Spotify Explorer</h1>
      <p>Découvrez des artistes, des morceaux, et plus encore!</p>
      <Link to="/list">
        <button>Commencez la recherche</button>
      </Link>
    </div>
  );
};

export default Home;
