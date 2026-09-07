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

// Load saved meal plan from localStorage 
useEffect(() => {
  const saved = localStorage.getItem("mealPlan");
  if (saved) {
    setMealPlan(JSON.parse(saved));
  }
}, []);

// Save favorites to localStorage everytime they change
useEffect(() => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}, [favorites]);

// Save meal plan to localStorage everytime it changes
useEffect(() => {
  localStorage.setItem("mealPlan", JSON.stringify(mealPlan));
}, [mealPlan]);

// Child to parent callback: RecipeCard calls this when favorite button is clicked
const handleFavoriteToggle = (recipeId) => {
  setFavorites((prev) => {
    const alreadyFavorited = prev.some((r) => r.id === recipeId);
    if (alreadyFavorited) {
      return prev.filter((r) => r.id !== recipeId);
    }
    const recipe = recipes.find((r) => r.id === recipeId);
    return [...prev, recipe];
  });
};

// Child to parent callback: DayCard calls this when "Add" is clicked
const handleAddMeal = (day, mealType, recipe) => {
  setMealPlan((prev) => ({
    ...prev,
    [day]: { ...prev[day], [mealType]: recipe },
  }));
};

const handleRemoveMeal = (day, mealType) => {
  setMealPlan((prev) => ({
    ...prev,
    [day]: { ...prev[day], [mealType]: null },
  }));
};

const handleClearWeek = () => {
  setMealPlan(EMPTY_WEEK);
};

  return (
    <>

    <Navbar favoritesCount={favorites.length} />

    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route 
        path="/recipes" 
        element={
          <RecipesPage 
          recipes={recipes} 
          favorites={favorites} 
          isLoading={isLoading} 
          onFavoriteToggle={handleFavoriteToggle} 
        />
      }
    />
    <Route
    path="/recipes/:id" element={<RecipeDetail recipes={recipes} />} />

    <Route 
      path="/meal-planner" 
      element={
        <MealPlannerPage
        mealPlan={mealPlan}
        recipes={recipes}
        onAddMeal={handleAddMeal}
        onRemoveMeal={handleRemoveMeal}
        onClearWeek={handleClearWeek} 
        />
      }
    />
    <Route 
      path="/favorites" 
      element={
        <FavoritesPage favorites={favorites} onFavoriteToggle={handleFavoriteToggle} />
      } 
    />
    <Route path="*" element={<NotFound />} />
    </Routes>

    </>
  );
}

export default App;
