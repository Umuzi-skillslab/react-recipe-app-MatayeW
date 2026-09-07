import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../UI/Button";
import styles from "./MealPlanner.module.css";

const MEAL_TYPES = ["breakfast", "lunch", "dinner"];

// DayCard: reusable 7 times (once per day) by MealPlanner
const DayCard = ({ day, meals, recipes, onAddMeal, onRemoveMeal }) => {
    // Complex state: an object with one key per meal type, tracking the dropdown's current value before it's committed via onAddMeal.
    const [selecting, setSelecting] = useState({
        breakfast: "",
        lunch: "",
        dinner: "",
    });

    const handleSelectChange = (mealType, recipeId) => {
        setSelecting((prev) => ({ ...prev, [mealType]: recipeId }));
    };

    const handleAdd = (mealType) => {
        const recipeId = selecting[mealType];
        if (!recipeId) return;

        const recipe = recipes.find((r) => r.id === parseInt(recipeId, 10));
        onAddMeal(day, mealType, recipe);

        // Reset just that slot's dropdown after adding
        setSelecting((prev) => ({ ...prev, [mealType]: "" }));
    };

    return (
        <div className={styles.dayCard}>
            <h3 className={styles.dayTitle}>
                {day.charAt(0).toUpperCase() + day.slice(1)}
            </h3>

            {MEAL_TYPES.map((mealType) => (
                <div key={mealType} className={styles.mealSlot}>
                    <span className={styles.mealLabel}>{mealType}</span>

                    {meals[mealType] ? (
                        <div className={styles.assignedMeal}>
                            <span>{meals[mealType].title}</span>
                            <Button
                                variant="danger"
                                onClick={() => onRemoveMeal(day, mealType)}
                            >
                                Remove
                            </Button>
                        </div>
                    ) : (
                        <div className={styles.mealPicker}>
                            <select
                                value={selecting[mealType]}
                                onChange={(e) => handleSelectChange(mealType, e.target.value)}
                                className={styles.mealSelect}
                            >
                                <option value="">Choose a recipe...</option>
                                {recipes.map((recipe) => (
                                    <option key={recipe.id} value={recipe.id}>
                                        {recipe.title}
                                    </option>
                                ))}
                            </select>
                            <Button variant="secondary" onClick={() => handleAdd(mealType)}>
                                Add
                            </Button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

DayCard.propTypes = {
    day: PropTypes.string.isRequired,
    meals: PropTypes.shape({
        breakfast: PropTypes.object,
        lunch: PropTypes.object,
        dinner: PropTypes.object,
    }).isRequired,
    recipes: PropTypes.array.isRequired,
    onAddMeal: PropTypes.func.isRequired,
    onRemoveMeal: PropTypes.func.isRequired,
};

export default DayCard;
