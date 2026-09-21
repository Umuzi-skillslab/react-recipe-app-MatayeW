import PropTypes from "prop-types";
import MealPlanner from "../components/MealPlanner/MealPlanner";
import styles from "./Pages.module.css";

// Page to provide the page container and pass props straight through MealPlanner/DayCard from App.jsx
const MealPlannerPage = ({ mealPlan, recipes, onAddMeal, onRemoveMeal, onClearWeek }) => {
    return (
        <div className={styles.page}>
            <MealPlanner 
            mealPlan={mealPlan} 
            recipes={recipes} 
            onAddMeal={onAddMeal} 
            onRemoveMeal={onRemoveMeal} 
            onClearWeek={onClearWeek} 
            />
        </div>
    );
};

MealPlannerPage.propTypes = {
    mealPlan: PropTypes.object.isRequired,
    recipes: PropTypes.array.isRequired,
    onAddMeal: PropTypes.func.isRequired,
    onRemoveMeal: PropTypes.func.isRequired,
    onClearWeek: PropTypes.func.isRequired,
};

export default MealPlannerPage;