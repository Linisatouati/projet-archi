import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import ListView from "./pages/ListView";
import DetailView from "./pages/DetailView";
import FavoritesView from "./pages/FavoritesView"; // ✅ Vérifie bien cet import !

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<ListView />} />
          <Route path="/details/:id" element={<DetailView />} />
          <Route path="/favorites" element={<FavoritesView />} /> 
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
