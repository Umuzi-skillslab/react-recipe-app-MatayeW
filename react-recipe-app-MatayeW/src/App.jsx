import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import Home from "./pages/Home";
import RecipesPages from "./pages/RecipesPage";
import RecipeDetail from "./components/Recipe/RecipeDetail";
import MealPlannerPage from "./pages/MealPlannerPage";
import FavoritesPage from "./pages/FavoritesPage";
import NotFound from "./pages/NotFound";
import { recipesData } from "./data/recipesData";

function App() {
  return (
    <>

    <Navbar />

    <Routes>
    <Route path="/" element={<h1>Home</h1>} />
    <Route path="/recipes" element={<h1>Recipes</h1>} />
    <Route path="/meal-planner" element={<h1>Meal Planner</h1>} />
    <Route path="/favorites" element={<h1>Favorites</h1>} />
    </Routes>

    </>
  );
}

export default App;
