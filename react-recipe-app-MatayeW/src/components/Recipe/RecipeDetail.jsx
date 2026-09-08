import { useParams, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "../UI/Button";
import VideoPlayer from "../Media/VideoPlayer";
import { formatCookTime, getTotalTime, getDifficultyEmoji } from "../../utils/helpers";
import styles from "./Recipe.module.css";

// function to read the id from the url and look up matching recipe
const RecipeDetail = ({ recipes }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Route params to always arrive as strings
    const recipe = recipes.find((r) => r.id === parseInt(id, 10));

    // Error/not-found state to show "not found" message instead of recipe details
    if(!recipe) {
        return (
            <div className={styles.notFound}>
                <h2>Recipe not found</h2>
                <p>We could not find a recipe with that ID.</p>
                <Button onClick={() => navigate("/recipes")}>Back to Recipes</Button>
            </div>
        );
    }

    return (
        <div className={styles.recipeDetail}>
            <Button variant="secondary" onClick={() => navigate("/recipes")}>
                ← Back to Recipes
            </Button>

            <h1>{recipe.title}</h1>

            <p className={styles.recipeMeta}>
                {recipe.cuisine} ● {getDifficultyEmoji(recipe.difficulty)} {recipe.difficulty} ●{""}
                {formatCookTime(getTotalTime(recipe))} ● Serves {recipe.servings || 4}
            </p>

            <img src={recipe.image} alt={recipe.title} className={styles.detailImage} />

            <VideoPlayer videoUrl={recipe.videoUrl} title={`${recipe.title} - Tutorial`} />

            <div className={styles.detailColumns}>
                <div>
                    <h2>Ingredients</h2>
                    <ul>
                        {recipe.ingredients.map((ingredient, index) =>(
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2>Instructions</h2>
                    <ol>
                        {recipe.instructions.map((step, index) => (
                            <li key={index}>{step}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
};

RecipeDetail.propTypes = {
    recipes: PropTypes.array.isRequired,
};

export default RecipeDetail;