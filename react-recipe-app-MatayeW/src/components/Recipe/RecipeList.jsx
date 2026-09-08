import PropTypes from "prop-types";
import RecipeCard from "./RecipeCard";
import styles from "./Recipe.module.css";

// RecipeList: takes an array of recipes (already filtered/sorted by the parent) and renders one RecipeCard per recipe
const RecipeList = ({ recipes, favorites, onFavoriteToggle }) => {
  // Empty state: shown when filtering leaves nothing to display

  if (recipes.length === 0) {
    return (
      <p className={styles.emptyState}>
        No recipes found. Try a different search or filter.
      </p>
    );
  }

  return (
    <div className={styles.recipeGrid}>
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          isFavorite={favorites.some((fav) => fav.id === recipe.id)}
          onFavoriteToggle={onFavoriteToggle}
        />
      ))}
    </div>
  );
};

RecipeList.propTypes = {
  recipes: PropTypes.array.isRequired,
  favorites: PropTypes.array.isRequired,
  onFavoriteToggle: PropTypes.func.isRequired,
};

export default RecipeList;
