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

// Empty week state for when "Clear Week" is clicked and used as initial state
const EMPTY_WEEK = {
  monday: { breakfast: null, lunch: null, dinner: null },
  tuesday: { breakfast: null, lunch: null, dinner: null },
  wednesday: { breakfast: null, lunch: null, dinner: null },
  thursday: { breakfast: null, lunch: null, dinner: null },
  friday: { breakfast: null, lunch: null, dinner: null },
  saturday: { breakfast: null, lunch: null, dinner: null },
  sunday: { breakfast: null, lunch: null, dinner: null },
};

function App() {
  // loading recipes states
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Favorites and mealPlan states
  const [favorites, setFavorites] = useState([]);
  const [mealPlan, setMealPlan] = useState(EMPTY_WEEK);

// Loading recipes to give the effect of "fetching data"
useEffect(() => {
  setRecipes(recipesData);
  setIsLoading(false);
}, []);

// Load favorites from localStorage
useEffect(() => {
  const saved = localStorage.getItem("favorites");
  if (saved) {
    setFavorites(JSON.parse(saved));
  }
}, []);

// Load saved meal plan to localStorage everytime they change
useEffect(() => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}, [favorites]);

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
