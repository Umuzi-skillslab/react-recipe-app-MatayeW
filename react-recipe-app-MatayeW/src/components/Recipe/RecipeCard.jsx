import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "../UI/Card";
import Button from "../UI/Button";
import { formatCookTime, getTotalTime, getDifficultyEmoji } from "../../utils/helpers";
import styles from "./Recipe.module.css";

// RecipeCard dispays a single recipe's summary
const RecipeCard = ({ recipe, isFavorite = false, onFavoriteToggle }) => {
    // whole card is wrapped in a Link and clicking the favorite button stops the click from also triggering navigation
    const handleFavoriteClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        onFavoriteToggle(recipe.id);
    };

    return (
        <Link to={`/recipes/${recipe.id}`} className={styles.cardLink}>
            <Card hoverable>
                <img src={recipe.image} alt={recipe.title} className={styles.recipeImage} />
                <div className={styles.recipeInfo}>
                    <h3>{recipe.title}</h3>
                    <p className={styles.recipeMeta}>
                        {recipe.cuisine} ● {getDifficultyEmoji(recipe.difficulty)} {recipe.difficulty}
                    </p>
                    <p className={styles.recipeMeta}>⏱️ {formatCookTime(getTotalTime(recipe))}</p>
                    <p className={styles.recipeMeta}>Servings: {recipe.servings || 4}</p>

                    <Button variant={isFavorite ? "danger" : "secondary"} onClick={handleFavoriteClick}>
                        {isFavorite ? "❤️ Favorited" : "🤍 Favorite"}
                    </Button>
                </div>
            </Card>
        </Link>
    );
};
