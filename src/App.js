import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import RecipeDetails from "./components/RecipeDetails";
import "./components/style.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/:MealId" element={<RecipeDetails />} />
      </Routes>
    </>
  );
}

export default App;
