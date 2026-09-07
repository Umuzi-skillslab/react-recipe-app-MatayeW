import "./App.css";

import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navigation/Navbar";
import Footer from "./components/common/Footer";

import Home from "./pages/Home";
import RecipesPage from "./pages/RecipesPage";
import RecipeDetail from "./components/Recipe/RecipeDetail";
import MealPlannerPage from "./pages/MealPlannerPage";
import FavoritesPage from "./pages/FavoritesPage";
import NotFound from "./pages/NotFound";

import { recipesData } from "./data/recipesData";

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
    // Recipe data is available immediately when the app starts.
    const [recipes] = useState(recipesData);

    // Loading state is used by the recipe page for conditional rendering.
    const [isLoading] = useState(false);

    // Load saved favorites when the state is first created.
    const [favorites, setFavorites] = useState(() => {
        const saved = localStorage.getItem("favorites");

        return saved ? JSON.parse(saved) : [];
    });

    // Load the saved meal plan when the state is first created.
    const [mealPlan, setMealPlan] = useState(() => {
        const saved = localStorage.getItem("mealPlan");

        return saved ? JSON.parse(saved) : EMPTY_WEEK;
    });

    // Save favorites whenever the favorites state changes.
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    // Save the meal plan whenever the meal plan state changes.
    useEffect(() => {
        localStorage.setItem("mealPlan", JSON.stringify(mealPlan));
    }, [mealPlan]);

    // Update the browser tab title when the app loads.
    useEffect(() => {
        document.title = "Recipe Discovery & Meal Planner";
    }, []);

    // Add or remove a recipe from the favorites list.
    const handleFavoriteToggle = (recipeId) => {
        setFavorites((prev) => {
            const alreadyFavorited = prev.some(
                (recipe) => recipe.id === recipeId
            );

            if (alreadyFavorited) {
                return prev.filter((recipe) => recipe.id !== recipeId);
            }

            const recipe = recipes.find((item) => item.id === recipeId);

            return [...prev, recipe];
        });
    };

    // Add a recipe to a specific day and meal.
    const handleAddMeal = (day, mealType, recipe) => {
        setMealPlan((prev) => ({
            ...prev,
            [day]: {
                ...prev[day],
                [mealType]: recipe,
            },
        }));
    };

    // Remove a recipe from a specific meal.
    const handleRemoveMeal = (day, mealType) => {
        setMealPlan((prev) => ({
            ...prev,
            [day]: {
                ...prev[day],
                [mealType]: null,
            },
        }));
    };

    // Clear every meal from the weekly planner.
    const handleClearWeek = () => {
        setMealPlan(EMPTY_WEEK);
    };

    return (
        <div className="app">
            <Navbar favoritesCount={favorites.length} />

            <main className="main">
                <Routes>
                    <Route path="/" element={<Home />} />

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
                        path="/recipes/:id"
                        element={<RecipeDetail recipes={recipes} />}
                    />

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
                            <FavoritesPage
                                favorites={favorites}
                                onFavoriteToggle={handleFavoriteToggle}
                            />
                        }
                    />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>

            <Footer />
        </div>
    );
}

export default App;