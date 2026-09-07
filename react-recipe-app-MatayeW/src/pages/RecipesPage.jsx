import { useState } from "react";
import PropTypes from "prop-types";
import SearchBar from "../components/UI/SearchBar";
import RecipeFilter from "../components/Recipe/RecipeFilter";
import RecipeList from "../components/Recipe/RecipeList";
import Loading from "../components/UI/Loading";
import { filterRecipes, sortRecipes } from "../utils/helpers";
import styles from "./Pages.module.css";

// RecipesPage: owns the local filter/sort/search state (this state
// is only relevant to this page, so it isn't lifted to App.jsx).
// recipes/favorites/onFavoriteToggle come down from App as props.
const RecipesPage = ({ recipes, favorites, isLoading, onFavoriteToggle }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [category, setCategory] = useState("all");
    const [cuisine, setCuisine] = useState("all");
    const [difficulty, setDifficulty] = useState("all");
    const [sortBy, setSortBy] = useState("title");

    // Data transformation: filter first, then sort the result.
    // Recomputed on every render from the current filter state —
    // no need for extra state just to hold "the filtered list".
    const filtered = filterRecipes(recipes, { searchTerm, category, cuisine, difficulty });
    const visibleRecipes = sortRecipes(filtered, sortBy);

    const handleClearFilters = () => {
        setCategory("all");
        setCuisine("all");
        setDifficulty("all");
    };

    return (
        <div className={styles.page}>
            <h1>Browse Recipes</h1>

            <SearchBar onSearch={setSearchTerm} placeholder="Search by recipe name..." />

            <RecipeFilter
                category={category}
                cuisine={cuisine}
                difficulty={difficulty}
                onCategoryChange={setCategory}
                onCuisineChange={setCuisine}
                onDifficultyChange={setDifficulty}
                onClear={handleClearFilters}
            />

            <div className={styles.sortRow}>
                <label htmlFor="sortBy">Sort by:</label>
                <select id="sortBy" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="title">Title</option>
                    <option value="time">Cook Time</option>
                    <option value="difficulty">Difficulty</option>
                </select>
            </div>

            {/* Loading state: shown while recipes are being "fetched" in App.jsx */}
            {isLoading ? (
                <Loading message="Loading recipes..." />
            ) : (
                <RecipeList
                    recipes={visibleRecipes}
                    favorites={favorites}
                    onFavoriteToggle={onFavoriteToggle}
                />
            )}
        </div>
    );
};

RecipesPage.propTypes = {
    recipes: PropTypes.array.isRequired,
    favorites: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired,
    onFavoriteToggle: PropTypes.func.isRequired,
};

export default RecipesPage;