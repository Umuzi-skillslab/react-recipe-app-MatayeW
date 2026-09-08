import PropTypes from "prop-types";
import styles from "./Recipe.module.css";

// Options from RecipesData file
const CATEGORIES = ["all", "breakfast", "lunch", "dinner", "dessert", "snacks"];
const CUISINES = ["all", "American", "Italian", "Asian", "Mexican", "Indian"];
const DIFFICULTIES = ["all", "easy", "medium", "hard"];

const RecipeFilter = ({
  category,
  cuisine,
  difficulty,
  onCategoryChange,
  onCuisineChange,
  onDifficultyChange,
  onClear,
}) => {
  return (
    <div className={styles.filterBar}>
      <select
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
        className={styles.filterSelect}
      >
        {CATEGORIES.map((option) => (
          <option key={option} value={option}>
            {option === "all" ? "All Categories" : option}
          </option>
        ))}
      </select>

      <select
        value={cuisine}
        onChange={(e) => onCuisineChange(e.target.value)}
        className={styles.filterSelect}
      >
        {CUISINES.map((option) => (
          <option key={option} value={option}>
            {option === "all" ? "All Cuisines" : option}
          </option>
        ))}
      </select>

      <select
        value={difficulty}
        onChange={(e) => onDifficultyChange(e.target.value)}
        className={styles.filterSelect}
      >
        {DIFFICULTIES.map((option) => (
          <option key={option} value={option}>
            {option === "all" ? "All Difficulties" : option}
          </option>
        ))}
      </select>

      {(category !== "all" || cuisine !== "all" || difficulty !== "all") && (
        <button onClick={onClear} className={styles.clearButton}>
          Clear Filters
        </button>
      )}
    </div>
  );
};

RecipeFilter.propTypes = {
  category: PropTypes.string.isRequired,
  cuisine: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  onCategoryChange: PropTypes.func.isRequired,
  onCuisineChange: PropTypes.func.isRequired,
  onDifficultyChange: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
};

export default RecipeFilter;
